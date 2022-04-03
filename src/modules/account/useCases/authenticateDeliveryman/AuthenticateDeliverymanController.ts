import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

class AuthenticateDeliverymanController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const authenticateDeliverymanUseCase = container.resolve(AuthenticateDeliverymanUseCase);

        const token = await authenticateDeliverymanUseCase.execute({ username, password });

        return response.json(token);
    }
}

export { }