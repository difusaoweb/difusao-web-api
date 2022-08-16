import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.get('/list', 'UsersController.list')
      Route.get('/create', 'UsersController.create')
      Route.post('/update', 'UsersController.update')
      Route.get('/delete', 'UsersController.delete')
    }).middleware('auth')
  }).prefix('/users')
}).prefix('/v1')
