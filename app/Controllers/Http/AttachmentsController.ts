import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { string } from '@ioc:Adonis/Core/Helpers'

import Attachment from 'App/Models/Attachment'
import Drive from '@ioc:Adonis/Core/Drive'

export default class AttachmentsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const all = await Attachment.all()

      response.send({ success: all })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.id) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }
      const AttachmentId = String(qs.id)

      const attachment = await Attachment.find(AttachmentId)
      if (!attachment) {
        response.send({ failure: true })
        response.status(404)
        return response
      }

      response.send({ success: attachment })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async create({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const currentUserId: number = auth.use('api').user.id

      const attachmentUpload = request.file('image', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg'],
      })
      if (!attachmentUpload) {
        response.send({ failure: { message: 'file not accepeted' } })
        response.status(404)
        return response
      }

      const attachmentName = attachmentUpload.clientName
      const attachmentFileName = `${string.generateRandom(16)}-${attachmentUpload.clientName}`
      await attachmentUpload.moveToDisk('./', {
        name: attachmentFileName,
      })
      const attachmentFileUrl = await Drive.getUrl(attachmentFileName)

      const attachmentData = {
        title: attachmentName,
        source: attachmentFileUrl,
        author: currentUserId,
      }
      const attachment = await Attachment.create(attachmentData)

      response.send({ success: { attachment_id: attachment.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async update({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const currentUserId: number = auth.use('api').user.id

      const qs = request.qs()
      if (!qs.id || !qs.title) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }
      const AttachmentId = String(qs.id)
      const AttachmentNewTitle = String(qs.title)

      const attachment = await Attachment.find(AttachmentId)
      if (!attachment) {
        response.send({ failure: { message: 'attachment not found' } })
        response.status(404)
        return response
      }

      if (attachment.author !== currentUserId) {
        response.send({ failure: { message: 'not access' } })
        response.status(403)
        return response
      }

      attachment.title = AttachmentNewTitle
      attachment.save()

      response.send({ success: true })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async delete({ auth, request, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      const currentUserId: number = auth.use('api').user.id

      const qs = request.qs()
      if (!qs.id) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }
      const AttachmentId = String(qs.id)

      const attachment = await Attachment.find(AttachmentId)
      if (!attachment) {
        response.send({ failure: { message: 'attachment not found' } })
        response.status(404)
        return response
      }

      if (attachment.author !== currentUserId) {
        response.send({ failure: { message: 'not access' } })
        response.status(403)
        return response
      }

      await attachment.delete()

      response.send({ success: true })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }
}
