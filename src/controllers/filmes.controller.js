const filmes = [];

class FilmesController {
    async listar(req, res){
        //listagem de todos os filmes mostrando o nome, o nome é clicável e manda para o detalhar do filme

        let table = '<table><thead><th>Nome</th><th>Gênero</th><th>Sinopse</th><th>Data de Lançamento</th></thead><tbody>'
        for (let i=0; i<filmes.length; i++){
            let filme = filmes[i];
            table += `<tr><td><a href="/filmes/${i}">${filme.nome}</a></td><td>${filme.genero}</td><td>${filme.sinopse}</td><td>${filme.dataLancamento}</td></tr>`
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

        id = Number(id);
        if (isNaN(id)) {
            return res.send('Id do filme inválido');
        } else if (filmes[id] !== undefined) {
            let filme = filmes[id];
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
            return res.send('Id do filme inválido');
        }
    }
    async cadastrar(req, res) {
        const {
            nome,
            genero,
            sinopse,
            dataLancamento
        } = req.body;

        filmes.push({
            nome,
            genero,
            sinopse,
            dataLancamento
        });
        console.log(filmes)
        return res.redirect("/filmes");
    }
}

module.exports = {FilmesController};