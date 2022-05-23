import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'ProductsController.index')
    Route.get('/create', 'ProductsController.create')
  }).prefix('/products')
}).prefix('/v1')
