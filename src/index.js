const express = require('express');
const { ROTA_FILMES } = require('./routes/constants.js');
const app = express();

app.get('/', (req, res) => {
    return res.redirect("/filmes");
});

const filmesRoutes = require('./routes/filmes.routes.js');
app.use(ROTA_FILMES, filmesRoutes);

app.use('*', (req, res) => {
    return res.status(404).send(`
        <h1>Sorry, not found.</h1> 
    `)
})
    
app.listen(3000, ()=> console.log("Server iniciado na porta 3000"));