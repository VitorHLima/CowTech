process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var aquariosRouter = require("./src/routes/aquarios");
var enderecoRouter = require("./src/routes/enderecos");
var medidasRouter = require("./src/routes/medidas");
var empresasRouter = require("./src/routes/empresas");
var fazendaRouter = require("./src/routes/fazenda");
var sensoresRouter = require("./src/routes/sensores");
var curralRouter = require("./src/routes/currais");
var avisosRouter = require("./src/routes/avisos");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "inicial")));
app.use(express.static(path.join(__dirname, "cadastro-empresa")));
app.use(express.static(path.join(__dirname, "endereco")));
app.use(express.static(path.join(__dirname, "Site")));
app.use(express.static(path.join(__dirname, "login")));
app.use(express.static(path.join(__dirname, "paginaGrafico")));
app.use(express.static(path.join(__dirname, "sistemaSensor")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "inicial/img")));
app.use(express.static(path.join(__dirname, "Tela simulador financeiro")));
app.use(express.static(path.join(__dirname, "paginaGrafico")));

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3333',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'accesskey'],
}));

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/enderecos", enderecoRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);
app.use("/fazenda", fazendaRouter);
app.use("/sensores", sensoresRouter);
app.use("/currais", curralRouter);
app.use("/avisos", avisosRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
