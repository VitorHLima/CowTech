var database = require("../database/config");

function publicar(nome, idEndereco) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucao = `
        INSERT INTO curral(nome, FkEndFazenda) VALUES ('${nome}', '${idEndereco}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar
}