import { clientDTO } from "../../../clients/dtos/ICreateClientDTO";
import { Client } from "../../../clients/infra/prismaorm/entities/Client";
import { ClientsRepositoryInMemory } from "../../../clients/repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../../clients/useCases/createClient/CreateClientUseCase";
import { DeliveriesRepositoryInMemory } from "../../repositories/in-memory/DeliveriesRepositoryInMemory";
import { CreateDeliveryUseCase } from "../../useCases/createDelivery/CreateDeliveryUseCase";

let clientRepositoryInMemory: ClientsRepositoryInMemory;
let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;
let createDeliveryUseCase: CreateDeliveryUseCase;
let client: Client;

describe("Create Delivery Use Case", () => {
    beforeEach(async () => {
        clientRepositoryInMemory = new ClientsRepositoryInMemory();
        deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientRepositoryInMemory);
        createDeliveryUseCase = new CreateDeliveryUseCase(deliveriesRepositoryInMemory);

        client = await createClientUseCase.execute(clientDTO);
    });

    it("should be able create a new delivery", async () => {
        const delivery = await createDeliveryUseCase.execute({ id_client: client.id, item_name: 'Pizza' });
        expect(delivery).toHaveProperty("id");
    });
});