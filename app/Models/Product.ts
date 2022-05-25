import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'

import Taxonomy from 'App/Models/Taxonomy'

export default class Product extends BaseModel {
  public static table = 'products'

  @column({ isPrimary: true })
  public id: number

  @column()
  public image: string | null

  @column()
  public name: string

  @column()
  public sku: number | null

  @column()
  public stock: boolean | null

  @column()
  public price: number | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Taxonomy, {
    localKey: 'id', // product id
    pivotForeignKey: 'product_id',
    relatedKey: 'id', // taxonomy id
    pivotRelatedForeignKey: 'taxonomy_id',
    pivotTable: 'taxonomy_product',
    pivotTimestamps: true,
  })
  public taxonomies: ManyToMany<typeof Taxonomy>
}
