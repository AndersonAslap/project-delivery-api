import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

class CreateDeliveryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id_client, item_name } = request.body;
        const createDeliveryUseCase = container.resolve(CreateDeliveryUseCase);
        const delivery = await createDeliveryUseCase.execute({ id_client, item_name });

        return response.json(delivery);
    }
}

export { CreateDeliveryController };