// Carrega variáveis de ambiente do arquivo .env
import "dotenv-safe/config";

// Importa o framework Express para facilitar a criação do servidor
import express, { NextFunction, Request, Response } from "express";
import userRouter from "./Router/users";

// Importa o roteador de clientes, responsável pelas rotas relacionadas a clientes
import clientsRouter from "./Router/clients";
import db from "./db";
import usersModel from "./Model/usersModel";
import { APP_MESSAGES } from "./constants/messages.app";

// Cria uma instância da aplicação Express
const app = express();

// Define o mecanismo de visualização como Pug para renderizar páginas dinâmicas
app.set("view engine", "pug");

// Define o diretório onde estão os arquivos de views/templates
app.set("views", "./Views");
app.use(express.urlencoded({ extended: true }));

// Usa o roteador de usuários para a tela inicial e o de clientes para o CRUD
app.use(userRouter);
app.use(clientsRouter);

// Captura erros não tratados nas rotas
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error("Erro nao tratado na rota", req.method, req.originalUrl, error);
  if (res.headersSent) {
    next(error);
    return;
  }

  res.status(500).send(APP_MESSAGES.internalServerError);
});

db.authenticate()
  .then(() => {
    console.log("Conexao com o banco validada.");
  })
  .then(() => db.sync())
  .then(() => {
    console.log("Banco de dados sincronizado: " + process.env.DB_NAME);
  })
  .then(async () => {
    const totalUsers = await usersModel.count();
    if (totalUsers === 0) {
      await usersModel.create({ user: "admin", password: "1234" });
      console.log("Usuario padrao criado: admin / 1234");
    }
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    });
  })
  .catch((error) => {
    console.error("Erro ao iniciar a aplicacao:", error);
  });
