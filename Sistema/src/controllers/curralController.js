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

module.exports = {
    listar,
    buscarPorNomeCurral
}