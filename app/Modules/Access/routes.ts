import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/login', 'AccessController.login')
    Route.get('/logout', 'AccessController.logout')
  }).prefix('/access')
}).prefix('/v1')
