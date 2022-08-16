import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/list', 'CasesController.list')
    Route.group(() => {
      Route.get('/create', 'CasesController.create')
      Route.get('/update', 'CasesController.update')
      Route.get('/delete', 'CasesController.delete')
    }).middleware('auth')
  }).prefix('/cases')
}).prefix('/v1')
