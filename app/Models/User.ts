import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

import Product from 'App/Models/Product'
import Attachment from 'App/Models/Attachment'

export default class User extends BaseModel {
  public static table = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public displayName: string

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
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
