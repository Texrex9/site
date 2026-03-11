// Importa os tipos Request e Response do Express para tipagem das funções
import { Request, Response } from "express";
import usersModel from "../Model/usersModel";
import { AUTH_MESSAGES } from "../constants/messages.auth";

type LoginBody = {
  user?: string;
  password?: string;
};

function login(req: Request, res: Response) {
  return res.render("login", { error: undefined });
}

async function checkLogin(
  req: Request<{}, {}, LoginBody>,
  res: Response,
): Promise<void> {
  try {
    const { user, password } = req.body;

    if (!user || !password) {
      res
        .status(400)
        .render("login", { error: AUTH_MESSAGES.requiredCredentials });
      return;
    }

    const logado = await usersModel.findOne({
      where: { user, password },
    });

    if (logado != null) {
      res.redirect("/usuarios");
    } else {
      res
        .status(401)
        .render("login", { error: AUTH_MESSAGES.invalidCredentials });
    }
  } catch (error) {
    console.error("Erro em checkLogin:", error);
    res
      .status(500)
      .render("login", { error: AUTH_MESSAGES.loginInternalError });
  }
}

async function listUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await usersModel.findAll({
      attributes: ["id", "user", "password", "createdAt"],
      order: [["id", "ASC"]],
    });

    res.render("users", { users, error: undefined });
  } catch (error) {
    console.error("Erro em listUsers:", error);
    res.status(500).render("users", {
      users: [],
      error: AUTH_MESSAGES.usersListError,
    });
  }
}

export default { login, checkLogin, listUsers };
