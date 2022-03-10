const { nanoid } = require("nanoid");

const filmes = [];

class FilmesController {
    async listar(req, res){

        let table = '<table><thead><th>Nome</th><th>Gênero</th><th>Sinopse</th><th>Data de Lançamento</th></thead><tbody>'
        for (let filme of filmes){
            table += `<tr><td><a href="/filmes/${filme.id}">${filme.nome}</a></td><td>${filme.genero}</td><td>${filme.sinopse}</td><td>${filme.dataLancamento}</td></tr>`
        }

        table += '</tbody></table>'
        return res.send(
            table
        );

    }
    async detalhar(req, res){
        let {
            id
        } = req.params;

        let filme = filmes.filter(f => f.id === id);

        if (filme.length > 0){
            filme = filme[0]
            return res.send(
                `Nome: ${filme.nome}
                <br>
                Gênero: ${filme.genero}
                <br>
                Gênero: ${filme.sinopse}
                <br>
                Data de Lançamento: ${filme.dataLancamento}
                `);
            } else {
                res.send("Not found")
            }

    }
    async cadastrar(req, res) {
        filmes.push({
            id: nanoid(),
            ...req.body
        });
        return res.redirect("/filmes");
    }
}

module.exports = {FilmesController};