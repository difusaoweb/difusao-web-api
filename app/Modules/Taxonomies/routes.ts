import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'TaxonomiesController.index')
    Route.get('/create', 'TaxonomiesController.create')
  }).prefix('/taxonomies')
}).prefix('/v1')
