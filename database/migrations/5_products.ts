import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.boolean('stock').notNullable()
      table.decimal('price').notNullable()
      table.string('sku').nullable()
      table.text('description', 'longtext').nullable()
      table.integer('author').unsigned().references('users.id').onDelete('CASCADE').notNullable()
      table.integer('attachment').unsigned().references('attachments.id').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
