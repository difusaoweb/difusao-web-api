import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Hash from '@ioc:Adonis/Core/Hash'

import User from 'App/Models/User'

export default class AccessesController {
  public async login({ auth, request, response }: HttpContextContract) {
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

      const { token } = await auth.use('api').generate(user, {
        name: 'login',
        expiresIn: '7days',
      })

      const returnResponse = {
        token: token,
        user: {
          id: user.id,
          display_name: user.displayName,
        },
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

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.use('api').revoke()

      response.send({ success: true })
      response.status(200)
      return response
    } catch (err) {
      console.log(err)
      response.send({ failure: { message: 'error logging out.' } })
      response.status(500)
      return response
    }
  }
}
