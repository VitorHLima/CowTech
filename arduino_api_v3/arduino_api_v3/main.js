const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3333;
const HABILITAR_OPERACAO_INSERIR = true;

const serial = async (
    valoresDht11Umidade,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    valoresLm35Temperatura,
    // valoresChave
) => {
    const poolBancoDados = mysql.createPool(
        {
            host: '10.18.32.138',
            port: 3306,
            user: 'root',
            password: 'ga22032005',
            database: 'bdsistema'
        }
    ).promise();

    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        const valores = data.split(';');
        const dht11Umidade = parseFloat(valores[0]);
        console.log(dht11Umidade)
        // const dht11Temperatura = parseFloat(valores[1]);
        // const luminosidade = parseFloat(valores[2]);
        const lm35Temperatura = parseFloat(valores[1]);
        // const chave = parseInt(valores[4]);

        valoresDht11Umidade.push(dht11Umidade);
        // valoresDht11Temperatura.push(dht11Temperatura);
        // valoresLuminosidade.push(luminosidade);
        valoresLm35Temperatura.push(lm35Temperatura);
        // valoresChave.push(chave);

        var fkSensor = Number(1 + parseInt(Math.random() * 5));

        if (HABILITAR_OPERACAO_INSERIR) {
            await poolBancoDados.execute(
                `INSERT INTO registro (dht11_Umidade, lm35_temperatura, fkSensor) VALUES 
                (?, ?, ${fkSensor})`,
                [dht11Umidade, lm35Temperatura]
            );
        }

    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

const servidor = (
    valoresDht11Umidade,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    valoresLm35Temperatura,
    // valoresChave
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresDht11Umidade);
    });
    // app.get('/sensores/dht11/temperatura', (_, response) => {
    //     return response.json(valoresDht11Temperatura);
    // });
    // app.get('/sensores/luminosidade', (_, response) => {
    //     return response.json(valoresLuminosidade);
    // });
    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresLm35Temperatura);
    });
    // app.get('/sensores/chave', (_, response) => {
    //     return response.json(valoresChave);
    // });
}

(async () => {
    const valoresDht11Umidade = [];
    // const valoresDht11Temperatura = [];
    // const valoresLuminosidade = [];
    const valoresLm35Temperatura = [];
    // const valoresChave = [];
    await serial(
        valoresDht11Umidade,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        valoresLm35Temperatura,
        // valoresChave
    );
    servidor(
        valoresDht11Umidade,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        valoresLm35Temperatura,
        // valoresChave
    );
})();
