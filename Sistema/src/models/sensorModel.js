var database = require("../database/config");

function publicar(nome, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucao = `
        INSERT INTO sensor(nome, fkCurral) VALUES ('${nome}',${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT e.nomeFazenda, e.logradouro, e.numero, c.nome, s.nome FROM endFazenda 
AS e JOIN curral AS c ON idEndereco = fkEndFazenda JOIN sensor AS s ON fkCurral = idCurral;
 `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    publicar,
    listar
}