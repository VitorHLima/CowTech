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
	senha VARCHAR(20) NOT NULL
);

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY NOT NULL,
	logradouro VARCHAR(50),
	bairro VARCHAR(30),
	municipio VARCHAR(30),
	estado VARCHAR(20) NOT NULL,
	cep CHAR(8),
    ponto_referencia VARCHAR(60),
    numero varchar(10),
	fkEmpresa INT,
	CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa) REFERENCES empresa(idEmpresa)
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
    dht11_umidade FLOAT(4) NOT NULL,
	lm35_temperatura FLOAT(4) NOT NULL,
    fkSensor INT,
	CONSTRAINT fkSensor FOREIGN KEY (fkSensor)
	REFERENCES sensor (idSensor)
);


CREATE TABLE sensor(
	idSensor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	codigo VARCHAR(10),
    tipo varchar(30) not null,
	setor varchar(30),
    fkEmpresa INT, FOREIGN KEY (fkEmpresa) REFERENCES Empresa (idEmpresa),
    fkMetrica int, constraint fkMetrica foreign key (fkMetrica) references Metricas_ideais(idIdeal)    
);

create table Metricas_ideais(
	idIdeal int primary key auto_increment,
    tempMin FLOAT(4) NOT NULL,
    tempMax FLOAT(4) NOT NULL,
    umidadeMin FLOAT(4) NOT NULL,
    umidadeMax FLOAT(4) NOT NULL
    );

CREATE TABLE suporte (
	idSuporte int primary key auto_increment,
    assunto varchar(40) not null,
    descrição varchar(500) not null,
    telefone char(11) not null,
    email varchar(30) not null,
    horario datetime default current_timestamp,
    fkFuncionario int, constraint fkFunc FOREIGN key (fkFunc) references funcionario(idFuncionario) 
);




