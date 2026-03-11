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
const usersModel_1 = __importDefault(require("../Model/usersModel"));
const messages_auth_1 = require("../constants/messages.auth");
function login(req, res) {
    return res.render("login", { error: undefined });
}
function checkLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user, password } = req.body;
            if (!user || !password) {
                res
                    .status(400)
                    .render("login", { error: messages_auth_1.AUTH_MESSAGES.requiredCredentials });
                return;
            }
            const logado = yield usersModel_1.default.findOne({
                where: { user, password },
            });
            if (logado != null) {
                res.redirect("/usuarios");
            }
            else {
                res
                    .status(401)
                    .render("login", { error: messages_auth_1.AUTH_MESSAGES.invalidCredentials });
            }
        }
        catch (error) {
            console.error("Erro em checkLogin:", error);
            res
                .status(500)
                .render("login", { error: messages_auth_1.AUTH_MESSAGES.loginInternalError });
        }
    });
}
function listUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield usersModel_1.default.findAll({
                attributes: ["id", "user", "password", "createdAt"],
                order: [["id", "ASC"]],
            });
            res.render("users", { users, error: undefined });
        }
        catch (error) {
            console.error("Erro em listUsers:", error);
            res.status(500).render("users", {
                users: [],
                error: messages_auth_1.AUTH_MESSAGES.usersListError,
            });
        }
    });
}
exports.default = { login, checkLogin, listUsers };
//# sourceMappingURL=userController.js.map