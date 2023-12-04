var database = require("../database/config")

function listar() {
    var query = `SELECT * FROM Curral JOIN endFazenda ON idEndereco`;

    return database.executar(query);
}
function publicar(nome, endereco) {

    var instrucaoSql = `insert into curral(nomeCurral, fkEndFazenda) values ('${nome}',${endereco})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarPorNomeCurral(nome) {
    var query = `select * from curral where nomeCurral = '${nome}'`;

    return database.executar(query);
}

module.exports = {
    listar,
    buscarPorNomeCurral,
    publicar
};    