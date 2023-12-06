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
nomeCurral varchar(45),
fkEndFazenda int,
foreign key (fkEndFazenda) references endFazenda(idEndereco)
);

create table sensor(
idSensor int primary key auto_increment,
nomeSensor varchar(20),
fkCurral int,
foreign key (fkCurral) references curral(idCurral) 
);

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

-- Inserção de Dados

SELECT s.nomeSensor, c.nomeCurral, AVG(r.lm35_temperatura) AS media_temperatura
FROM Sensor AS s
JOIN Curral AS c ON c.idCurral = s.fkCurral
JOIN endFazenda AS e ON c.fkEndFazenda = e.idEndereco
JOIN Empresa AS em ON em.idEmpresa = e.fkEmpresa
JOIN Registro AS r ON r.fkSensor = s.idSensor
WHERE em.idEmpresa = 2
GROUP BY s.nomeSensor, c.nomeCurral;

SELECT
    lm35_temperatura AS temperatura,
    (SELECT AVG(lm35_temperatura) FROM registro) AS media_temperatura,
    (SELECT AVG(dht11_umidade) FROM registro WHERE fkSensor = 4) AS media_umidade,
    dht11_umidade AS umidade,
    dtAtual,
    DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico
FROM registro
JOIN sensor ON registro.fkSensor = sensor.idSensor
WHERE idSensor = 4
ORDER BY idRegistro DESC;


SELECT s.nomeSensor, c.nomeCurral, AVG(r.lm35_temperatura) AS media_temperatura
FROM Sensor AS s
JOIN Curral AS c ON c.idCurral = s.fkCurral
JOIN endFazenda AS e ON c.fkEndFazenda = e.idEndereco
JOIN Empresa AS em ON em.idEmpresa = e.fkEmpresa
JOIN Registro AS r ON r.fkSensor = s.idSensor
WHERE em.idEmpresa = 1
GROUP BY s.nomeSensor, c.nomeCurral;

SELECT distinct Sensor.nomeSensor, curral.nomeCurral, registro.lm35_temperatura as temperatura FROM Sensor join curral ON idCurral = fkCurral 
JOIN endFazenda ON fkEndFazenda = idEndereco JOIN Empresa ON idEmpresa = fkEmpresa JOIN registro on idRegistro = fkSensor where idEmpresa = 1; 

SELECT * FROM Curral JOIN endFazenda ON idEndereco;

insert into empresa values
	(null,'01234567891234','Etiel','11','912345678','etiel@sptech.com','cowTech_123');
    
    SELECT * FROM Curral JOIN endFazenda ON idEndereco where idEmpresa = 1;

insert into endFazenda values
	(null,'FrezzaLaticinios','Rua Abobrinha','Chacaras Leguminosas','Hortifrut','Acre','69912345',678,1);
    
insert into curral values
	(null,'Galpão Sul',1),
	(null,'Galpão Norte',1),
	(null,'Galpão Leste',1);
    
insert into sensor values
	(null,'Sensor 1',1),
	(null,'Sensor 2',1),
	(null,'Sensor 3',1),
	(null,'Sensor 4',2),
	(null,'Sensor 5',2),
	(null,'Sensor 6',3),
	(null,'Sensor 7',3);
    
    INSERT registro VALUES 
(1, now(), 80, 29, 1), (1, now(), 69, 20, 2),(1, now(), 70, 25, 3), 
(1, now(), 80, 29, 4),(2, now(), 75, 24, 1), (2, now(), 87, 19, 2),
(2, now(), 70, 26, 3), (2, now(), 65, 25, 4), (3, now(), 60, 23, 1), 
(3, now(), 30, 15, 2),(3, now(), 70, 28, 3), (3, now(), 44, 22, 4),
(4, now(), 45, 20, 1),(4, now(), 70, 33, 2), (4, now(), 56, 18, 3), (5, now(), 45, 10, 4);

INSERT INTO registro (idRegistro,dht11_Umidade,lm35_temperatura, fkSensor)
VALUES (null,80, 29, 1),(null,80, 29, 2),(null,80, 29, 3),(null,80, 29, 4),
(null,80, 29, 5),(null,80, 29, 6),(null,80, 29, 7),(null,80, 29, 8),(null,80,29, 9)
					
truncate table bdsistema.registro;
		
-- selects

SELECT * FROM sensor JOIN Curral ON idCurral = fkCurral;

SELECT
        lm35_temperatura AS temperatura,
        dht11_umidade AS umidade,
        dtAtual,
        DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico FROM registro JOIN sensor ON registro.fkSensor = sensor.idSensor JOIN
        curral ON sensor.fkCurral = curral.idCurral and dtAtual BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW() ORDER BY
        idRegistro ASC;
        
SELECT c.nomeCurral, AVG(r.lm35_temperatura) AS media_temperatura
FROM Sensor AS s
JOIN Curral AS c ON c.idCurral = s.fkCurral
JOIN Registro AS r ON r.fkSensor = s.idSensor
GROUP BY c.nomeCurral;

SELECT * FROM empresa;
SELECT * FROM EndFazenda;
SELECT * FROM curral;
SELECT * FROM sensor;
SELECT * FROM registro;

SELECT * FROM bdsistema.empresa;
SELECT * FROM bdsistema.EndFazenda;
SELECT * FROM bdsistema.curral;
SELECT * FROM bdsistema.sensor;
SELECT * FROM bdsistema.registro;

SELECT * FROM Empresa JOIN EndFazenda
	ON fkEmpresa = idEmpresa;

SELECT * FROM curral JOIN EndFazenda 
    ON idEndereco = fkEndFazenda JOIN Empresa on idEmpresa = fkEmpresa;

SELECT e.nomeFazenda, e.logradouro, e.numero, c.nomeCurral, s.nomeSensor as 'NomeSensor' FROM endFazenda 
AS e JOIN curral AS c ON idEndereco = fkEndFazenda JOIN sensor AS s ON fkCurral = idCurral;

SELECT * FROM curral JOIN EndFazenda ON idEndereco = fkEndFazenda;

SELECT idSensor, nomeSensor from Sensor;

SELECT sensor.nomeSensor, registro.dht11_Umidade, 
registro.lm35_temperatura, registro.dtAtual, date_format(registro.dtAtual, "%d/%m/%Y") as momento_grafico from Sensor 
JOIN registro ON fkSensor = idSensor where idSensor= 1;


SELECT e.nomeFazenda, e.logradouro, e.numero, c.nomeCurral, s.nomeSensor as 'NomeSensor' FROM endFazenda 
AS e JOIN curral AS c ON idEndereco = fkEndFazenda JOIN sensor AS s ON fkCurral = idCurral;

SELECT idEmpresa, nomeFazenda, nomeCurral, idSensor, nomeSensor FROM empresa 
JOIN endFazenda ON idEndereco = fkEmpresa JOIN curral ON idEndereco = fkEndFazenda 
JOIN sensor ON fkCurral WHERE idEmpresa = 1 ORDER BY nomeCurral DESC;

SELECT sensor.idSensor, curral.nomeCurral, endFazenda.nomeFazenda from curral join endFazenda on fkEndFazenda = idEndereco 
join sensor on fkCurral = idCurral;

select lm35_temperatura as temperatura, dht11_umidade as umidade, dtAtual, date_format(dtAtual,'%d:%m:%Y') as momento_grafico from registro join
sensor on fkCurral = idCurral where fkSensor = 1 and dtAtual between date_sub(now(), interval 30 day) and now()
                    order by idRegistro asc;

select 
        lm35_temperatura AS temperatura, dht11_Umidade as umidade,
                        dtAtual,
                        DATE_FORMAT(dtAtual,'%d:%m:%Y') as momento_grafico
                    from registro
                    where fkSensor = 1 and dtAtual between date_sub(now(), interval 30 day) and now()
                    order by idRegistro asc;
                    
                    SELECT
        lm35_temperatura AS temperatura,
        dht11_umidade AS umidade,
        dtAtual,
        DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico FROM registro JOIN sensor ON registro.fkSensor = sensor.idSensor 
        where idSensor = 1 ORDER BY idRegistro;


SELECT
    lm35_temperatura AS temperatura,
    dht11_umidade AS umidade,
    dtAtual,
    DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico FROM registro JOIN sensor ON registro.fkSensor = sensor.idSensor JOIN
    curral ON sensor.fkCurral = curral.idCurral WHERE
    fkSensor = 4 and fkCurral = 2 AND dtAtual BETWEEN DATE_SUB(NOW(), INTERVAL 30 DAY) AND NOW() ORDER BY
    idRegistro ASC;
    
    SELECT sensor.nomeSensor, registro.dht11_Umidade as umidade, 
        registro.lm35_temperatura as temperatura, registro.dtAtual, DATE_FORMAT(dtAtual, '%d:%m:%Y') as momento_grafico from Sensor 
        JOIN registro ON fkSensor = idSensor where idSensor = 1;


			INSERT bdsistema.registro VALUES
(null, '2023-11-27', 35, 25, 4), 
(null, '2023-11-28', 65, 27, 4), 
(null, '2023-11-29', 55, 29, 4);

select * from bdsistema.registro;


INSERT bdsistema.registro VALUES
(null, '2023-11-30', 35, 25, 5), 
(null, '2023-12-01', 65, 27, 6), 
(null, '2023-12-02', 55, 29, 7);


INSERT bdsistema.registro VALUES
(null, '2023-11-19', 55, 29, 1),             
(null, '2023-11-20', 65, 30, 1), 
(null, '2023-11-21', 35, 32, 1), 
(null, '2023-11-22', 30, 27, 2), 
(null, '2023-11-23', 40, 25, 2),
(null, '2023-11-24', 50, 22, 2), 
(null, '2023-11-25', 60, 19, 3), 
(null, '2023-11-26', 70, 23, 3); 



select * from registro;



   