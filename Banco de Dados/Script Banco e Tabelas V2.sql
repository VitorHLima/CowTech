create database bdsistema;

use bdsistema;

create table empresa(
idEmpresa int primary key auto_increment,
cnpj char(14),
nomeEmpresa varchar(50),
representante varchar(60),
ddd char(2),
contato char(9),
email varchar(30),
senha varchar(20)
);

create table fazenda(
idFazenda int auto_increment
);

create table endereco(
idEndereco int primary key auto_increment,
logradouro varchar(50),
bairro varchar(30),
municipio varchar(30),
estado varchar(20),
cep char(8),
ponto_referencia varchar(60),
numero varchar(10),
fkEndereco int,
fkFazenda int,
foreign key (fkEmpresa) references empresa(idEmpresa),
foreign key (fkFazenda) references fazenda(idFazenda)
);

create table galpao(
idGalpao int,
fkFazenda int
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