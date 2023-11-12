var enderecoModel = require("../models/enderecoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var logradouro = req.body.logradouroServer;
    var municipio = req.body.municipioServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var estado = req.body.estadoServer;
    var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (municipio == undefined) {
        res.status(400).send("Seu municipio está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo enderecoModel.js
        enderecoModel.cadastrar(nomeFazenda, logradouro, bairro, municipio, estado, cep, numero, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}