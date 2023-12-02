var database = require("../database/config")

function cadastrar(nome, logradouro, bairro, municipio, estado, cep, numero, empresaId) {

    var instrucaoSql = `insert into endfazenda (nomeFazenda, logradouro, bairro, municipio, estado, cep, numero, fkEmpresa) values ('${nome}', '${logradouro}', '${bairro}', '${municipio}', '${estado}', '${cep}', '${numero}', ${empresaId})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar(idUsuario) {
    var query = `select * from endFazenda JOIN empresa ON idEndereco = fkEmpresa where idEmpresa = ${idUsuario}`;

    return database.executar(query);
}

function buscarPorNomeFazenda(nomeFazenda) {
    var query = `select * from endFazenda where nomeFazenda = '${nomeFazenda}'`;

    return database.executar(query);
}

module.exports = {
    cadastrar,
    listar,
    buscarPorNomeFazenda
};    