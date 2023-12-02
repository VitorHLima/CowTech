var enderecoModel = require("../models/enderecoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var logradouro = req.body.logradouroServer;
    var municipio = req.body.municipioServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;
    var numero = req.body.numeroServer;
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
    } else if (numero == undefined) {
        res.status(400).send("Seu número está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Sua empresa está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo enderecoModel.js
        enderecoModel.cadastrar(nome, logradouro, bairro, municipio, estado, cep, numero, empresaId)
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

function buscarPorNomeFazenda(req, res) {
    var nomeFazenda = req.query.nomeFazenda;

    enderecoModel.buscarPorNomeFazenda(nomeFazenda).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        enderecoModel.listar(idUsuario).then((resultado) => {
            res.status(200).json(resultado);
        });
    }
}

module.exports = {
    cadastrar,
    listar,
    buscarPorNomeFazenda
}