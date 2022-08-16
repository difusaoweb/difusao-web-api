import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'
import Database from '@ioc:Adonis/Lucid/Database'

import User from 'App/Models/User'

export default class AccessesController {
  public async checkAuthentication ({ auth, response }: HttpContextContract) {
    try {
      if (!await auth.use('api').authenticate()) {
        response.send({ failure: { message: 'User not authenticated.' } })
        response.status(500)
        return response
      }

      response.send({ success: { authenticated: true } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'Error when checking user authentication.' } })
      response.status(500)
      return response
    }
  }

  public async login ({ auth, request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs?.email || !qs?.password) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      const email = String(qs.email)
      const password = String(qs.password)

      const user = await User.findBy('email', email)
      if (!user) {
        response.send({ failure: { message: 'user not found' } })
        response.status(404)
        return response
      }

      if (!(await Hash.verify(user.password, password))) {
        response.send({ failure: { message: 'incorrect password' } })
        response.status(403)
        return response
      }

      await Database.query()
        .from('api_tokens')
        .where('user_id', user.id)
        .andWhere('name', 'login')
        .andWhere('type', 'api')
        .delete()

      const { token } = await auth.use('api').generate(user, {
        name: 'login',
        expiresIn: '7days'
      })

      const returnResponse = {
        token,
        user: {
          id: user.id,
          name: user.name
        }
      }

      response.send({ success: returnResponse })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'error when sign in' } })
      response.status(500)
      return response
    }
  }

  public async logout ({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      response.send({ success: { loggedOff: true } })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'Error logging out.' } })
      response.status(500)
      return response
    }
  }
}
