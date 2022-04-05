import { DeliverymansRepositoryInMemory } from "../../../deliverymans/repositories/in-memory/DeliverymansRepositoryInMemory";
import { CreateDeliverymanUseCase } from "../../../deliverymans/useCases/CreateDeliverymanUseCase";
import { AuthenticateDeliverymanUseCase } from "../../useCases/authenticateDeliveryman/AuthenticateDeliverymanUseCase";

let deliverymansRepositoryInMemory: DeliverymansRepositoryInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;
let authenticateDeliverymanUseCase: AuthenticateDeliverymanUseCase;

let deliverymanCredentials = { username: 'Anderson', password: '232123212' };

describe("Deliveryman Authenticate", () => {
    beforeEach(async () => {
        deliverymansRepositoryInMemory = new DeliverymansRepositoryInMemory();
        createDeliverymanUseCase = new CreateDeliverymanUseCase(deliverymansRepositoryInMemory);
        authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase(deliverymansRepositoryInMemory);

        await createDeliverymanUseCase.execute(deliverymanCredentials);
    });

    it("should be able authenticate deliveryman", async () => {
        const response = await authenticateDeliverymanUseCase.execute(deliverymanCredentials);
        expect(response).toHaveProperty("token");
    });
});