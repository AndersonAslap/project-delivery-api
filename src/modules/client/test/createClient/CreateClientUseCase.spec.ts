import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../useCases/createClient/CreateClientUseCase";
import { clientDTO } from "../../dtos/ICreateClientDTO";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("create-client-use-case", () => {

    beforeEach(() => {
        clientsRepositoryInMemory = new ClientsRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
    });

    it("should be able a create new client", async () => {
        const client = await createClientUseCase.execute(clientDTO);
        console.log(client);
        expect(client.username).toBe("Aslap");
    });
});