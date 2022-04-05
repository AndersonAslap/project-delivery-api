import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/error/AppError";
import { Deliveryman } from "../infra/prismaorm/entities/Deliveryman";
import { IDeliverymansRepository } from "../repositories/IDeliverymansRepository";

interface IRequest {
    username: string;
    password: string;
}

@injectable()
class CreateDeliverymanUseCase {

    constructor(
        @inject("DeliverymansRepository")
        private deliverymansRepository: IDeliverymansRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<Deliveryman> {

        const deliverymanAlreadyExists = await this.deliverymansRepository.findByUsername(username);

        if (deliverymanAlreadyExists) {
            throw new AppError("Deliveryman already exists!");
        }

        const hashPassword = await hash(password, 10);

        const deliveryman = await this.deliverymansRepository.create({ username, password: hashPassword });

        return deliveryman;
    }
}

export { CreateDeliverymanUseCase };