import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/list', 'ServicesController.list')
    Route.group(() => {
      Route.post('/create', 'ServicesController.create')
      Route.post('/update', 'ServicesController.update')
      Route.get('/delete', 'ServicesController.delete')
    }).middleware('auth')
  }).prefix('/services')
}).prefix('/v1')
