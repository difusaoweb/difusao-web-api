import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Service from 'App/Models/Service'

export default class ServiceSeeder extends BaseSeeder {
  public async run () {
    await Service.createMany([
      {
        title: 'Desenvolvimento de Aplicativo Android',
        description: `Aplicativos institucionais.\n
        Aplicativos de gerencia de negócios.\n
        Aplicativos de vendas de produtos ou serviços.`
      },
      {
        title: 'Desenvolvimento de Lojas Virtuais Woocommerce',
        description: `Lojas simples.
        Plataforma Woocommerce + Wordpress.
        Diversos métodos de pagamentos.`
      },
      {
        title: 'Desenvolvimento de Sistemas Web',
        description: `Redução de trabalho manual.\n
        Aumento de produtividade.\n
        Escalabilidade dos negócios.`
      },
      {
        title: 'Desenvolvimento de Blogs',
        description: `Melhore a brand de sua marca.
        Gere autoridade com posts.
        Esteja bem rankeado nos motores de busca.`
      },
      {
        title: 'Desenvolvimento de Landing Pages',
        description: `Anuncie seus serviços ou produtos
        Venda mais.
        Apresentação rápida.`
      }
    ])
  }
}
