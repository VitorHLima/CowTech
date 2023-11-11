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
foreign key (fkEmpresa) references empresa(idEmpresa)
);

create table fazenda(
idFazenda int primary key auto_increment,
nome varchar(40),
fkEndereco int,
foreign key (fkEndereco) references endereco(idEndereco)
);

create table galpao(
fkFazenda int,
idGalpao int,
setor varchar(45),
foreign key (fkFazenda) references fazenda(idFazenda),
primary key (fkFazenda,idGalpao)
);

create table sensor(
idSensor int primary key,
nome varchar(20),
codigo varchar(10),
tipo varchar(5),
constraint check (tipo in(Lm35,Dht11)),
fkGalpao varchar(45),
foreign key (fkGalpao) references galpao(idGalpao) 
);

create table registro(
fkSensor int,
idRegistro int auto_increment,
dtAtual datetime default current_timestamp,
dht11_Umidade float,
lm35_temperatura float,
foreign key (fkSensor) references sensor(idSensor),
primary key (fkSensor,idRegistro)
);