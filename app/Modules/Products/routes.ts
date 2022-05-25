import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'ProductsController.index')
    Route.get('/list', 'ProductsController.list')
    Route.get('/create', 'ProductsController.create')
    Route.get('/delete', 'ProductsController.delete')
  }).prefix('/products')
}).prefix('/v1')
