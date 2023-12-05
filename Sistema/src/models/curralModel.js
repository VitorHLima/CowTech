var database = require("../database/config")

function listar() {
    var query = `SELECT DISTINCT c.idCurral, c.nomeCurral, f.nomeFazenda
    FROM Curral as c
    INNER JOIN endFazenda as f ON c.fkEndFazenda = f.idEndereco
    WHERE c.fkEndFazenda = idEndereco;
    `;

    return database.executar(query);
}
function cadastrar(nome, curral) {

    var instrucaoSql = `insert into curral(nomeCurral, fkEndFazenda) values ('${nome}',${curral})`;

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
    cadastrar
};    