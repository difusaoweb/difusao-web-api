import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/list', 'ServicesController.list')
    Route.get('/show', 'ServicesController.show')
    Route.group(() => {
      Route.get('/delete', 'ServicesController.delete')
      Route.get('/create', 'ServicesController.create')
      Route.get('/update', 'ServicesController.update')
    }).middleware('auth')
  }).prefix('/services')
}).prefix('/v1')
