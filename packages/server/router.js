import Router from 'express';
import superheroRouter from './routers/superheroRouter';

const router = Router();

router.use('/superheroes', superheroRouter);
