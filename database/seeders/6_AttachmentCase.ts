import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Case from 'App/Models/Case'
import Attachment from 'App/Models/Attachment'

const attachmentCaseList = [
  {
    caseId: 1,
    attachmentsId: [6, 7, 8]
  },
  {
    caseId: 2,
    attachmentsId: [9, 10]
  },
  {
    caseId: 3,
    attachmentsId: [11, 12, 13]
  },
  {
    caseId: 4,
    attachmentsId: [14]
  },
  {
    caseId: 5,
    attachmentsId: [15, 16]
  },
  {
    caseId: 6,
    attachmentsId: [17, 18, 19]
  },
  {
    caseId: 7,
    attachmentsId: [20, 21]
  },
  {
    caseId: 8,
    attachmentsId: [22, 23, 24]
  },
  {
    caseId: 9,
    attachmentsId: [25, 26]
  },
  {
    caseId: 10,
    attachmentsId: [27]
  }
]

export default class AttachmentCaseSeeder extends BaseSeeder {
  public async run () {
    try {
      await Promise.all(attachmentCaseList.map(async ({ caseId, attachmentsId }) => {
        const theCase = await Case.findOrFail(caseId)
        if (theCase) {
          let theAttachmentsId: number[] | null = null
          await Promise.all(attachmentsId.map(async item => {
            const attachment = await Attachment.findOrFail(item)
            if (attachment) {
              if (theAttachmentsId) {
                theAttachmentsId.push(attachment.id)
              } else {
                theAttachmentsId = [attachment.id]
              }
            }
          }))
          if (theAttachmentsId) {
            await theCase.related('attachments').attach(theAttachmentsId)
          }
        }
      }))
    } catch (err) {
      console.log(err)
    }
  }
}
