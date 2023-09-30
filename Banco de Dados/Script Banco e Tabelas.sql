-- BANCO 
CREATE DATABASE bdsistema;

USE bdsistema;

-- TABELAS

CREATE TABLE empresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
	cnpj CHAR(14) UNIQUE NOT NULL,
	nome_empresa VARCHAR(50) NOT NULL,
	representante VARCHAR(40) NOT NULL,
	ddd CHAR(2) NOT NULL,
	telefone CHAR(9) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha VARCHAR(20) NOT NULL
);

CREATE TABLE endereco (
	idEndereco INT PRIMARY KEY NOT NULL,
	logradouro VARCHAR(50),
	bairro VARCHAR(20),
	municipio VARCHAR(20),
	estado VARCHAR(20) NOT NULL,
	cep CHAR(8),
    ponto_referencia VARCHAR(60)
);

CREATE TABLE funcionario (
	id_funcionario INT PRIMARY KEY AUTO_INCREMENT, 
	nome VARCHAR (40) NOT NULL,
	ddd CHAR(2) NOT NULL,
	telefone CHAR(9) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha CHAR (20) NOT NULL,
	id_empresa INT NOT NULL,
	CONSTRAINT fk_id_empresa FOREIGN KEY (id_empresa)
	REFERENCES empresa (id_empresa)
);

	CREATE TABLE registro (
	id_registro INT PRIMARY KEY AUTO_INCREMENT,
	dtAtual DATETIME DEFAULT CURRENT_TIMESTAMP,
	temperatura FLOAT(4) NOT NULL,
	umidade INT NOT NULL 
);

CREATE TABLE sensor(
	id_sensor INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
	codigo VARCHAR(10) NOT NULL,
    id_localSensor INT NOT NULL,
	CONSTRAINT fk_id_localSensor FOREIGN KEY (idLocal)
	REFERENCES localSensor(idLocal)
);

CREATE TABLE alerta (
	idAlerta int primary key not null,
    qtdAlerta int not null,
    id_sensor INT NOT NULL,
	CONSTRAINT fk_id_sensor FOREIGN KEY (id_sensor)
	REFERENCES sensor(id_sensor)
);
CREATE TABLE localSensor (
	idLocal INT PRIMARY KEY NOT NULL,
    qtdLocais VARCHAR(3) NOT NULL
);
/*Criar tabela de contato do suporte*/