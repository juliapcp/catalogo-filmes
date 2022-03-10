const express = require('express');
const { ROTA_FILMES } = require('./routes/constants.js');
const app = express();

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    return res.redirect("/filmes");
});
//MIDDLEWARE É UMA FUNÇÃO EXECUTADA ENTRE O REQUEST E O ENPOINT FINAL E PERMITE QUE SEJA FEITA QUALQUER COISA ANTES DE DEIXAR PASSAR
app.use('*', (req, res, next)=> {
    console.log(`Request recebido para ${req.baseUrl} as ${new Date()}`);
    next();
})

const filmesRoutes = require('./routes/filmes.routes.js');
app.use(ROTA_FILMES, filmesRoutes);

app.use('*', (req, res) => {
    return res.status(404).redirect('/naoEncontrado.html');
})
    
app.listen(3000, ()=> console.log("Server iniciado na porta 3000"));