create database bdsistema;

use bdsistema;

create table endereco(
idEndereco int primary key auto_increment,
logradouro varchar(50),
bairro varchar(30),
municipio varchar(30),
estado varchar(20),
cep char(8),
ponto_referencia varchar(60),
numero varchar(10)
);

create table empresa(
idEmpresa int primary key auto_increment,
cnpj char(14),
nomeEmpresa varchar(50),
representante varchar(60),
ddd char(2),
contato char(9),
email varchar(30),
senha varchar(20),
fkEndereco int,
foreign key (fkendereco) references endereco(idEndereco)
);

create table metricasIdeais(
idMetricas int auto_increment,
fkEmpresa int,
tempMax float,
tempMin float,
umidMax float,
umidMin float,
foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (idMetricas,fkEmpresa)
);

create table funcionario(
fkEmpresa int,
idFuncionario int,
nome varchar(40),
ddd char(2),
telefone char(9),
email varchar(30),
senha char(20),
foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (fkEmpresa,idFuncionario)
);

create table sensor(
fkEmpresa int,
idSensor int,
nome varchar(20),
codigo varchar(10),
tipo varchar(5),
constraint check (tipo in(Lm35,Dht11)),
dalpao varchar(45),
foreign key (fkEmpresa) references empresa(idEmpresa),
primary key (fkEmpresa,idSensor)
);

create table registro(
fkEmpresa int,
fkSensor int,
idRegistro int auto_increment, -- usar datetime
dtAtual datetime default current_timestamp,
dht11_Umidade float,
lm35_temperatura float,
foreign key (fkEmpresa) references sensor(fkEmpresa),
foreign key (fkSensor) references sensor(idSensor),
primary key (fkEmpresa,fkSensor,idRegistro)
);