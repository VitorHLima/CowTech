var database = require("../database/config");

function buscarUltimasMedidas(fkSensor) {

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
        instrucaoSql = `SELECT sensor.nomeSensor, registro.dht11_Umidade as umidade, 
            registro.lm35_temperatura as temperatura, registro.dtAtual, date_format(registro.dtAtual, "%d/%m/%Y") as momento_grafico from Sensor 
            JOIN registro ON fkSensor = idSensor where idSensor = ${fkSensor};
        
        
        `;
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
        instrucaoSql = `SELECT sensor.nomeSensor, registro.dht11_Umidade as umidade, 
        registro.lm35_temperatura as temperatura, registro.dtAtual as momento_grafico from Sensor 
        JOIN registro ON fkSensor = idSensor where idSensor = ${fkSensor};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasSemanal(idSensor, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idSensor}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and dtAtual between date_sub(now(), interval 7 day) and now()
                    order by idRegistro desc limit ${limite_linhas};`;
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
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idSensor} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and dtAtual between date_sub(now(), interval 30 day) and now()
                    order by idRegistro desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasAnual(idSensor) {

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
        instrucaoSql = `select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = ${idSensor} and dtAtual between date_sub(now(), interval 365 day) and now()
                    order by idRegistro desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMedidasEmTempoReal,
    buscarMedidasSemanal,
    buscarMedidasMensal,
    buscarMedidasAnual,
    buscarUltimasMedidas
}
