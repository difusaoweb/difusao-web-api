import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Case from 'App/Models/Case'

export default class CaseSeeder extends BaseSeeder {
  public async run() {
    await Case.createMany([
      {
        title: 'Manzzanti - PPC',
        description: 'Criação de widget para site Wordpress, com importação de dados do sistema.'
      },
      {
        title: 'Colecioname',
        description: 'Alterações de plugin WordPress para site de colecionador de cartas.'
      },
      {
        title: 'Skinna Grill',
        description: 'Alterações de plugin WordPress para Aplicação Web Skinna Grill.'
      },
      {
        title: 'Pró-Espuma',
        description: 'Alterações de plugin, exibindo mais dados.'
      },
      {
        title: 'Prefeitura Municipal de Banzae',
        description: 'Alterações de plugin, exibindo mais dados.'
      },
      {
        title: 'Link Oficial',
        description: 'Criação de Meio de Pagamento para Loja Virtual Woocommerce.'
      },
      {
        title: 'Link Oficial 2',
        description: 'Correção de bugs nos hiperlinks a versão Mobile e alteração no layout dos post no blog.'
      },
      {
        title: 'Visão Marketing',
        description: 'Criação de site para agência de marketing digital.'
      },
      {
        title: 'Cia do Ebook',
        description: 'Criação de plugin de anti fraude de ePUBS, com conexão Dropbox e WooCommerce.'
      },
      {
        title: 'Nacionalidade Portuguesa',
        description: 'Criação de sistema de cadastro de clientes com painel administrativo.'
      }
    ])
  }
}
