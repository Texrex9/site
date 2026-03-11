import { Request, Response } from "express";
declare function index(req: Request, res: Response): Promise<void>;
declare function show(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>>>;
declare function create(req: Request, res: Response): Promise<void>;
declare function edit(req: Request<{
    id: string;
}>, res: Response): Promise<void | Response<any, Record<string, any>>>;
declare function store(req: Request, res: Response): Promise<void>;
declare function update(req: Request<{
    id: string;
}>, res: Response): Promise<void>;
declare function deleteClient(req: Request<{
    id: string;
}>, res: Response): Promise<Response>;
declare const _default: {
    index: typeof index;
    show: typeof show;
    create: typeof create;
    store: typeof store;
    edit: typeof edit;
    update: typeof update;
    delete: typeof deleteClient;
};
export default _default;
//# sourceMappingURL=clientsController.d.ts.map