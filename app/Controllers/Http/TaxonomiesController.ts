import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Taxonomy from 'App/Models/Taxonomy'

export default class TaxonomiesController {
  public async index () {
    const all = await Taxonomy.all()

    return all
  }

  public async list ({ request, response }: HttpContextContract) {
    try {
      const all = await Database.from('taxonomies').select('id', 'name')

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

  public async create ({ request, response }: HttpContextContract) {
    try {
      const qs = request.qs()
      if (!qs.name) {
        response.send({ failure: { message: 'lack of data' } })
        response.status(500)
        return response
      }

      const name = String(qs.name)

      const theTaxonomy = { name }
      const taxonomy = await Taxonomy.create(theTaxonomy)

      response.send({ success: { taxonomy_id: taxonomy.id } })
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
