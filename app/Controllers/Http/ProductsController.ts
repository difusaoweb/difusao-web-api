import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

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
      const category = Number(qs.category) ?? null

      const theProduct = { image, name, sku, stock, price, category }
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
}
