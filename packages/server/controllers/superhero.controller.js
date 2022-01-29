import { Superhero } from './../db/models';

export async function create(req, res, next) {
  try {
    const newHero = await Superhero.create(req.body);
    if (newHero) {
      return res.status(201).send(newHero);
    } else {
      return res.status(404).send('Bad request');
    }
    next(new Error());
  } catch (e) {
    next(e);
  }
}

export async function getMany(req, res, next) {}
export async function getById(req, res, next) {}
export async function updateInfoById(req, res, next) {}
export async function updateImageById(req, res, next) {}
export async function deleteById(req, res, next) {}
