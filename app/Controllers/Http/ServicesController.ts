import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Drive from '@ioc:Adonis/Core/Drive'
import { string } from '@ioc:Adonis/Core/Helpers'

import Service from 'App/Models/Service'
import Taxonomy from 'App/Models/Taxonomy'

export default class ServicesController {
  public async create ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!(!!qs.name && !!qs.price && !!qs.stock)) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      // const name = String(qs.name)
      // const price = Number(qs.price)
      // const stock = Boolean(qs.stock == 1 ? true : false)

      // const description: string | null = qs.description ? String(qs.description) : null
      // const sku = qs.sku ? Number(qs.sku) : null
      // const categoryId: number | null = qs.category_id ? Number(qs.category_id) : null

      // const theService = { name, sku, price, stock, description }
      // const service = await Service.create(theService)

      // if (categoryId) {
      //   const taxonomy = await Taxonomy.find(categoryId)
      //   if (!taxonomy) {
      //     response.send({ failure: { message: 'lack of data' } })
      //     response.status(500)
      //     return response
      //   }

      //   await service.related('taxonomies').attach([taxonomy.id])
      // }

      const serviceImage = request.file('image', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg']
      })
      if (serviceImage) {
        const imageNewName = `${string.generateRandom(16)}-${serviceImage.clientName}`
        await serviceImage.moveToDisk('./', {
          name: imageNewName
        })
        const url = await Drive.getUrl(imageNewName)
        console.log(url)
      }

      // response.send({ success: { service_id: service.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async delete ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.service_ids) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      const serviceIds: number[] = qs.service_ids

      await Database.from('services').delete().whereIn('id', serviceIds)

      response.send({ success: true })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'lack of data' } })
      response.status(500)
      return response
    }
  }

  public async list ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.page || !qs.per_page) {
        response.send({ failure: { message: 'Lack of data.' } })
        response.status(500)
        return response
      }
      const page = parseInt(qs.page)
      const perPage = parseInt(qs.per_page) !== -1 ? parseInt(qs.per_page) : undefined

      const responseDb = await Database.from('services').select(
        'services.id',
        'attachments.source as image',
        'services.title',
        'services.description',
        'services.created_at'
      )
        .leftJoin('attachment_service', 'attachment_service.service_id', '=', 'services.id')
        .leftJoin('attachments', 'attachments.id', '=', 'attachment_service.attachment_id')
        .paginate(page, perPage)

      if (responseDb.all().length === 0) {
        response.send({ failure: { message: 'Services not found.' } })
        response.status(404)
        return response
      }

      response.send({
        success: {
          services: responseDb.all(),
          last_page: responseDb.lastPage,
          total: responseDb.total
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'Error getting service list.' } })
      response.status(500)
      return response
    }
  }
}
