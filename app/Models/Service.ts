import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Attachment from 'App/Models/Attachment'

export default class Service extends BaseModel {
  public static table = 'services'

  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string | null

  @manyToMany(() => Attachment, {
    pivotTimestamps: true
  })
  public attachments: ManyToMany<typeof Attachment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
