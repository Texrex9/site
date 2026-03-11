// Importa os tipos Request e Response do Express para tipagem das funções
import { Request, Response } from "express";
import clientsModel from "../Model/clientsModel";
import { CLIENT_MESSAGES } from "../constants/messages.clients";

async function index(req: Request, res: Response) {
  try {
    const clients = await clientsModel.findAll();
    const message =
      typeof req.query.message === "string" ? req.query.message : undefined;
    return res.render("index", { clients, message, error: undefined });
  } catch (error) {
    console.error("Erro em clients.index:", error);
    return res.status(500).render("index", {
      clients: [],
      message: undefined,
      error: CLIENT_MESSAGES.internalError,
    });
  }
}

async function show(req: Request<{ id: string }>, res: Response) {
  try {
    const client = await clientsModel.findByPk(req.params.id);
    if (!client) {
      return res.status(404).send(CLIENT_MESSAGES.notFound);
    }

    return res.json(client);
  } catch (error) {
    console.error("Erro em clients.show:", error);
    return res.status(500).json({ error: CLIENT_MESSAGES.internalError });
  }
}

async function create(req: Request, res: Response) {
  try {
    return res.render("create", {
      error: undefined,
      formData: { name: "", email: "" },
    });
  } catch (error) {
    console.error("Erro em clients.create:", error);
    return res.status(500).render("create", {
      error: CLIENT_MESSAGES.internalError,
      formData: { name: "", email: "" },
    });
  }
}

async function edit(req: Request<{ id: string }>, res: Response) {
  try {
    const client = await clientsModel.findByPk(req.params.id);
    if (!client) {
      return res.status(404).send(CLIENT_MESSAGES.notFound);
    }

    return res.render("edit", { client, error: undefined });
  } catch (error) {
    console.error("Erro em clients.edit:", error);
    return res.status(500).render("edit", {
      client: {
        id: req.params.id,
        name: "",
        email: "",
      },
      error: CLIENT_MESSAGES.internalError,
    });
  }
}

async function store(req: Request, res: Response): Promise<void> {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).render("create", {
        error: CLIENT_MESSAGES.requiredNameEmail,
        formData: {
          name: typeof name === "string" ? name : "",
          email: typeof email === "string" ? email : "",
        },
      });
      return;
    }

    await clientsModel.create({ name, email });
    const message = encodeURIComponent(CLIENT_MESSAGES.createdSuccess);
    res.redirect(`/clientes?message=${message}`);
  } catch (error) {
    console.error("Erro em clients.store:", error);
    const { name, email } = req.body;
    res.status(500).render("create", {
      error: CLIENT_MESSAGES.internalError,
      formData: {
        name: typeof name === "string" ? name : "",
        email: typeof email === "string" ? email : "",
      },
    });
  }
}

async function update(
  req: Request<{ id: string }>,
  res: Response,
): Promise<void> {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      res.status(400).render("edit", {
        error: CLIENT_MESSAGES.requiredNameEmail,
        client: {
          id: req.params.id,
          name: typeof name === "string" ? name : "",
          email: typeof email === "string" ? email : "",
        },
      });
      return;
    }

    const [updatedCount] = await clientsModel.update(
      { name, email },
      { where: { id: req.params.id } },
    );

    if (updatedCount === 0) {
      res.status(404).send(CLIENT_MESSAGES.notFound);
      return;
    }

    const message = encodeURIComponent(CLIENT_MESSAGES.updatedSuccess);
    res.redirect(`/clientes?message=${message}`);
  } catch (error) {
    console.error("Erro em clients.update:", error);
    const { name, email } = req.body;
    res.status(500).render("edit", {
      error: CLIENT_MESSAGES.internalError,
      client: {
        id: req.params.id,
        name: typeof name === "string" ? name : "",
        email: typeof email === "string" ? email : "",
      },
    });
  }
}

async function deleteClient(
  req: Request<{ id: string }>,
  res: Response,
): Promise<Response> {
  try {
    const deletedCount = await clientsModel.destroy({
      where: { id: req.params.id },
    });
    if (deletedCount === 0) {
      return res.status(404).json({ error: CLIENT_MESSAGES.notFound });
    }

    return res.status(200).json({ message: CLIENT_MESSAGES.deletedSuccess });
  } catch (error) {
    console.error("Erro em clients.delete:", error);
    return res.status(500).json({ error: CLIENT_MESSAGES.internalError });
  }
}

export default {
  index,
  show,
  create,
  store,
  edit,
  update,
  delete: deleteClient,
};
