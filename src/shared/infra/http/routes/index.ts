import { Router } from "express";
import { clientsRoutes } from "./client.routes";
import { deliverymanRoutes } from "./deliveryman.routes";

const routes = Router();

routes.use("/client", clientsRoutes);
routes.use("/deliveryman", deliverymanRoutes);

export { routes };