import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'UsersController.index')
  }).prefix('/users')
}).prefix('/v1')
