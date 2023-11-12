var database = require("../database/config")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(cnpj, nomeEmpresa, ddd, contato, email, senha) {

    instrucaoSql = `insert into (cnpj, nomeEmpresa, ddd, contato, email, senha) empresa values (${cnpj}, ${nomeEmpresa}, ${ddd}, ${contato}, ${email}, ${senha})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(id) {
    var query = `select * from empresa where idEmpresa = '${id}'`;

    return database.executar(query);
}

function listar() {
    var query = `select * from empresa`;

    return database.executar(query);
}

function buscarPorCnpj(cnpj) {
    var query = `select * from empresa where cnpj = '${cnpj}'`;

    return database.executar(query);
}

module.exports = {
    entrar,
    cadastrar,
    buscarPorCnpj,
    buscarPorId,
    cadastrar,
    listar
};    