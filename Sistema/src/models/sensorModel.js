var database = require("../database/config");

function publicar(nome, curral) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ");
    var instrucao = `
        INSERT INTO sensor(nomeSensor, fkCurral) VALUES ('${nome}',${curral});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listar(idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `
    SELECT s.nomeSensor, c.nomeCurral, AVG(r.lm35_temperatura) AS media_temperatura
FROM Sensor AS s
JOIN Curral AS c ON c.idCurral = s.fkCurral
JOIN endFazenda AS e ON c.fkEndFazenda = e.idEndereco
JOIN Empresa AS em ON em.idEmpresa = e.fkEmpresa
JOIN Registro AS r ON r.fkSensor = s.idSensor
WHERE em.idEmpresa = ${idEmpresa}
GROUP BY s.nomeSensor, c.nomeCurral;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarSensores(fazenda, curral) {

    instrucaoSql = `SELECT sensor.idSensor,Sensor.nomeSensor, curral.nomeCurral, endFazenda.nomeFazenda FROM Sensor JOIN curral ON fkCurral = idCurral 
    JOIN endFazenda ON fkEndFazenda = idEndereco 
    where endFazenda.idEndereco = ${fazenda} AND curral.idCurral = ${curral};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function todos(idEmpresa) {

    instrucaoSql = `SELECT Sensor.nomeSensor, curral.nomeCurral, registro.lm35_temperatura as temperatura FROM Sensor join curral ON idCurral = fkCurral 
    JOIN endFazenda ON fkEndFazenda = idEndereco JOIN Empresa ON idEmpresa = fkEmpresa JOIN registro on idRegistro = fkSensor where idEmpresa = ${idEmpresa}; 
    
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    publicar,
    listar,
    listarSensores,
    todos
}