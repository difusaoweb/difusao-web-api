import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/list', 'UsersController.list')
    Route.get('/show', 'UsersController.show')
    Route.group(() => {
      Route.get('/create', 'UsersController.create')
      Route.get('/update', 'UsersController.update')
      Route.get('/delete', 'UsersController.delete')
    }).middleware('auth')
  }).prefix('/users')
}).prefix('/v1')
