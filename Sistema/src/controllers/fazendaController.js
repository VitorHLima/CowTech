var fazendaModel = require("../models/fazendaModel");

function publicar(req, res) {
    var nome = req.body.nome;
    var endereco = req.body.endereco;
    var idUsuario = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (endereco == undefined) {
        res.status(400).send("O endereço está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("O endereço está indefinido!");
    } else {
        fazendaModel.publicar(nome, endereco, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    publicar
}
