
import { ICreateDeliverymanDTO } from "../dto/ICreateDeliverymanDTO";
import { Deliveryman } from "../infra/prismaorm/entities/Deliveryman";

interface IDeliverymansRepository {
    create(data: ICreateDeliverymanDTO): Promise<Deliveryman>;
    findByUsername(username: string): Promise<Deliveryman>;
}

export { IDeliverymansRepository };