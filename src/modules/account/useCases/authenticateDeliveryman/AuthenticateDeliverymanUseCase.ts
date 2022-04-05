import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../shared/error/AppError";
import { IDeliverymansRepository } from "../../../deliverymans/repositories/IDeliverymansRepository";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    token: string;
}

@injectable()
class AuthenticateDeliverymanUseCase {

    constructor(
        @inject("DeliverymansRepository")
        private deliverymansRepository: IDeliverymansRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<IResponse> {
        const deliveryman = await this.deliverymansRepository.findByUsername(username);

        if (!deliveryman) {
            throw new AppError("Deliveryman does not exists!");
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if (!passwordMatch) {
            throw new AppError("Deliveryman does not exists!");
        }

        const token = sign({ username }, "4526a504ddc1d091c598fcd0efce20f8", {
            subject: deliveryman.id,
            expiresIn: "1d"
        });

        return { token };

    }
}

export { AuthenticateDeliverymanUseCase };