import { Router } from "express";
import { authRoutes } from "./auth.routes";
import { clientsRoutes } from "./client.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const routes = Router();

routes.use("/client", clientsRoutes);
routes.use("/auth", authRoutes);
routes.use("/deliveryman", deliverymanRoutes);

export { routes };