import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/login', 'AccessController.login')
    Route.get('/check-authentication', 'AccessController.checkAuthentication')
    Route.group(() => {
      Route.get('/logout', 'AccessController.logout')
    }).middleware('auth')
  }).prefix('/access')
}).prefix('/v1')
