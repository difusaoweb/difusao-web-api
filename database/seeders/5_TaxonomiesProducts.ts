import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'

export default class TaxonomiesProductsSeeder extends BaseSeeder {
  public async run() {
    try {
      await Database.insertQuery()
        .table('taxonomy_product')
        .multiInsert([
          {
            product_id: 1,
            taxonomy_id: 1,
            created_at: DateTime.now().toSQL(),
            updated_at: DateTime.now().toSQL(),
          },
          {
            product_id: 2,
            taxonomy_id: 1,
            created_at: DateTime.now().toSQL(),
            updated_at: DateTime.now().toSQL(),
          },
          {
            product_id: 3,
            taxonomy_id: 2,
            created_at: DateTime.now().toSQL(),
            updated_at: DateTime.now().toSQL(),
          },
          {
            product_id: 4,
            taxonomy_id: 2,
            created_at: DateTime.now().toSQL(),
            updated_at: DateTime.now().toSQL(),
          },
        ])
    } catch (err) {
      console.log(err)
    }
  }
}
