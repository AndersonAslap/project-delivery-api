import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const createClientUseCase = container.resolve(CreateClientUseCase);

        const client = await createClientUseCase.execute({ username, password });

        return response.json(client);
    }
}

export { CreateClientController };