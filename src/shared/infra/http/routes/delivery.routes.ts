import { Router } from "express";
import { CreateDeliveryController } from "../../../../modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { ensureAuthenticateClient } from "../middlewares/ensureAutheticateClient";


const deliveryRoutes = Router();

const createDeliveryController = new CreateDeliveryController();

deliveryRoutes.post("/", ensureAuthenticateClient, createDeliveryController.handle);

export { deliveryRoutes };