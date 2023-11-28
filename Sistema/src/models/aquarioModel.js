var database = require("../database/config");

function buscarAquariosPorEmpresa(idUsuario, idSensor) {

  instrucaoSql = `SELECT idEmpresa, nomeFazenda, nomeCurral, idSensor, nomeSensor FROM empresa 
  JOIN endFazenda ON idEndereco = fkEmpresa JOIN curral ON idEndereco = fkEndFazenda 
  JOIN sensor ON fkCurral WHERE idEmpresa = ${idUsuario} ORDER BY nomeCurral DESC;
  `;

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
