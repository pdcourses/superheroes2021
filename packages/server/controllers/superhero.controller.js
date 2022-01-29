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

//http://127.0.0.1:5000/api/superheroes?page=1&items=5

/*
client

const apiInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api'
});
const getSuperheroes = (params) => apiInstance.get(`/superheroes?page=${params.page}&results=${params.results}`); 
---------------
const {data { data: superheroes }} = API.getSuperheroes(params);


*/

export async function getMany(req, res, next) {
  const {
    pagination: { page, results },
  } = req;
  try {
    const foundHeroes = await Superhero.findAll({
      limit: results,
      offset: (page - 1) * results,
    });
    res.status(200).send({ data: foundHeroes });
  } catch (err) {
    next(err);
  }
}

export async function getById(req, res, next) {}
export async function updateInfoById(req, res, next) {}
export async function updateImageById(req, res, next) {}
export async function deleteById(req, res, next) {}
