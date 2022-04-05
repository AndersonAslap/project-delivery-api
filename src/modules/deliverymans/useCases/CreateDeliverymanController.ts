import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

class CreateDeliverymanController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const createdeliverymanUseCase = container.resolve(CreateDeliverymanUseCase);

        const deliveryman = await createdeliverymanUseCase.execute({ username, password });

        return response.json(deliveryman);
    }
}

export { CreateDeliverymanController };