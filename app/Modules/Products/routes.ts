import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.get('/list', 'ProductsController.list')
      Route.post('/create', 'ProductsController.create')
      Route.get('/delete', 'ProductsController.delete')
    }).middleware('auth')
  }).prefix('/products')
}).prefix('/v1')
