import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Calça Preta Masculina',
        stock: true,
        price: 60,
        sku: 23,
        description: 'Calça Preta Masculina Jeans. Muito bom.',
      },
      {
        name: 'Calça Azul Masculina',
        stock: true,
        price: 70,
      },
      {
        name: 'Bota Masculina Coturno Cano Médio Militar Couro Policial Dhl',
        stock: false,
        price: 249.9,
        sku: 738240040,
      },
      {
        name: 'Chinelo Havaianas',
        stock: false,
        price: 39.99,
        sku: 4000032,
        description: 'Chinelo Havaianas. Muito bom.',
      },
    ])
  }
}
