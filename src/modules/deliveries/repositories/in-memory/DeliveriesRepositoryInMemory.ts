import { Delivery } from "../../infra/prismaorm/entities/Delivery";
import { IDeliveriesRepository } from "../IDeliveriesRepository";

class DeliveriesRepositoryInMemory implements IDeliveriesRepository {

    private repository: Delivery[] = [];

    async create(data: ICreateDeliveryDTO): Promise<Delivery> {
        const delivery = new Delivery();

        Object.assign(delivery, {
            ...data,
            created_at: new Date()
        });

        this.repository.push(delivery);

        return delivery;
    }

}

export { DeliveriesRepositoryInMemory };