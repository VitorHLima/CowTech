USE bdMonitoramento;

-- INSERÇÃO DE REGISTROS NAS TABELAS

-- EMPRESA
INSERT INTO empresa (cnpj, nome_empresa, representante, ddd, telefone, lagradouro, bairro, municipio, estado, cep, email, senha) VALUES
(23398926000182,'Fazenda Colorado', 'Marcos Antonio', 19, 35431550, 'Rodovia Anhaguera KM 177,65', 'Agua Branca', 'Araras', 'São Paulo', 13600-970, 'cadastro@fazendacolorado.com.br', 'WQ#y5WPS'),
(26318116000167,'Sekita Agronegócios', 'Leticia Rodrigo', 34, 36716826, 'Rodovia Br 354, KM 99', 'Zona Rural', 'Rio Paranaiba', 'Minas Gerais', 38810-000, 'contabilidade@sekita.com.br', 'j9veC@T5'),
(47543145000100, 'Agrindus', 'Jose Afonso', 19,  35938100, 'Fazenda Santa Rita', 'Zona Rural', 'Descalvado', 'São Paulo', 13690-000, 'laticinio@agrindus.com.br','!YM4b7Sw'),
(21942051000102, 'Melkstad', 'Maria Joselaine', 42, 30974825, 'Fazenda Melkstad', 'Zona Rural', 'Carambei', 'Paraná', 84145-000, 'wendel@solucaocontabilidade.cnt.br', 'qb!v8rpU');

-- FUNCIONÁRIO
INSERT INTO funcionario (nome, ddd, telefone, email, senha, id_empresa) VALUES
('Emílio Marin Neto', 19, 985325385, 'emíliomarinNeto@gmail.com', '6oAMfAqw', 01),
('Ediane Teles Valdez', 19, 992462175, 'edianeTelesValdez@gmail.com', '4gSkZv@g', 03),
('Giovana Matias', 34, 969441495, 'giovanamatias@gmail.com', '@dmokPFh', 02),
('Samuel Duarte de Pereira', 34, 98017066, 'samuelDuartepereira@gmail.com', '2OcRufqK', 03),
('Lívia Ferminiano Matos', 42, 984618757, 'livíaFerminiano@gmail.com', '3PYUCGuz', 04),
('Elias Caldeira Filho', 19, 983435334, 'eliasCaldeiraFilho@gmail.com', 'x9128792', 01),
('Daniela Lutero Matos', 19, 998541825, 'danielaluteroMatos@gmail.com', 'r6127294', 03);

-- REGISTROS
INSERT INTO registro (temperatura, umidade) VALUES
(18.07,69),
(17.05,68),
(20.01,70),
(19.08,73),
(23.02,50),
(15.09,75);

-- SENSORES
INSERT INTO sensor (nome, codigo) VALUES
('Confinamento 1','EX094M10'),
('Confinamento 2','Y4A3KL06'),
('Confinamento 3','PL15O98H'),
('Confinamento 4','TW4xm14R');