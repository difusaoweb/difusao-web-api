import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'

import Product from 'App/Models/Product'
import Attachment from 'App/Models/Attachment'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @hasMany(() => Product, {
    foreignKey: 'author',
  })
  public products: HasMany<typeof Product>

  @hasMany(() => Attachment, {
    foreignKey: 'author',
  })
  public attachments: HasMany<typeof Attachment>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime | null
}
