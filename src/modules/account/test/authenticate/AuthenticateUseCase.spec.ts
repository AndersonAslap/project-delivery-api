import { clientDTO_2 } from "../../../client/dtos/ICreateClientDTO";
import { ClientsRepositoryInMemory } from "../../../client/repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../../client/useCases/createClient/CreateClientUseCase";
import { AuthenticateClientUseCase } from "../../useCases/authenticateClient/AuthenticateClientUseCase";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;
let authenticateClientUseCase: AuthenticateClientUseCase;
let client = clientDTO_2;

describe("Authenticate Client", () => {

    beforeEach(async () => {
        clientsRepositoryInMemory = new ClientsRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
        authenticateClientUseCase = new AuthenticateClientUseCase(clientsRepositoryInMemory);

        await createClientUseCase.execute(client);
    });

    it("should be able authenticate client", async () => {
        const authentication = await authenticateClientUseCase.execute(client);
        expect(authentication).toHaveProperty("token");
    });
});