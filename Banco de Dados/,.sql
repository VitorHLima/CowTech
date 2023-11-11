CREATE DATABASE Teste;
USE Teste;
DROP DATABASE Teste;
CREATE TABLE Paciente (
	idPaciente int primary key auto_increment,
    nome varchar(45)
);
CREATE TABLE Medico (
	idMedico int primary key auto_increment,
    nome varchar(45),
    especialidade varchar(45),
    salario decimal(10,2)
);
CREATE TABLE Consulta (
	idConsulta int auto_increment,
    fkMedico int,
    fkPaciente int,
    PRIMARY KEY(idConsulta, fkMedico, fkPaciente),
    foreign key (fkMedico) references Medico(idMedico),
    foreign key (fkMedico) references Paciente(idPaciente),
	dtConsulta DATETIME
);
CREATE TABLE Endereco (
	idEndereco int primary key auto_increment, 
    cep varchar(45),
    bairro varchar(45),
    cidade varchar(45),
    estado char(2)
) auto_increment = 5000;

CREATE TABLE EnderecoPaciente (
	fkEndereco int,
    fkPaciente int,
    primary key(fkEndereco, fkPaciente),
    foreign key(fkEndereco) references Endereco(idEndereco),
    foreign key (fkPaciente) references Paciente(idPaciente),
    num varchar(45),
    complemento varchar(45),
    tipo varchar(45)
);
    
INSERT INTO EnderecoPaciente VALUES
	(5000,1,'595','4º andar', 'apartamento'),
	(5001,1,'1500','10º andar', 'apartamento'),
	(5000,2,'595','6º andar', 'apartamento'),
	(5001,2,'762','próximo ao mercado ABC', 'casa');
    
INSERT INTO paciente VALUES
	(null, 'Julia'),
	(null, 'Jhulia com H'),
	(null, 'Jeremias');
    
 INSERT INTO medico VALUES
	(null, 'Julio', 'pediatra',100.99),
	(null, 'Zapatta', 'ortopedista',1.99);   
    
    INSERT INTO consulta VALUES
	(1, 1, 1000, default),
	(2, 1, 1000, default),
	(1, 2, 1000, default),
	(1, 2, 1001, default);
    
    INSERT INTO endereco VALUES
	(null, '01414-905','Cerqueira Cesar','São Paulo', 'SP'),
	(null, '04253-000','Sacomã','São Paulo', 'SP');
    
SELECT 
    p.nome AS nome_paciente,
    c.dtConsulta,
    m.nome AS nome_medico,
    m.especialidade,
    m.salario
FROM 
    Paciente AS p
JOIN
    Consulta AS c ON p.fkPaciente = c.idPaciente
JOIN
    Medico AS m ON m.idMedico = c.idMedico;
