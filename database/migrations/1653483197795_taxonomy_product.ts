import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TaxonomyProduct extends BaseSchema {
  protected tableName = 'taxonomy_product'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table
        .integer('product_id')
        .unsigned()
        .references('products.id')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('taxonomy_id')
        .unsigned()
        .references('taxonomies.id')
        .onDelete('CASCADE')
        .notNullable()
      table.unique(['product_id', 'taxonomy_id'])
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}