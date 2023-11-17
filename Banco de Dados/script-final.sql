-- Criação do Banco de Dados

create database bdsistema;

use bdsistema;
DROP DATABASE bdsistema;
-- Criação das Tabelas

create table empresa(
idEmpresa int primary key auto_increment,
cnpj char(18),
nomeEmpresa varchar(50),
ddd char(2),
contato char(10),
email varchar(30),
senha varchar(20)
);

SELECT * FROM empresa;

create table endFazenda(
idEndereco int primary key auto_increment,
nomeFazenda varchar(50),
logradouro varchar(50),
bairro varchar(30),
municipio varchar(30),
estado varchar(20),
cep char(8),
numero varchar(10),
fkEmpresa int,
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table curral(
idCurral int primary key auto_increment,
nome varchar(45),
fkEndFazenda int,
foreign key (fkEndFazenda) references endFazenda(idEndereco)
);

create table sensor(
idSensor int primary key,
nome varchar(20),
fkCurral int,
foreign key (fkCurral) references curral(idCurral) 
);

create table registro(
idRegistro int,
dtAtual datetime default current_timestamp,
dht11_Umidade float,
lm35_temperatura float,
fkSensor int,
foreign key (fkSensor) references sensor(idSensor),
primary key (fkSensor,idRegistro)
);

-- Inserção de Dados

insert into empresa values
	(null,'01234567891234','Etiel','11','912345678','etiel@sptech.com','cowTech_123');
    
insert into endFazenda values
	(null,'FrezzaLaticinios','Rua Abobrinha','Chacaras Leguminosas','Hortifrut','Acre','69912345',678,1);
    
insert into curral values
	(null,'Galpão Sul',1),
	(null,'Galpão Norte',1),
	(null,'Galpão Leste',1);
    
insert into sensor values
	(1,'Sensor 1',1),
	(2,'Sensor 2',1),
	(3,'Sensor 3',1),
	(4,'Sensor 1',2),
	(5,'Sensor 2',2),
	(6,'Sensor 3',2),
	(7,'Sensor 4',2),
	(8,'Sensor 5',2),
	(9,'Sensor 1',3),
	(10,'Sensor 2',3),
	(11,'Sensor 3',3),
	(12,'Sensor 4',3);
    
    