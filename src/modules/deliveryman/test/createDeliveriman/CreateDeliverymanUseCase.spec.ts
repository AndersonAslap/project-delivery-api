import { deliverymanDTO } from "../../dto/ICreateDeliverymanDTO";
import { DeliverymansRepositoryInMemory } from "../../repositories/in-memory/DeliverymansRepositoryInMemory";
import { CreateDeliverymanUseCase } from "../../useCases/CreateDeliverymanUseCase";

let deliverymansRepositoryInMemory: DeliverymansRepositoryInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe("Create Deliveryman", () => {

    beforeEach(async () => {
        deliverymansRepositoryInMemory = new DeliverymansRepositoryInMemory();
        createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymansRepositoryInMemory);
    });

    it("should be able create a new deliveryman", async () => {
        const deliveryman = await createDeliverymanUseCase.execute(deliverymanDTO);
        expect(deliveryman).toHaveProperty("id");
    });

});