import { Router } from "express";
import { clientsRoutes } from "./client.routes";

const router = Router();

router.use("/clients", clientsRoutes);

export { router };