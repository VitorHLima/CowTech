var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario) {

  instrucaoSql = `select * from Historias where fkUsuario = ${idUsuario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(titulo, idUsuario, descricao, classificacao) {

  instrucaoSql = `insert into (titulo, descricao,classificacao,fkUsuario) Historias values ('${titulo}','${descricao}',${classificacao},${idUsuario})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
