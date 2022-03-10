const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    return res.send("Essa deveria ser a listagem de filmes");
});

routes.get('/:id', (req, res) => {
    return res.send("Essa deveria detalhar um filme");
});

module.exports = routes;