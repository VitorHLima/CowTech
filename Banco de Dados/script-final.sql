-- Criação do Banco de Dados
DROP DATABASE bdsistema;
create database bdsistema;

use bdsistema;

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

SELECT * FROM curral JOIN EndFazenda 
    ON idEndereco = fkEndFazenda JOIN Empresa on idEmpresa = fkEmpresa;
    
    select * from endFazenda;
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

SELECT e.nomeFazenda, e.logradouro, e.numero, c.nomeCurral, s.nomeSensor as 'NomeSensor' FROM endFazenda 
AS e JOIN curral AS c ON idEndereco = fkEndFazenda JOIN sensor AS s ON fkCurral = idCurral;

SELECT idEmpresa, nomeFazenda, nomeCurral, idSensor, nomeSensor FROM empresa 
JOIN endFazenda ON idEndereco = fkEmpresa JOIN curral ON idEndereco = fkEndFazenda 
JOIN sensor ON fkCurral WHERE idEmpresa = 1 ORDER BY nomeCurral DESC;

create table curral(
idCurral int primary key auto_increment,
nomeCurral varchar(45),
fkEndFazenda int,
foreign key (fkEndFazenda) references endFazenda(idEndereco)
);

SELECT * FROM curral JOIN EndFazenda ON idEndereco = fkEndFazenda;

create table sensor(
idSensor int primary key auto_increment,
nomeSensor varchar(20),
fkCurral int,
foreign key (fkCurral) references curral(idCurral) 
);

SELECT Sensor.nomeSensor, curral.nomeCurral, endFazenda.nomeFazenda FROM Sensor JOIN curral ON fkCurral = idCurral 
JOIN endFazenda ON fkEndFazenda = idEndereco 
where endFazenda.idEndereco = 1 AND curral.idCurral = 3;

SELECT * FROM sensor;

create table registro(
idRegistro int auto_increment,
dtAtual datetime default current_timestamp,
dht11_Umidade decimal(10,2),
lm35_temperatura decimal(10,2),
fkSensor int,
key(idRegistro),
foreign key (fkSensor) references sensor(idSensor),
primary key (fkSensor,idRegistro)
)auto_increment = 1000;

SELECT * FROM registro;

SELECT idSensor, nomeSensor from Sensor;

-- Inserção de Dados

INSERT registro VALUES 
(NULL, NULL, 80, 29, 1), (NULL, NULL, 69, 20, 2),(NULL, NULL, 70, 25, 3),
(NULL, NULL, 75, 24, 1), (NULL, NULL, 87, 19, 2),(NULL, NULL, 70, 26, 3),
(NULL, NULL, 60, 23, 1), (NULL, NULL, 30, 15, 2),(NULL, NULL, 70, 28, 3),
						 (NULL, NULL, 45, 20, 2),(NULL, NULL, 70, 33, 3),
                         (NULL, NULL, 45, 10, 2);

insert into empresa values
	(null,'01234567891234','Etiel','11','912345678','etiel@sptech.com','cowTech_123');
    
insert into endFazenda values
	(null,'FrezzaLaticinios','Rua Abobrinha','Chacaras Leguminosas','Hortifrut','Acre','69912345',678,1);
    
truncate table registro;

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
    
    
    