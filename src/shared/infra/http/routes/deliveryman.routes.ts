import { Router } from "express";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/CreateDeliverymanController";

const deliverymanRoutes = Router();

const createDeliveryController = new CreateDeliverymanController();

deliverymanRoutes.post("/", createDeliveryController.handle);

export { deliverymanRoutes };