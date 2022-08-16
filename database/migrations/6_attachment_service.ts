import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AttachmentService extends BaseSchema {
  protected tableName = 'attachment_service'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table
        .integer('service_id')
        .unsigned()
        .references('services.id')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('attachment_id')
        .unsigned()
        .references('attachments.id')
        .onDelete('CASCADE')
        .notNullable()
      table.unique(['service_id', 'attachment_id'])
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
