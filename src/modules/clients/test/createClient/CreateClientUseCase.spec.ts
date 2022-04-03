import { ClientsRepositoryInMemory } from "../../repositories/in-memory/ClientsRepositoryInMemory";
import { CreateClientUseCase } from "../../useCases/createClient/CreateClientUseCase";
import { clientDTO } from "../../dtos/ICreateClientDTO";
import { AppError } from "../../../../shared/error/AppError";

let clientsRepositoryInMemory: ClientsRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe("create-client-use-case", () => {

    beforeEach(() => {
        clientsRepositoryInMemory = new ClientsRepositoryInMemory();
        createClientUseCase = new CreateClientUseCase(clientsRepositoryInMemory);
    });

    it("should be able a create new client", async () => {
        const client = await createClientUseCase.execute(clientDTO);
        expect(client.username).toBe("Anderson");
    });

    it("should not be able create new client", () => {
        expect(async () => {
            await createClientUseCase.execute(clientDTO);
        }).rejects.toBeInstanceOf(new AppError("Client Already Exists!", 400));
    });
});