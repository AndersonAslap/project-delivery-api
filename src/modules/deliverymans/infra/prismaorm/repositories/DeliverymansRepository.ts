import { deliverymansRepository } from "../../../../../database/prismaClient";
import { ICreateDeliverymanDTO } from "../../../dto/ICreateDeliverymanDTO";
import { IDeliverymansRepository } from "../../../repositories/IDeliverymansRepository";
import { Deliveryman } from "../entities/Deliveryman";

class DeliverymansRepository implements IDeliverymansRepository {

    private repository = deliverymansRepository;

    async create(data: ICreateDeliverymanDTO): Promise<Deliveryman> {
        const deliveryman = await this.repository.create({ data });
        return deliveryman;
    }

    async findByUsername(username: string): Promise<Deliveryman> {
        const deliveryman = await this.repository.findFirst({
            where: {
                username
            }
        });

        return deliveryman;
    }

}

export { DeliverymansRepository };