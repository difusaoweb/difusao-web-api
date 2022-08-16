import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Drive from '@ioc:Adonis/Core/Drive'
import { string } from '@ioc:Adonis/Core/Helpers'

import Product from 'App/Models/Product'
import Taxonomy from 'App/Models/Taxonomy'

export default class ProductsController {
  public async index ({ request, response }: HttpContextContract) {
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

  public async list ({ request, response }: HttpContextContract) {
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

  public async create ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!(!!qs.name && !!qs.price && !!qs.stock)) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      // const name = String(qs.name)
      // const price = Number(qs.price)
      // const stock = Boolean(qs.stock == 1 ? true : false)

      // const description: string | null = qs.description ? String(qs.description) : null
      // const sku = qs.sku ? Number(qs.sku) : null
      // const categoryId: number | null = qs.category_id ? Number(qs.category_id) : null

      // const theProduct = { name, sku, price, stock, description }
      // const product = await Product.create(theProduct)

      // if (categoryId) {
      //   const taxonomy = await Taxonomy.find(categoryId)
      //   if (!taxonomy) {
      //     response.send({ failure: { message: 'lack of data' } })
      //     response.status(500)
      //     return response
      //   }

      //   await product.related('taxonomies').attach([taxonomy.id])
      // }

      const productImage = request.file('image', {
        size: '2mb',
        extnames: ['png', 'jpg', 'jpeg']
      })
      if (productImage) {
        const imageNewName = `${string.generateRandom(16)}-${productImage.clientName}`
        await productImage.moveToDisk('./', {
          name: imageNewName
        })
        const url = await Drive.getUrl(imageNewName)
        console.log(url)
      }

      // response.send({ success: { product_id: product.id } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)

      response.send({ failure: true })
      response.status(500)
      return response
    }
  }

  public async delete ({ request, response }: HttpContextContract) {
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
