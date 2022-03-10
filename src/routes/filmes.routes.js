const { Router } = require('express');
const { FilmesController } = require('../controllers/filmes.controller');

const routes = Router();

const filmesController= new FilmesController();

routes.get('/', filmesController.listar);

routes.get('/:id', filmesController.detalhar);

routes.post('/', filmesController.cadastrar)

module.exports = routes;