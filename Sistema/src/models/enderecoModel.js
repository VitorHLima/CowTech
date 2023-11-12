var database = require("../database/config")

function cadastrar(nomeFazenda, logradouro, bairro, municipio, estado, cep, numero, idEmpresa) {

    instrucaoSql = `insert into (nomeFazenda, logradouro, bairro, municipio, estado, cep, numero, fkEmpresa) endfazenda values (${nomeFazenda}, ${logradouro}, ${bairro}, ${municipio}, ${estado}, ${cep}, ${numero}, ${idEmpresa})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};    