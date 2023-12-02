var database = require("../database/config");

function buscarUltimasMedidas(i) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${dados}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        lm35_temperatura AS temperatura,
        dht11_umidade AS umidade,
        dtAtual,
        DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico FROM registro JOIN sensor ON registro.fkSensor = sensor.idSensor JOIN
        curral ON sensor.fkCurral = curral.idCurral where idSensor = ${i} AND dtAtual BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW() ORDER BY
        idRegistro ASC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(fkSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSensor} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT
        lm35_temperatura AS temperatura,
        dht11_umidade AS umidade,
        dtAtual,
        DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico FROM registro JOIN sensor ON registro.fkSensor = sensor.idSensor JOIN
        curral ON sensor.fkCurral = curral.idCurral WHERE
        fkSensor = ${fkSensor} and fkCurral = ${fkCurral} AND dtAtual BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW() ORDER BY
        idRegistro ASC;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasMensal(idSensor) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and dtAtual between date_sub(now(), interval 30 day) and now()
                    order by idRegistro asc;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and dtAtual between date_sub(now(), interval 30 day) and now()
                    order by idRegistro asc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasMensal,
    buscarUltimasMedidas
}
