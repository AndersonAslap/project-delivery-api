import { inject, injectable } from "tsyringe";
import { Delivery } from "../../infra/prismaorm/entities/Delivery";
import { IDeliveriesRepository } from "../../repositories/IDeliveriesRepository";

@injectable()
class CreateDeliveryUseCase {

    constructor(
        @inject("DeliveriesRepository")
        private deliveriesRepository: IDeliveriesRepository
    ) { }

    async execute({ id_client, item_name }: ICreateDeliveryDTO): Promise<Delivery> {
        const delivery = await this.deliveriesRepository.create({ id_client, item_name });
        return delivery;
    }

}

export { CreateDeliveryUseCase };