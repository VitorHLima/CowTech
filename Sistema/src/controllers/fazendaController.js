var fazendaModel = require("../models/fazendaModel");

function publicar(req, res) {
    var nome = req.body.nomeServer;
    var idEndereco = req.body.enderecoServer;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (idEndereco == undefined) {
        res.status(400).send("O endereço está indefinido!");
    } else {
        fazendaModel.publicar(nome, idEndereco)
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
function BuscarCurral(req, res) {
    fazendaModel.BuscarCurral().then((resultado) => {
        res.status(200).json(resultado);
    });
}

module.exports = {
    publicar,
    BuscarCurral
}
