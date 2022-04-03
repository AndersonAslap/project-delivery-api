import { Deliveryman } from ".prisma/client";
import { ICreateDeliverymanDTO } from "../dto/ICreateDeliverymanDTO";

interface IDeliverymansRepository {
    create(data: ICreateDeliverymanDTO): Promise<Deliveryman>;
}

export { IDeliverymansRepository };