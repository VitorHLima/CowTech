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
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var endereco = req.body.enderecoServer;
    var empresaId = req.params.idEmpresa;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (empresaId == undefined) {
        res.status(400).send("Seu empresaid está undefined!");
    } else if (endereco == undefined) {
        res.status(400).send("Seu endereco está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo enderecoModel.js
        curralModel.publicar(nome, endereco)
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