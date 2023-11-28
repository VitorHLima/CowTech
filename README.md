<h1>CowTech 🐄 </h1>

<h3>Projeto SPTech 2º semestre de 2023</h3>

Projeto de Pesquisa e Inovação com entregáveis de Algoritmos, Banco de Dados, Tecnologia da Informação e Arquitetura Computacional.

<h3>Resumo do projeto</h3>

Monitoramento da temperatura e umidade de celeiros a fim de reduzir o estresse térmico para aumentar a produção de leite.
<br>
<br>
<br>

<h1>Execução do Sistema</h1>

<h2>1ºPasso</h2>
<h3>Download do Projeto Pelo GitHub</h3>

O projeto está salvo em um repositório do GitHub e pode ser baixado através de um perfil cujo acesso tenha sido liberado por um dos administradores do repositório, o download pode ser feito como um repositório local através do GitBash pelo comando git clone ou como um arquivo compactado que armazenará o repositório.

<h2>2ºPasso</h2>
<h3>Criação das Tabelas do Banco de Dados</h3>

O Script para criação das tabelas do sistema está no repositório “Banco de Dados” dentro do repositório que foi baixado no passo anterior, o arquivo deve ser aberto em um sistema de gerenciamento de banco de dados e as tabelas devem ser criadas na ordem em que estão dentro do documento ou com o comando ctrl + shift + enter.

<h2>3ºPasso</h2>
<h3>Parametrização do Ambiente</h3>

Abra o repositório no editor de códigos e acesse /Sistema/app.js, se você estiver utilizando um Ambiente de Produção (SQL Server na nuvem, remoto), comente a 1ª linha e deixe a 2ª linha habilitada, se você estiver utilizando um Ambiente de Desenvolvimento (MySQL Workbench, local) comente a 2ª linha e deixe a 1ª linha habilitada.

<h2>4ºPasso</h2>
<h3>Atualizar as credenciais do Banco de Dados</h3>

Abra o repositório no editor de códigos e acesse /Sistema/src/database/config.js, caso esteja utilizando um Ambiente de Produção complete a área indicada como CONEXÃO DO SQL SERVER - AZURE (NUVEM), caso esteja utilizando um Ambiente de Desenvolvimento complete a área indicada como CONEXÃO DO MYSQL WORKBENCH.

<h2>5º Passo</h2>
<h3>Execução do node.js</h3>

Abra o repositório no GitBash, no cmd ou no terminal do Visual Studio Code, acesse /Sistema e de o comando npm i ou npm instal para instalar as dependências do node.js e depois da instalação de o comando npm start para executar a aplicação.

<h2>6º Passo</h2>
<h3>Teste da Integração do node</h3>

Copie o link disponibilizado no terminal durante a etapa anterior e acesse-o pelo seu navegador teste a funcionalidade do cadastro, login e das telas de dashboard.

<h2>7º Passo</h2>
<h3>Finalizar a execução</h3>
Caso deseje parar a execução do sistema acesse o terminal em que executou o início da aplicação e execute o comando ctrl + c.
<br>
<br>
<br>

<h1>Instalação dos Sensores</h1>

<h2>1º Passo</h2>
<h3>Sensores na protoboard</h3>

Coloque os sensores na protoboard de forma que eles não ocupem a mesma coluna.

<h2>2º Passo</h2>
<h3>Ligue os sensores ao Arduíno</h3>

Ligue os sensores ao Arduíno com os jumpers seguindo as entradas de cada sensor
![image](/Documentação/Documentos/Manual%20do%20Projeto/DHT11.png)
![image](/Documentação/Documentos/Manual%20do%20Projeto/LM35.png)
<br>
<h2>3º Passo</h2>
<h3>Prepare o código do Arduíno</h3>

Abra o código arduinoCode.ino que está dentro do repositório Sistema/arduinoCode, pelo Arduino IDE e verifique se o código está correto.
![image](/Documentação/Documentos/Manual%20do%20Projeto/verificação%20Arduino%20IDE.png)
A verificação é feita nesse botão que se encontra na área superior esquerda.

<h2>4º Passo</h2>
<h3>Conecte o Arduino</h3>

Conecte o Arduino ao computador que recebera os dados via USB.

<h2>5º Passo</h2>
<h3>Envie o código para o Arduíno</h3>

Após verificar o funcionamento do código envie ele para o Arduíno antes de iniciar a coleta de dados.
![image](/Documentação/Documentos/Manual%20do%20Projeto/envio%20Arduino%20IDE.png)
O envio é feito nesse botão que se encontra na área superior esquerda.

<h2>6º Passo</h2>
<h3>Teste de coleta de dados</h3>
Inicie a coleta de dados dentro do Arduino IDE.
![image](/Documentação/Documentos/Manual%20do%20Projeto/inicio%20da%20coleta%20Arduino%20IDE.png)
O início da coleta de dados é feito nesse botão que se encontra na área superior direita.