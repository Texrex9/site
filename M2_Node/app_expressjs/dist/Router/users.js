"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o Router do Express para criar rotas separadas
const express_1 = require("express");
// Importa o controller responsável pelas ações das rotas
const userController_1 = __importDefault(require("../Controller/userController"));
// Cria uma instância do roteador
const router = (0, express_1.Router)();
// Rota principal: chama o método index do controller
router.get("/", userController_1.default.login);
router.post("/", userController_1.default.checkLogin);
router.get("/usuarios", userController_1.default.listUsers);
exports.default = router;
//# sourceMappingURL=users.js.map