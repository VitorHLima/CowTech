var empresaModel = require("../models/empresaModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        empresaModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].idEmpresa)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length >= 0) {
                                    res.json({
                                        idEmpresa: resultadoAutenticar[0].idEmpresa,
                                        email: resultadoAutenticar[0].email,
                                        nomeEmpresa: resultadoAutenticar[0].nomeEmpresa,
                                        senha: resultadoAutenticar[0].senha,
                                        idSensor: resultadoAquarios[0] || '', // Atenção aqui
                                        curral: resultadoAquarios
                                    });
                                } else {
                                    res.status(204).json({ sensor: [] }, { curral: [] });
                                }
                            });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }

            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cnpj = req.body.cnpjServer;
    var nome = req.body.nomeServer;
    var ddd = req.body.dddServer;
    var contato = req.body.contatoServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (cnpj == undefined) {
        res.status(400).send("Seu cnpj está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    } else if (ddd == undefined) {
        res.status(400).send("Seu ddd está undefined!");
    } else if (contato == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
            if (resultado.length > 0) {
                res
                    .status(401)
                    .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
            } else {
                empresaModel.cadastrar(cnpj, nome, ddd, contato, email, senha).then((resultado) => {
                    res.status(201).json(resultado);
                });
            }
        });
    }
}

function buscarPorCnpj(req, res) {
    var cnpj = req.query.cnpj;

    empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res) {
    empresaModel.listar().then((resultado) => {
        res.status(200).json(resultado);
    });
}

function buscarPorId(req, res) {
    var id = req.params.idEmpresa;

    empresaModel.buscarPorId(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}
module.exports = {
    autenticar,
    cadastrar,
    buscarPorCnpj,
    buscarPorId,
    listar,
}