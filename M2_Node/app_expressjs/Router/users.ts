// Importa o Router do Express para criar rotas separadas
import { Router } from "express";

// Importa o controller responsável pelas ações das rotas
import userController from "../Controller/userController";

// Cria uma instância do roteador
const router = Router();

// Rota principal: chama o método index do controller
router.get("/", userController.login);
router.post("/", userController.checkLogin);
router.get("/usuarios", userController.listUsers);

export default router;
