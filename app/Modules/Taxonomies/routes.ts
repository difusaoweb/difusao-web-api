import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.get('/list', 'TaxonomiesController.list')
      Route.get('/create', 'TaxonomiesController.create')
    }).middleware('auth')
  }).prefix('/taxonomies')
}).prefix('/v1')
