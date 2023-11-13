var database = require("../database/config")

function cadastrar(nome, logradouro, bairro, municipio, estado, cep, numero, empresaId) {

    var instrucaoSql = `insert into endfazenda (nomeFazenda, logradouro, bairro, municipio, estado, cep, numero, fkEmpresa) values ('${nome}', '${logradouro}', '${bairro}', '${municipio}', '${estado}', '${cep}', '${numero}', ${empresaId})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};    