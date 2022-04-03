import { Router } from "express";
import { CreateClientController } from "../../../../modules/client/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();

const authenticateController = new AuthenticateController();


clientsRoutes.post("/", createClientController.handle);
clientsRoutes.post("/auth", authenticateController.handle);

export { clientsRoutes };