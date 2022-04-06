import { deliveriesRepository } from "../../../../../database/prismaClient";
import { IDeliveriesRepository } from "../../../repositories/IDeliveriesRepository";
import { Delivery } from "../entities/Delivery";

class DeliveriesRepository implements IDeliveriesRepository {

    private repository = deliveriesRepository;

    async create(data: ICreateDeliveryDTO): Promise<Delivery> {
        const delivery = await this.repository.create({
            data
        });

        return delivery;
    }

}

export { DeliveriesRepository };