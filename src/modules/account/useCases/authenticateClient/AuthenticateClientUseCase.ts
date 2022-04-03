import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/error/AppError";
import { IClientsRepository } from "../../../clients/repositories/IClientsRepository";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    token: string;
}

@injectable()
class AuthenticateClientUseCase {

    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<IResponse> {

        const client = await this.clientsRepository.findByUsername(username);

        if (!client) {
            throw new AppError("This username or password is incorrect!");
        }

        const passwordMatch = await compare(password, client.password);

        if (!passwordMatch) {
            throw new AppError("This username or password is incorrect!");
        }

        const token = sign({ username }, "4526a504ddc1d091c598fcd0efce20f8", {
            subject: client.id,
            expiresIn: "1d"
        });

        return { token };
    }
}

export { AuthenticateClientUseCase };