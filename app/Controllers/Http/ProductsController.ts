import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const all = await Product.all()

      response.send({ success: all })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async list({ request, response }: HttpContextContract) {
    try {
      const products = await Database.from('products').select(
        'id',
        'image',
        'name',
        'sku',
        'stock',
        'created_at',
        'price',
        Database.from('taxonomies')
          .select('name')
          .where(
            'id',
            Database.from('taxonomy_product')
              .select('taxonomy_id')
              .whereColumn('products.id', 'taxonomy_product.product_id')
              .limit(1)
          )
          .as('category')
      )

      // const products = await Product.query().preload('taxonomies', (taxonomiesQuery) => {
      //   taxonomiesQuery.select('name').first()
      // })

      response.send({ success: products })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.name) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      const image = String(qs.image) ?? null
      const name = String(qs.name)
      const sku = Number(qs.sku) ?? null
      const stock = Boolean(qs.stock == 1 ? true : false)
      const price = Number(qs.price) ?? null
      // const category = Number(qs.category) ?? null

      const theProduct = { image, name, sku, stock, price }
      const product = await Product.create(theProduct)

      response.send({ success: { affirmation_id: product.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.product_ids) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      const productIds: number[] = qs.product_ids

      await Database.from('products').delete().whereIn('id', productIds)

      response.send({ success: true })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'lack of data' } })
      response.status(500)
      return response
    }
  }
}
