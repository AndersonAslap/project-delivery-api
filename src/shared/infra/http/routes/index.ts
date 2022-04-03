import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { clientsRoutes } from "./client.routes";

const routes = Router();

routes.use("/clients", clientsRoutes);
routes.use("/auth", authRoutes);

export { routes };