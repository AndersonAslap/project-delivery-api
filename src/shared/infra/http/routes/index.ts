import { Router } from "express";
import { clientsRoutes } from "./client.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);

export { routes };