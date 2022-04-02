import { clientDTO } from "../../../client/dtos/ICreateClientDTO";
import { ClientsRepositoryInMemory } from "../../../client/repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../../client/useCases/createClient/CreateClientUseCase";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;
let authenticateUseCase: AuthenticateUseCase;
let client = clientDTO;

describe("Authenticate", () => {

    beforeEach(async () => {
        clientsRepositoryInMemory = new ClientsRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
        authenticateUseCase = new authenticateUseCase(clientsRepositoryInMemory);

        await createClientUseCase.execute({ username: client.username, password: client.password });
    });

    it("should be able authenticate client", async () => {
        const authentication = await authenticateUseCase.execute({ username: client.username, password: client.password });

        expect(authentication).toHaveProperty("token");
    });
});