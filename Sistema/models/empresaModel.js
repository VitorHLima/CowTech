var database = require("../database/config")

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(cnpj, nome, representante, ddd, contato, email, senha) {

    instrucaoSql = `insert into (cnpj, nomeEmpresa, representante, ddd, contato, email, senha) empresa values (${cnpj}, ${nome}, ${representante}, ${ddd}, ${contato}, ${email}, ${senha})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function confirmaCadastro(email, senha) {
//     console.log("ACESSEI A AVALIACAO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", email, senha);
//     var instrucao = `
//         update usuario set fkJogador = ${jogadorEscolhido} where idUsuario = ${idUsuario};
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

module.exports = {
    entrar,
    cadastrar
};    