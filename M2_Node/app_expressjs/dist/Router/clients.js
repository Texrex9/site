"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o Router do Express para criar rotas separadas
const express_1 = require("express");
// Importa o controller responsável pelas ações das rotas
const clientsController_1 = __importDefault(require("../Controller/clientsController"));
// Cria uma instância do roteador
const router = (0, express_1.Router)();
// Rota principal de clientes
router.get("/clientes", clientsController_1.default.index);
// rotas fixas primeiro
router.get("/clientes/create", clientsController_1.default.create);
router.post("/clientes/create", clientsController_1.default.store);
// aceita o formato antigo e o formato padronizado para editar
router.get("/clientes/edit/:id", clientsController_1.default.edit);
router.post("/clientes/edit/:id", clientsController_1.default.update);
router.get("/clientes/:id/edit", clientsController_1.default.edit);
router.post("/clientes/:id/edit", clientsController_1.default.update);
// rota dinâmica por último
router.get("/clientes/:id", clientsController_1.default.show);
// Exporta o roteador para ser usado na aplicação principal
exports.default = router;
//# sourceMappingURL=clients.js.map