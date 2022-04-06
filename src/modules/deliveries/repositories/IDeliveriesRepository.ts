import { Delivery } from "../infra/prismaorm/entities/Delivery";

interface IDeliveriesRepository {
    create(data: ICreateDeliveryDTO): Promise<Delivery>;
}

export { IDeliveriesRepository };