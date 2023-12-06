var curralModel = require("../models/curralModel");


function buscarPorNomeCurral(req, res) {
    var nome = req.query.nome;

    curralModel.buscarPorNomeCurral(nome).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res) {
    curralModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var curral = req.body.curralServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (curral == undefined) {
        res.status(400).send("Seu curral está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo curralModel.js
        curralModel.cadastrar(nome, curral)
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
    listar,
    buscarPorNomeCurral,
    cadastrar
}