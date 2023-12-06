create database bdsistema;

use bdsistema;


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
idSensor int auto_increment primary key,
nome varchar(20),
fkCurral int,
foreign key (fkCurral) references curral(idCurral) 
);

create table registro(
idRegistro int auto_increment,
dtAtual datetime,
dht11_Umidade float,
lm35_temperatura float,
fkSensor int,
key (idRegistro),
foreign key (fkSensor) references sensor(idSensor),
primary key (fkSensor,idRegistro)
);


SELECT
        lm35_temperatura AS temperatura,
        (SELECT ROUND(AVG(lm35_temperatura),2) FROM registro ) AS media_temperatura,
        (SELECT ROUND(AVG(dht11_umidade),2) FROM registro WHERE fkSensor = 1) AS media_umidade,
        dht11_umidade AS umidade,
        dtAtual,
        DATE_FORMAT(dtAtual, '%d:%m:%Y') AS momento_grafico
    FROM registro
    JOIN sensor ON registro.fkSensor = sensor.idSensor
    WHERE idSensor = 1
    ORDER BY idRegistro DESC;
    
SELECT * FROM REGISTRO JOIN SENSOR ON fkSensor = idSensor;


select * from registro r where r.fkSensor = 4 order by dtAtual desc;



-- button => id => button-4

/*
resposta.fe(linha => {
	if(linha.tenp > x) {
		document.getElementById(`button-${linha.fk/se}`)
    }
})
*/