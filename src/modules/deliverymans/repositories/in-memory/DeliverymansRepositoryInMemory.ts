import { ICreateDeliverymanDTO } from "../../dto/ICreateDeliverymanDTO";
import { Deliveryman } from "../../infra/prismaorm/entities/Deliveryman";
import { IDeliverymansRepository } from "../IDeliverymansRepository";

class DeliverymansRepositoryInMemory implements IDeliverymansRepository {

    repository: Deliveryman[] = [];

    async create(data: ICreateDeliverymanDTO): Promise<Deliveryman> {
        const deliveryman = new Deliveryman();

        Object.assign(deliveryman, data);

        this.repository.push(deliveryman);

        return deliveryman;
    }

    async findByUsername(username: string): Promise<Deliveryman> {
        return this.repository.find((deliveryman) => deliveryman.username === username);
    }

}

export { DeliverymansRepositoryInMemory };