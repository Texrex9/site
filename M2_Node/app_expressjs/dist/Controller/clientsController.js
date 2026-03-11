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
const clientsModel_1 = __importDefault(require("../Model/clientsModel"));
const messages_clients_1 = require("../constants/messages.clients");
function index(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clients = yield clientsModel_1.default.findAll();
            const message = typeof req.query.message === "string" ? req.query.message : undefined;
            return res.render("index", { clients, message, error: undefined });
        }
        catch (error) {
            console.error("Erro em clients.index:", error);
            return res.status(500).render("index", {
                clients: [],
                message: undefined,
                error: messages_clients_1.CLIENT_MESSAGES.internalError,
            });
        }
    });
}
function show(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield clientsModel_1.default.findByPk(req.params.id);
            if (!client) {
                return res.status(404).send(messages_clients_1.CLIENT_MESSAGES.notFound);
            }
            return res.json(client);
        }
        catch (error) {
            console.error("Erro em clients.show:", error);
            return res.status(500).json({ error: messages_clients_1.CLIENT_MESSAGES.internalError });
        }
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.render("create", {
                error: undefined,
                formData: { name: "", email: "" },
            });
        }
        catch (error) {
            console.error("Erro em clients.create:", error);
            return res.status(500).render("create", {
                error: messages_clients_1.CLIENT_MESSAGES.internalError,
                formData: { name: "", email: "" },
            });
        }
    });
}
function edit(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const client = yield clientsModel_1.default.findByPk(req.params.id);
            if (!client) {
                return res.status(404).send(messages_clients_1.CLIENT_MESSAGES.notFound);
            }
            return res.render("edit", { client, error: undefined });
        }
        catch (error) {
            console.error("Erro em clients.edit:", error);
            return res.status(500).render("edit", {
                client: {
                    id: req.params.id,
                    name: "",
                    email: "",
                },
                error: messages_clients_1.CLIENT_MESSAGES.internalError,
            });
        }
    });
}
function store(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                res.status(400).render("create", {
                    error: messages_clients_1.CLIENT_MESSAGES.requiredNameEmail,
                    formData: {
                        name: typeof name === "string" ? name : "",
                        email: typeof email === "string" ? email : "",
                    },
                });
                return;
            }
            yield clientsModel_1.default.create({ name, email });
            const message = encodeURIComponent(messages_clients_1.CLIENT_MESSAGES.createdSuccess);
            res.redirect(`/clientes?message=${message}`);
        }
        catch (error) {
            console.error("Erro em clients.store:", error);
            const { name, email } = req.body;
            res.status(500).render("create", {
                error: messages_clients_1.CLIENT_MESSAGES.internalError,
                formData: {
                    name: typeof name === "string" ? name : "",
                    email: typeof email === "string" ? email : "",
                },
            });
        }
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                res.status(400).render("edit", {
                    error: messages_clients_1.CLIENT_MESSAGES.requiredNameEmail,
                    client: {
                        id: req.params.id,
                        name: typeof name === "string" ? name : "",
                        email: typeof email === "string" ? email : "",
                    },
                });
                return;
            }
            const [updatedCount] = yield clientsModel_1.default.update({ name, email }, { where: { id: req.params.id } });
            if (updatedCount === 0) {
                res.status(404).send(messages_clients_1.CLIENT_MESSAGES.notFound);
                return;
            }
            const message = encodeURIComponent(messages_clients_1.CLIENT_MESSAGES.updatedSuccess);
            res.redirect(`/clientes?message=${message}`);
        }
        catch (error) {
            console.error("Erro em clients.update:", error);
            const { name, email } = req.body;
            res.status(500).render("edit", {
                error: messages_clients_1.CLIENT_MESSAGES.internalError,
                client: {
                    id: req.params.id,
                    name: typeof name === "string" ? name : "",
                    email: typeof email === "string" ? email : "",
                },
            });
        }
    });
}
function deleteClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedCount = yield clientsModel_1.default.destroy({
                where: { id: req.params.id },
            });
            if (deletedCount === 0) {
                return res.status(404).json({ error: messages_clients_1.CLIENT_MESSAGES.notFound });
            }
            return res.status(200).json({ message: messages_clients_1.CLIENT_MESSAGES.deletedSuccess });
        }
        catch (error) {
            console.error("Erro em clients.delete:", error);
            return res.status(500).json({ error: messages_clients_1.CLIENT_MESSAGES.internalError });
        }
    });
}
exports.default = {
    index,
    show,
    create,
    store,
    edit,
    update,
    delete: deleteClient,
};
//# sourceMappingURL=clientsController.js.map