import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Taxonomy from 'App/Models/Taxonomy'

export default class TaxonomySeeder extends BaseSeeder {
  public async run() {
    await Taxonomy.createMany([
      {
        name: 'Calça',
      },
      {
        name: 'Calçados',
      },
      {
        name: 'Roupas',
      },
      {
        name: 'Preta',
      },
      {
        name: 'Azul',
      },
      {
        name: 'Masculino(a)',
      },
      {
        name: 'Feminino(a)',
      },
    ])
  }
}
