import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Product from 'App/Models/Product'

export default class Taxonomy extends BaseModel {
  public static table = 'taxonomies'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Product, {
    localKey: 'id', // taxonomy id
    pivotForeignKey: 'taxonomy_id',
    relatedKey: 'id', // product id
    pivotRelatedForeignKey: 'product_id',
    pivotTable: 'taxonomy_product',
    pivotTimestamps: true,
  })
  public products: ManyToMany<typeof Product>
}
