import { clientDTO_2 } from "../../../client/dtos/ICreateClientDTO";
import { ClientsRepositoryInMemory } from "../../../client/repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../../client/useCases/createClient/CreateClientUseCase";
import { AuthenticateUseCase } from "../../useCases/authenticate/AuthenticateUseCase";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;
let authenticateUseCase: AuthenticateUseCase;
let client = clientDTO_2;

describe("Authenticate", () => {

    beforeEach(async () => {
        clientsRepositoryInMemory = new ClientsRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
        authenticateUseCase = new AuthenticateUseCase(clientsRepositoryInMemory);

        await createClientUseCase.execute(client);
    });

    it("should be able authenticate client", async () => {
        const authentication = await authenticateUseCase.execute(client);
        expect(authentication).toHaveProperty("token");
    });
});