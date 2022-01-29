import Router from 'express';
import superheroController from './../controllers/superhero.controller';
const superheroRouter = Router();

superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);

superheroRouter
  .route('/id')
  .get(superheroController.getById)
  .put(superheroController.updateInfoById)
  .patch(superheroController.updateImageById)
  .delete(superheroController.deleteById);
