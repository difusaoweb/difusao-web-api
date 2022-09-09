import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Attachment from 'App/Models/Attachment'

export default class AttachmentSeeder extends BaseSeeder {
  public async run () {
    await Attachment.createMany([
      {
        title: 'Desenvolvimento de Aplicativo Android',
        source: 'https://http2.mlstatic.com/D_NQ_NP_808305-MLB49695376776_042022-O.webp'
      },
      {
        title: 'Desenvolvimento de Lojas Virtuais Woocommerce',
        source: 'https://http2.mlstatic.com/D_NQ_NP_679359-MLB49547219804_042022-O.webp'
      },
      {
        title: 'Desenvolvimento de Sistemas Web',
        source: 'https://http2.mlstatic.com/D_NQ_NP_747243-MLB45732918253_042021-O.webp'
      },
      {
        title: 'Desenvolvimento de Blogs',
        source: 'https://http2.mlstatic.com/D_NQ_NP_928973-MLB49463074034_032022-O.webp'
      },
      {
        title: 'Desenvolvimento de Landing Pages',
        source: 'https://99freelas.s3-sa-east-1.amazonaws.com/profile/210x210/wiatagan.png'
      },
      {
        title: 'Manzzanti - PPC',
        source: 'https://i.waifu.pics/CxL~Tbz.jpg'
      },
      {
        title: 'Manzzanti - PPC - 2',
        source: 'https://i.waifu.pics/2X92FPH.jpeg'
      },
      {
        title: 'Manzzanti - PPC - 3',
        source: 'https://i.waifu.pics/KBBuZ5R.jpg'
      },
      {
        title: 'Colecioname',
        source: 'https://i.waifu.pics/qjEV-At.jpg'
      },
      {
        title: 'Colecioname - 2',
        source: 'https://i.waifu.pics/KR6ij69.jpg'
      },
      {
        title: 'Skinna Grill',
        source: 'https://i.waifu.pics/~Ixa5M9.png'
      },
      {
        title: 'Skinna Grill - 2',
        source: 'https://i.waifu.pics/8flhYEv.jpg'
      },
      {
        title: 'Skinna Grill - 3',
        source: 'https://i.waifu.pics/4~M_ccd.jpg'
      },
      {
        title: 'Pró-Espuma',
        source: 'https://i.waifu.pics/gIoMEM0.jpeg'
      },
      {
        title: 'Prefeitura Municipal de Banzae',
        source: 'https://i.waifu.pics/4Ni15Gm.jpg'
      },
      {
        title: 'Prefeitura Municipal de Banzae - 2',
        source: 'https://i.waifu.pics/x7bS2nT.jpg'
      },
      {
        title: 'Link Oficial',
        source: 'https://i.waifu.pics/gIoMEM0.jpeg'
      },
      {
        title: 'Link Oficial - 2',
        source: 'https://i.waifu.pics/4P0CqRN.jpg'
      },
      {
        title: 'Link Oficial - 3',
        source: 'https://i.waifu.pics/wNzff3p.png'
      },
      {
        title: 'Link Oficial 2',
        source: 'https://i.waifu.pics/KjyZfjn.jpg'
      },
      {
        title: 'Link Oficial 2 - 1',
        source: 'https://i.waifu.pics/uc-SymC.jpg'
      },
      {
        title: 'Visão Marketing',
        source: 'https://i.waifu.pics/Ojsl~2a.jpg'
      },
      {
        title: 'Visão Marketing - 2',
        source: 'https://i.waifu.pics/~VVdn7B.png'
      },
      {
        title: 'Visão Marketing - 3',
        source: 'https://i.waifu.pics/B_Sy4E_.png'
      },
      {
        title: 'Cia do Ebook',
        source: 'https://i.waifu.pics/bzgUs3j.jpg'
      },
      {
        title: 'Cia do Ebook - 2',
        source: 'https://i.waifu.pics/pVI6kPT.jpg'
      },
      {
        title: 'Nacionalidade Portuguesa',
        source: 'https://i.waifu.pics/rUfJc7w.jpg'
      }
    ])
  }
}
