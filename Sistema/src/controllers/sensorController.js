var sensorModel = require("../models/sensorModel");

function publicar(req, res) {
    var nome = req.body.nomeServer;
    var curral = req.body.curralServer;

    if (nome == undefined) {
        res.status(400).send("O nome está indefinido!");
    } else if (curral == undefined) {
        res.status(400).send("A FK está indefinido!");
    } else {
        sensorModel.publicar(nome, curral)
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

function listarSensores(req, res) {
    var fazenda = req.body.fazendaServer;
    var curral = req.body.curralServer;

    sensorModel.listarSensores(fazenda, curral).then((resultado) => {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os sensores: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    var idEmpresa = req.params.idEmpresa;

    sensorModel.listar(idEmpresa).then(function (resultado) {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function todosSensores(req, res) {
    var idEmpresa = req.params.idEmpresa;

    sensorModel.todos(idEmpresa).then((resultado) => {
        if (resultado.length >= 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os sensores: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    publicar,
    listar,
    listarSensores,
    todosSensores
}
