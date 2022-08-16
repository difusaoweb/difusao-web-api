import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Service from 'App/Models/Service'
import Attachment from 'App/Models/Attachment'

const attachmentServiceList = [
  {
    serviceId: 1,
    attachmentId: 1
  },
  {
    serviceId: 2,
    attachmentId: 2
  },
  {
    serviceId: 3,
    attachmentId: 3
  },
  {
    serviceId: 4,
    attachmentId: 4
  },
  {
    serviceId: 5,
    attachmentId: 5
  }
]

export default class AttachmentServiceSeeder extends BaseSeeder {
  public async run () {
    try {
      await Promise.all(attachmentServiceList.map(async ({ serviceId, attachmentId }) => {
        const service = await Service.findOrFail(serviceId)
        const attachment = await Attachment.findOrFail(attachmentId)
        if (service && attachment) {
          await service.related('attachment').attach([attachment.id])
        }
      }))
    } catch (err) {
      console.log(err)
    }
  }
}
