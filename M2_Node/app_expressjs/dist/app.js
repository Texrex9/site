"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Carrega variáveis de ambiente do arquivo .env
require("dotenv-safe/config");
// Importa o framework Express para facilitar a criação do servidor
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./Router/users"));
// Importa o roteador de clientes, responsável pelas rotas relacionadas a clientes
const clients_1 = __importDefault(require("./Router/clients"));
const db_1 = __importDefault(require("./db"));
const usersModel_1 = __importDefault(require("./Model/usersModel"));
const messages_app_1 = require("./constants/messages.app");
// Cria uma instância da aplicação Express
const app = (0, express_1.default)();
// Define o mecanismo de visualização como Pug para renderizar páginas dinâmicas
app.set("view engine", "pug");
// Define o diretório onde estão os arquivos de views/templates
app.set("views", "./Views");
app.use(express_1.default.urlencoded({ extended: true }));
// Usa o roteador de usuários para a tela inicial e o de clientes para o CRUD
app.use(users_1.default);
app.use(clients_1.default);
// Captura erros não tratados nas rotas
app.use((error, req, res, next) => {
    console.error("Erro nao tratado na rota", req.method, req.originalUrl, error);
    if (res.headersSent) {
        next(error);
        return;
    }
    res.status(500).send(messages_app_1.APP_MESSAGES.internalServerError);
});
db_1.default.authenticate()
    .then(() => {
    console.log("Conexao com o banco validada.");
})
    .then(() => db_1.default.sync())
    .then(() => {
    console.log("Banco de dados sincronizado: " + process.env.DB_NAME);
})
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const totalUsers = yield usersModel_1.default.count();
    if (totalUsers === 0) {
        yield usersModel_1.default.create({ user: "admin", password: "1234" });
        console.log("Usuario padrao criado: admin / 1234");
    }
}))
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Conexão com o banco de dados estabelecida com sucesso!");
    });
})
    .catch((error) => {
    console.error("Erro ao iniciar a aplicacao:", error);
});
//# sourceMappingURL=app.js.map