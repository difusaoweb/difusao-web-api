import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { schema } from '@ioc:Adonis/Core/Validator'

import User from 'App/Models/User'
import UtilsService from 'App/Services/UtilsService'

export default class UsersController {
  public async list ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      page: schema.number(),
      perPage: schema.number()
    })

    try {
      const { page, perPage } = await request.validate({ schema: controllerSchema })

      const thePage = perPage === -1 ? 1 : page
      const thePerPage = perPage === -1 ? 999999999999 : perPage

      const responseDb = await Database.from('users')
        .select('id', 'email', 'name', 'created_at')
        .orderBy('created_at', 'desc')
        .paginate(thePage, thePerPage)

      if (responseDb.all().length === 0) {
        response.send({ failure: { message: 'Users not found.' } })
        response.status(404)
        return response
      }

      const users = responseDb.all().map(user => {
        return UtilsService.camelCaseKeys(user)
      })

      response.send({
        success: {
          users,
          last_page: responseDb.lastPage,
          total: responseDb.total
        }
      })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error getting user list.' } })
      response.status(err?.status ?? 500)
      return response
    }
  }

  public async delete ({ request, response }: HttpContextContract) {
    const controllerSchema = schema.create({
      usersId: schema.array().members(schema.number())
    })
    try {
      const { usersId } = await request.validate({ schema: controllerSchema })

      const users = await User.findMany(usersId)
      if (users.length !== usersId.length) {
        response.send({ failure: { message: 'Users not found.' } })
        response.status(404)
        return response
      }

      await Database.from('users').whereIn('id', usersId).delete()

      response.send({ success: { deleted: true } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: err?.code ?? 'Error deleting the user(s).' } })
      response.status(err?.status ?? 500)
      return response
    }
  }
}
