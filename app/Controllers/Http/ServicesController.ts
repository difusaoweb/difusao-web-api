import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Service from 'App/Models/Service'
import Attachment from 'App/Models/Attachment'

export default class ServicesController {
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
        .orderBy('created_at', 'desc')
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

  public async delete ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.services_id) {
        response.send({ failure: { message: 'Lack of data.' } })
        response.status(500)
        return response
      }
      const servicesId: number[] = qs.services_id

      const responseDb = await Database.from('services').select('id').whereIn('id', servicesId)
      if (responseDb.length === 0) {
        response.send({ failure: { message: 'Services not found.' } })
        response.status(404)
        return response
      }

      await Database.from('services').whereIn('id', servicesId).delete()

      response.send({
        success: {
          deleted: true
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'Error when deleting the services.' } })
      response.status(500)
      return response
    }
  }

  public async create ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.title || !qs.description || !qs.attachment_id) {
        response.send({ failure: { message: 'Lack of data.' } })
        response.status(500)
        return response
      }

      const title = String(qs.title)
      const description = String(qs.description)
      const attachmentId = Number(qs.attachment_id)

      const attachment = await Attachment.find(attachmentId)
      if (!attachment) {
        response.send({ failure: { message: 'Attachment not found.' } })
        response.status(404)
        return response
      }

      const service = await Service.create({ title, description })

      await service.related('attachment').attach([attachment.id])

      response.send({ success: { service_id: service.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'Error when creating the service.' } })
      response.status(500)
      return response
    }
  }
}
