-- BANCO 
CREATE DATABASE bdsistema;

USE bdsistema;

-- TABELAS

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
	cnpj CHAR(14) UNIQUE NOT NULL,
	nomeEmpresa VARCHAR(50) NOT NULL,
    representante VARCHAR(60) NOT NULL,
	ddd CHAR(2) NOT NULL, /*Tabela externa?*/
	contato CHAR(9) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	fkEndereco INT,
  CONSTRAINT fkEndereco FOREIGN KEY (fkEndereco) REFERENCES endereco (idEndereco)
);

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY NOT NULL,
	logradouro VARCHAR(50),
	bairro VARCHAR(30),
	municipio VARCHAR(30),
	estado VARCHAR(20) NOT NULL,
	cep CHAR(8),
    ponto_referencia VARCHAR(60),
    numero varchar(10)
);

CREATE TABLE funcionario (
	idFuncionario INT PRIMARY KEY AUTO_INCREMENT, 
	nome VARCHAR(40) NOT NULL,
	ddd CHAR(2) NOT NULL,
	telefone CHAR(9) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha CHAR (20) NOT NULL,
	fkEmpresa INT NOT NULL,
	CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa)
	REFERENCES empresa (idEmpresa)
);

CREATE TABLE registro (
	idRegistro INT PRIMARY KEY AUTO_INCREMENT,
	dtAtual DATETIME DEFAULT CURRENT_TIMESTAMP,
    temperatura FLOAT(4) NOT NULL,
	umidade FLOAT(4) NOT NULL,
    fkSensor INT,
	CONSTRAINT fkSensor FOREIGN KEY (fkSensor)
	REFERENCES sensor (idSensor)
    
);

CREATE TABLE sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	codigo VARCHAR(10),
    tipo varchar(30) not null,
	setor varchar(45),
    fkEmpresa INT, 
    FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa)
);

create table TempIdeal(
	idIdeal int primary key,
	temperaturaIdealMin varchar(2),
    temperaturaIdealMax varchar(2),
    umidadeIdealMin varchar(2),
    umidadeIdealMax varchar(2)
    );

CREATE TABLE suporte (
	idSuporte int primary key auto_increment,
    tipo varchar(100) not null,
    telefone char(11) not null,
    descrição varchar(1000) not null,
    email varchar(30) not null,
    horario datetime default current_timestamp,
    fkFuncionario int, constraint fkFunc FOREIGN key (fkFunc) references funcionario(idFuncionario) 
);




