import { Router } from "express";
import { AuthenticateDeliverymanController } from "../../../../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "../../../../modules/deliveryman/useCases/CreateDeliverymanController";

const deliverymanRoutes = Router();

const createDeliveryController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

deliverymanRoutes.post("/", createDeliveryController.handle);
deliverymanRoutes.post("/auth", authenticateDeliverymanController.handle);

export { deliverymanRoutes };