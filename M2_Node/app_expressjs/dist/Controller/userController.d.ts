import { Request, Response } from "express";
type LoginBody = {
    user?: string;
    password?: string;
};
declare function login(req: Request, res: Response): void;
declare function checkLogin(req: Request<{}, {}, LoginBody>, res: Response): Promise<void>;
declare function listUsers(req: Request, res: Response): Promise<void>;
declare const _default: {
    login: typeof login;
    checkLogin: typeof checkLogin;
    listUsers: typeof listUsers;
};
export default _default;
//# sourceMappingURL=userController.d.ts.map