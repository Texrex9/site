// Importa o Router do Express para criar rotas separadas
import { Router } from "express";

// Importa o controller responsável pelas ações das rotas
import clientsController from "../Controller/clientsController";

// Cria uma instância do roteador
const router = Router();

// Rota principal de clientes
router.get("/clientes", clientsController.index);

// rotas fixas primeiro
router.get("/clientes/create", clientsController.create);
router.post("/clientes/create", clientsController.store);

// aceita o formato antigo e o formato padronizado para editar
router.get("/clientes/edit/:id", clientsController.edit);
router.post("/clientes/edit/:id", clientsController.update);

router.get("/clientes/:id/edit", clientsController.edit);
router.post("/clientes/:id/edit", clientsController.update);

// rota dinâmica por último
router.get("/clientes/:id", clientsController.show);

// Exporta o roteador para ser usado na aplicação principal
export default router;
