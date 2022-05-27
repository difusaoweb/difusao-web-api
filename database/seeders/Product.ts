import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        image:
          'https://http2.mlstatic.com/calca-jeans-preta-masculina-sarja-skinny-stretch-D_NQ_NP_227011-MLB20457227467_102015-F.jpg',
        name: 'Calça Preta Masculina',
        sku: 23,
        stock: true,
        price: 60,
      },
      {
        image:
          'https://http2.mlstatic.com/calca-jeans-azul-escuro-lavada-masculina-skinny-oferta-D_NQ_NP_818179-MLB25795411042_072017-F.jpg',
        name: 'Calça Azul Masculina',
        sku: 14,
        stock: true,
        price: 70,
      },
      {
        image:
          'https://http2.mlstatic.com/bota-masculina-coturno-cano-medio-militar-couro-policial-dhl-D_NQ_NP_15774-MLB20108892485_062014-F.jpg',
        name: 'Bota Masculina Coturno Cano Médio Militar Couro Policial Dhl',
        sku: 738240040,
        stock: false,
        price: 249.9,
      },
      {
        image:
          'https://cdnv2.moovin.com.br/belinhacalcados/imagens/produtos/det/chinelo-havaianas-4000032-brasil-naval-211dfc5dbb9e65ee5ac0189d03a2e7fd.jpg',
        name: 'Chinelo Havaianas',
        sku: 4000032,
        stock: false,
        price: 39.99,
      },
    ])
  }
}
