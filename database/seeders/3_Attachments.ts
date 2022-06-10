import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Attachment from 'App/Models/Attachment'

export default class AttachmentSeeder extends BaseSeeder {
  public async run() {
    await Attachment.createMany([
      {
        title: 'Calças Masculina Sarja Jeans Slim Fit Lycra Elastano Preta',
        author: 1,
        source: 'https://http2.mlstatic.com/D_NQ_NP_808305-MLB49695376776_042022-O.webp',
      },
      {
        title: 'Calças Masculina Sarja Jeans Slim Fit Lycra Elastano Azul',
        source: 'https://http2.mlstatic.com/D_NQ_NP_679359-MLB49547219804_042022-O.webp',
        author: 1,
      },
      {
        title: 'Bota Tática Coturno Couro Preto Masculino Samu Cano Alto',
        source: 'https://http2.mlstatic.com/D_NQ_NP_747243-MLB45732918253_042021-O.webp',
        author: 2,
      },
      {
        title: 'Chinelo Havaianas Azul Top Original Confortável Bonito Promoção',
        source: 'https://http2.mlstatic.com/D_NQ_NP_928973-MLB49463074034_032022-O.webp',
        author: 2,
      },
    ])
  }
}
