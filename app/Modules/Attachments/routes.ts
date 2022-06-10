import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.get('/list', 'AttachmentsController.list')
      Route.get('/show', 'AttachmentsController.show')
      Route.get('/create', 'AttachmentsController.create')
      Route.get('/update', 'AttachmentsController.update')
      Route.get('/delete', 'AttachmentsController.delete')
    }).middleware('auth')
  }).prefix('/attachments')
}).prefix('/v1')
