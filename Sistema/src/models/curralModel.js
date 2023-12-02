var database = require("../database/config")

function listar() {
    var query = `SELECT * FROM Curral JOIN endFazenda ON idEndereco`;

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