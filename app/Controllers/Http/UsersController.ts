import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import User from 'App/Models/User'

export default class UsersController {
  public async list ({ request, response }: HttpContextContract) {
    try {
      const users = await Database.from('products').select(
        'id',
        'image',
        'name',
        'sku',
        'stock',
        'created_at',
        'price'
      )

      response.send({ success: users })
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
