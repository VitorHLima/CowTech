var enderecoModel = require("../models/enderecoModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var municipio = req.body.cnpjServer;
    var cep = req.body.nomeServer;
    var bairro = req.body.representanteServer;
    var estado = req.body.dddServer;
    var contato = req.body.telefoneServer;

    // logradouroServer: logradouro,
    //     municipioServer: municipio,
    //     cepServer: cep,
    //     bairroServer: bairro,
    //     estadoServer: estado

    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (representante == undefined) {
        res.status(400).send("Seu representante está undefined!");
    } else if (ddd == undefined) {
        res.status(400).send("Seu ddd está undefined!");
    } else if (contato == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo enderecoModel.js
        enderecoModel.cadastrar(cnpj, nome, representante, ddd, contato)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrar,
    cadastrar
}