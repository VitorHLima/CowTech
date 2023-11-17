var database = require("../database/config")

function cadastrar(dht11Umidade, lm35_temperatura, idRegistro) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    var instrucao = `
        INSERT INTO registro(idRegistro, dtAtual, dht11_Umidade, lm35_temperatura, fkSensor) 
        VALUES (${idRegistro}, ?, ${dht11Umidade}, ${lm35_temperatura}, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};