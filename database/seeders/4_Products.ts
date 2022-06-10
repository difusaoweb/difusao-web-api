import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Calças Masculina Sarja Jeans Slim Fit Lycra Elastano Preta',
        stock: true,
        price: 56.9,
        sku: 'CALCA-JEANS-PRETA',
        description: `*PRODUTO DE FÁBRICA - HEYJU*

        - Para você que quer renovar seu guarda-roupa com o menor custo benefício do mercado, está na loja certa. Nossos produtos são de ótima qualidade e vestem super bem.

        - Vendemos barato para garantir que todos tenham direito de se vestir bem gastando pouco!!!

        - CALÇAS JOGGER MASCULINAS JEANS E SARJA COM LYCRA DE EXCELENTE QUALIDADE.

        ****CONFIRAM A TABELA DE TAMANHOS ANTES DE CONFIRMAR SUA COMPRA****

        P: 36 ao 40
        M: 42 ao 44
        G: 46 ao 48
        GG: 50 ao 52

        - SELECIONE A COR DESEJADA NO ATO DA COMPRA.

        Em caso de dúvidas, ficamos à disposição!

        OBRIGADO E BOAS COMPRAS!!!`,
        author: 1,
        attachment: 1,
      },
      {
        name: 'Calças Masculina Sarja Jeans Slim Fit Lycra Elastano Azul',
        stock: true,
        price: 56.9,
        sku: 'CALCA-JEANS-AZUL',
        description: `*PRODUTO DE FÁBRICA - HEYJU*

        - Para você que quer renovar seu guarda-roupa com o menor custo benefício do mercado, está na loja certa. Nossos produtos são de ótima qualidade e vestem super bem.

        - Vendemos barato para garantir que todos tenham direito de se vestir bem gastando pouco!!!

        - CALÇAS JOGGER MASCULINAS JEANS E SARJA COM LYCRA DE EXCELENTE QUALIDADE.

        ****CONFIRAM A TABELA DE TAMANHOS ANTES DE CONFIRMAR SUA COMPRA****

        P: 36 ao 40
        M: 42 ao 44
        G: 46 ao 48
        GG: 50 ao 52

        - SELECIONE A COR DESEJADA NO ATO DA COMPRA.

        Em caso de dúvidas, ficamos à disposição!

        OBRIGADO E BOAS COMPRAS!!!`,
        author: 1,
        attachment: 2,
      },
      {
        name: 'Bota Tática Coturno Couro Preto Masculino Samu Cano Alto',
        stock: true,
        price: 157.91,
        sku: 'BOTA-MILITAR-CANO-MEDIO-COURO',
        description: `___________OLÁ, BEM VINDO A JUST SALE!____________
        É UMA HONRA PODER LHE OFERECER O QUE HÁ DE MELHOR NO MERCADO.
        Somos uma loja situada na cidade de Franca, capital do calçado! Temos uma equipe de prontidão para lhe atender no pré e pós vendas. Você que procura qualidade e conforto sem perder o estilo, esse é o modelo ideal para você.
        Ref: 910
        Material Externo: Couro Floater
        Material Interno: Nylon
        Fechamento: Cadarço
        Palmilha: Em Gel 25mm
        Estilo: Adventure
        Solado: Borracha
        Sola Costurada: Sim
        Altura do Salto: 2,5 cm
        Passador: Ilhós
        Gênero: Unissex
        Cano: Médio

        -------------------------------------------------------------------------------------

        TABELA DE MEDIDAS:

        Número 35 - 24,0 cm
        Número 36 - 24,5 cm
        Número 37 - 25,0 cm
        Número 38 - 26,0 cm
        Número 39 - 26,5 cm
        Número 40 - 27,0 cm
        Número 41 - 27,5 cm
        Número 42 - 28,0 cm
        Número 43 - 29,0 cm
        Número 44 - 29,5 cm
        Número 45 - 30,0 cm
        - Após a compra:
        Enviamos sua compra dentro de no máximo 48 horas, postagem somente em dias úteis.

        ATENÇÃO!! Não há como alterar o pedido após o pagamento!

        - TROCAS E DEVOLUÇÕES
        TROCAS em relação ao tamanho e modelo desde que o cliente se disponibilize a pagar todos os custos do frete. Realizamos trocas sem burocracia e todas as despesas com o frete são por conta do comprador.
        Favor nos comunicar com antecedência! **
        DEVOLUÇÃO somente por defeito de fabricação.

        - DÚVIDAS?
        Fique à vontade para tirar sua dúvida no campo de perguntas, nós respondemos rapidamente pois temos uma equipe de prontidão para sanar suas dúvidas.
        ***PERGUNTAS FREQUENTES***

        *Tem a pronta entrega?
        Sim. Possuímos o produto em estoque para envio imediato.

        *É em Couro Legítimo?
        Sim. Produzido todo em Couro Legítimo!
        *É igual ao da foto?
        Sim, são fotos reais do produto!

        Agradecemos sua visita ao nosso produto e aguardamos sua compra!

        Att. Equipe Just Sale`,
        author: 2,
        attachment: 3,
      },
      {
        name: 'Chinelo Havaianas Azul Top Original Confortável Bonito Promoção',
        stock: false,
        price: 25.51,
        sku: 'CHINELO-HAVAINAS-AZUL',
        description: `Chinelos Havaianas Top Original com Garantia e Nota Fiscal

        - Produto Novo
        - 100% Original
        - Com Garantia e Nota Fiscal
        - Qualidade: Nós inspecionamos 100% Dos Produtos Antes Do Envio
        - Pronta entrega: Envio no mesmo dia ou no máximo 1 dia útil

        ------------------------------------
        Descrição do Fabricante
        ------------------------------------
        Para todos os gostos
        Tem para todos os gostos: do básico ao fashion, do neutro ao vibrante. Você escolhe!

        100% borracha
        E claro, o solado é feito em borracha 100% Havaianas.

        Lista de Cuidados
        Lave à mão com sabão neutro e uma escova macia ou na máquina de lavar. Deixe secar em um local bem ventilado e... Prontinho! Suas Havaianas ficam novinhas em folha!

        A Havaianas Top tem o DNA Havaianas: é democrática, versátil, clássica, confortável e colorida.

        Feito no Brasil

        ----------------------------
        Guia de Tamanhos
        ----------------------------
        Tamanho.....................Comprimento do Pé
        33 / 34 ....................... 21,1 até 22,3 cm
        35 / 36 ....................... 22,4 até 23,6 cm
        36 / 37 ....................... 23,7 até 25,0 cm
        39 / 40 ....................... 25,1 até 26,3 cm
        41 / 42 ....................... 26,4 até 27,6 cm
        43 / 44 ....................... 27,7 até 29,0 cm
        45 / 46 ....................... 29,1 até 30,3 cm
        47 / 48 ....................... 30,1 até 31,6 cm

        ---------------------
        Prazo Entrega
        ---------------------
        O prazo de entrega é estimado e informado no ato da compra, podendo ocorrer antes ou depois da data prevista.

        -----------------------
        Compra Segura
        -----------------------
        O pagamento é gerenciado pelo Mercado Pago que protege seus dados, além de garantir o valor do produto caso a entrega não seja realizada.

        ------------------------
        Envio do Produto
        ------------------------
        - Produtos no Full: Envio todos os dias 24h / dia, inclusive aos finais de semana e feriados.
        - Envio Normal: Pedidos com pagamentos confirmados até as 14:00 de segunda a sexta-feira (exceto feriados), serão postados no mesmo dia, os pedidos confirmados aos finais de semana e feriados ou após as 14:00 de segunda a sexta-feira, serão postados até o próximo dia útil mediante confirmação.

        -----------------------------------
        FAQ - Dúvidas frequentes
        -----------------------------------
        - Quais cores e tamanhos estão disponíveis?
        As cores e tamanhos disponíveis são mostrados no anúncio, se um número/cor não estiver disponível, será marcado com uma linha pontilhada para indicar que não está disponível.

        - Como é a forma do calçado? É grande ou pequena?
        A forma é grande ou pequena, de acordo com a tabela de medidas acima. O ideal é comparar com sapatos confortáveis que você já possui ou medir a sola do pé com uma régua para obter uma medida mais precisa.

        - O produto é original?
        Nossos produtos são novos, originais e enviados na caixa/embalagem original do fabricante, além disso todos possuem garantia de 30 dias contra defeitos de fabricação. Após esse período, em até 90 dias, é necessário entrar em contato diretamente com o fabricante através do número fornecido na parte inferior de cada caixa do produto.

        - Tem estoque? Vocês têm o produto para envio imediato?
        Sim, temos estoque à pronta entrega de todos os nossos produtos anunciados e todos os nossos produtos estão disponíveis para envio imediato. Nossos produtos são enviados no mesmo dia ou no dia útil seguinte, a partir da data de aprovação da compra, exceto em circunstâncias excepcionais. A entrega geralmente segue a previsão no momento da compra e muitas vezes chega antes mesmo do orçamento.

        - É original?
        Sim, nós trabalhamos somente com produtos Originais, com procedência comprovada, com Garantia e Nota Fiscal, além disso, o comércio de réplicas ou falsificações é crime! Não colabore com esta prática criminosa.

        - Quero comprar mais de um par, como faço?
        Para comprar vários pares em cores e tamanhos diferentes, basta selecionar a cor e o número e adicionar um par de cada vez ao seu carrinho.

        - Quanto tempo demora para minha compra ser aprovada?
        Pagamento realizado com cartão de crédito geralmente é aprovado na hora, já com boleto bancário pode demorar até 72 horas úteis.

        - Após efetuar a compra, posso alterar meu endereço de entrega?
        Não é possível alterar o endereço de entrega após finalizar a compra. Atente-se para mantê-lo atualizado. Lembre-se também de colocar o nome de quem recebe por completo, evitando apelidos que podem dificultar a identificação pelo entregador.

        - Qual o valor do Frete? O frete é calculado automaticamente pelo Mercado Livre ao inserir o CEP, antes de finalizar a compra. Nas compras acima de 79 Reais o Mercado Livre te dará o benefício do Frete Grátis ou desconto no valor do frete.

        - Se não servir ou se eu não gostar?
        Você pode devolver gratuitamente direto na sua compra. Todo cliente tem direito à devolução em até 7 dias após o recebimento do produto. Os produtos devem ser devolvidos nas caixas originais e não devem apresentar indícios de uso.

        - Ainda tem alguma dúvida?
        Fique à vontade para fazer uma pergunta. Nossa loja online atende todos os dias da semana, inclusive aos finais de semana e feriados.

        -----------------------------------------------
        Instruções para uma boa compra
        -----------------------------------------------
        1- Desconfie de preços muito baixos, nossos produtos são de boa procedência, não compre imitações ou produtos falsificados.

        2- Antes de finalizar a compra, certifique-se de que seus dados estejam atualizados: CEP, Endereço e Número de telefone.

        3- Verifique se a numeração desejada está de acordo com o nosso Guia de Tamanhos na descrição do Anúncio ou no Link Guia de Tamanhos.

        4- Após a compra, caso tenha alguma ou caso queira alterar o seu pedido, favor entrar em contato conosco através do Chat na compra, estamos prontos para te atender!
        --------------------------------------------------------------------------------------------------------
        Tags: chinela, chinelo, chinelo feminino, chinelos masculino, chinelo para mulher, feminino, feminina, masculino, havaianas top, sandália havaianas, original, as legítimas, confortável, chinelo borracha, chinelo original, havaiana original, havaianas tradicional, havaiana colorida, havaianas cores.

        ---------------------------------------------------------------------------
        Shop Jvmi - Sua satisfação é o nosso compromisso!
        ---------------------------------------------------------------------------
        - Ficou alguma dúvida? Use o campo de perguntas abaixo, temos uma equipe pronta pra te atender!

        - Conheça nossas novidades, acessando o link abaixo ou clicando em “ver mais anúncios do vendedor”, temos ótimos produtos em promoção:
        https://lista.mercadolivre.com.br/_CustId_666203841

        ---------------------------------------------------------------------------------
        Agradecemos a sua visita e aguardamos a sua compra.
        ---------------------------------------------------------------------------------`,
        author: 2,
        attachment: 4,
      },
    ])
  }
}
