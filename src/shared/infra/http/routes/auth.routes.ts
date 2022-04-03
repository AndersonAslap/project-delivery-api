import { Router } from "express";
import { AuthenticateController } from "../../../../modules/account/useCases/authenticate/AuthenticateController";

const authRoutes = Router();

const authenticateController = new AuthenticateController();

authRoutes.post("/", authenticateController.handle);

export { authRoutes };