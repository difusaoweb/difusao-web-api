import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema } from '@ioc:Adonis/Core/Validator'
import UtilsService from 'App/Services/UtilsService'

import Service from 'App/Models/Service'
import Attachment from 'App/Models/Attachment'

export default class ServicesController {
  public async list ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      page: schema.number(),
      perPage: schema.number()
    })
    try {
      const { page, perPage } = await request.validate({ schema: controllerSchema })

      const responseDb = await Database.from('services').select(
        'services.id',
        Database.raw('array_agg(attachments.source) as attachments_id'),
        'services.title',
        'services.description',
        'services.created_at as createdAt'
      )
        .leftJoin('attachment_service', 'attachment_service.service_id', '=', 'services.id')
        .leftJoin('attachments', 'attachments.id', '=', 'attachment_service.attachment_id')
        .groupBy('services.id')
        .orderBy('services.created_at', 'desc')
        .paginate(page, perPage)

      if (responseDb.all().length === 0) {
        response.send({ failure: { message: 'Services not found.' } })
        response.status(404)
        return response
      }

      const theServices = responseDb.all().map(service => {
        const attachmentsId = service?.attachments_id?.[0] == null ? null : service.attachments_id
        delete service.attachments_id
        return { ...service, attachmentsId }
      })

      response.send({
        success: {
          services: theServices,
          lastPage: responseDb.lastPage,
          total: responseDb.total
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error getting service list.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async show ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      serviceId: schema.number()
    })
    try {
      const { serviceId } = await request.validate({ schema: controllerSchema })

      const responseDb = await Database.from('services').select(
        'attachments.id as attachmentId',
        'attachments.source as attachmentSource',
        'services.title',
        'services.description',
        'services.created_at as createdAt'
      )
        .leftJoin('attachment_service', 'attachment_service.service_id', '=', 'services.id')
        .leftJoin('attachments', 'attachments.id', '=', 'attachment_service.attachment_id')
        .where('services.id', serviceId)

      if (responseDb.length === 0) {
        response.send({ failure: { message: 'Service not found.' } })
        response.status(404)
        return response
      }

      response.send({
        success: {
          service: responseDb[0]
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error getting service list.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async create ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      title: schema.string(),
      description: schema.string(),
      attachmentsId: schema.array().members(schema.number())
    })
    try {
      const { title, description, attachmentsId } = await request.validate({ schema: controllerSchema })

      const attachments = await Attachment.findMany(attachmentsId)
      if (attachments.length !== attachmentsId.length) {
        response.send({ failure: { message: 'Attachments not found.' } })
        response.status(404)
        return response
      }

      const service = await Service.create({ title, description })

      await service.related('attachments').attach(attachments.map(attachment => { return attachment.id }))

      response.send({ success: { serviceId: service.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error when creating the service.' } })
      response.status(err?.status ?? 500)
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
}
