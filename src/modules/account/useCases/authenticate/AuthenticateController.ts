import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

class AuthenticateController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const authenticateUseCase = container.resolve(AuthenticateUseCase);

        const token = await authenticateUseCase.execute({ username, password });

        return response.json(token);
    }
}

export { AuthenticateController };