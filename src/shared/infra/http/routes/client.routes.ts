import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();

clientsRoutes.post("/", createClientController.handle);

export { clientsRoutes };