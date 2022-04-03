import { Router } from "express";
import { AuthenticateClientController } from "../../../../modules/account/useCases/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "../../../../modules/client/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("/auth", authenticateClientController.handle);

export { clientsRoutes };