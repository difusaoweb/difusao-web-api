import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { string } from '@ioc:Adonis/Core/Helpers'
import Drive from '@ioc:Adonis/Core/Drive'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema } from '@ioc:Adonis/Core/Validator'
import Env from '@ioc:Adonis/Core/Env'
import { DateTime } from 'luxon'

import Attachment from 'App/Models/Attachment'

export default class AttachmentsController {
  public async list ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      page: schema.number(),
      per_page: schema.number()
    })

    try {
      const { page, per_page: perPage } = await request.validate({ schema: controllerSchema })

      const thePage = perPage === -1 ? 1 : page
      const thePerPage = perPage === -1 ? 999999999999 : perPage

      const responseDb = await Database.from('attachments')
        .select('id', 'title', 'source', 'created_at')
        .orderBy('created_at', 'desc')
        .paginate(thePage, thePerPage)

      if (responseDb.all().length === 0) {
        response.send({ failure: { message: 'Attachments not found.' } })
        response.status(404)
        return response
      }

      response.send({
        success: {
          attachments: responseDb.all(),
          last_page: responseDb.lastPage,
          total: responseDb.total
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error getting attachment list.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async show ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      attachment_id: schema.number()
    })

    try {
      const { attachment_id: AttachmentId } = await request.validate({ schema: controllerSchema })

      const attachment = await Attachment.findOrFail(AttachmentId)
      if (!attachment) {
        response.send({ failure: { message: 'Attachment not found.' } })
        response.status(404)
        return response
      }

      const theAttachment = { title: attachment.title, source: attachment.source }

      response.send({ success: { attachment: theAttachment } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error getting attachment.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async create ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      image: schema.file({
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg']
      })
    })

    try {
      const { image: attachmentUpload } = await request.validate({ schema: controllerSchema })

      const attachmentName = attachmentUpload.clientName
      const attachmentFileName = `${DateTime.local().toMillis()}-${attachmentName}`

      await attachmentUpload.moveToDisk('./', {
        name: attachmentFileName
      })
      let attachmentFileUrl = await Drive.getUrl(attachmentFileName)

      if (Env.get('DRIVE_DISK') === 'local') {
        attachmentFileUrl = `http://${Env.get('HOST')}:${Env.get('PORT')}${attachmentFileUrl}`
      }

      const attachment = await Attachment.create({
        title: attachmentName.replace(/\.[^/.]+$/, ''),
        source: attachmentFileUrl
      })

      response.send({ success: { attachment_id: attachment.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error while creating attachment.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async update ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      attachment_id: schema.number(),
      attachment_title: schema.string()
    })

    try {
      const { attachment_id: AttachmentId, attachment_title: attachmentTitle } = await request.validate({ schema: controllerSchema })

      const attachment = await Attachment.find(AttachmentId)
      if (!attachment) {
        response.send({ failure: { message: 'Attachment not found.' } })
        response.status(404)
        return response
      }

      attachment.title = attachmentTitle
      attachment.save()

      response.send({ success: { updated: true } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error while updating attachment.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async delete ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      attachments_id: schema.array().members(schema.number())
    })
    try {
      const { attachments_id: attachmentsId } = await request.validate({ schema: controllerSchema })

      const attachments = await Attachment.findMany(attachmentsId)
      if (attachments.length !== attachmentsId.length) {
        response.send({ failure: { message: 'Attachment not found.' } })
        response.status(404)
        return response
      }

      await Promise.all(attachments.map(async attachment => {
        const file = attachment.source.split('/').pop()
        if (!file) return
        await Drive.delete(file)
      }))

      await Database.from('attachments').whereIn('id', attachmentsId).delete()

      response.send({ success: { deleted: true } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error deleting the attachment(s).' } })
      response.status(err?.status ?? 500)
      return response
    }
  }
}
