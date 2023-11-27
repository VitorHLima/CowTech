var database = require("../database/config")

function listar() {
    var query = `select * from curral`;

    return database.executar(query);
}

function buscarPorNomeCurral(nome) {
    var query = `select * from curral where nomeCurral = '${nome}'`;

    return database.executar(query);
}

module.exports = {
    listar,
    buscarPorNomeCurral
};    