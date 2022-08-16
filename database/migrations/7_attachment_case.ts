import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AttachmentCase extends BaseSchema {
  protected tableName = 'attachment_case'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table.integer('case_id').unsigned().references('cases.id').onDelete('CASCADE').notNullable()
      table
        .integer('attachment_id')
        .unsigned()
        .references('attachments.id')
        .onDelete('CASCADE')
        .notNullable()
      table.unique(['case_id', 'attachment_id'])
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
