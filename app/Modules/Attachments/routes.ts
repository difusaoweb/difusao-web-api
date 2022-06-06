import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  Route.group(() => {
    Route.get('/', 'AttachmentsController.index')
    Route.get('/show', 'AttachmentsController.show')
    Route.get('/create', 'AttachmentsController.create')
    Route.get('/update', 'AttachmentsController.update')
    Route.get('/delete', 'AttachmentsController.delete')
  }).prefix('/attachments')
}).prefix('/v1')
