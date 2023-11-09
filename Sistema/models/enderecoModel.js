var database = require("../database/config")

function cadastrar(logradouro, bairro, municipio, estado, cep, pontoReferencia, numero, idEmpresa) {

    instrucaoSql = `insert into (logradouro, bairro, municipio, estado, cep, ponto_referencia, numero, empresa_idEmpresa) endereco values (${logradouro}, ${bairro}, ${municipio}, ${estado}, ${cep}, ${pontoReferencia}, ${numero}, ${idEmpresa})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};    