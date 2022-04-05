import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { Client } from "../../infra/prismaorm/entities/Client";
import { IClientsRepository } from "../IClientsRepository";

class ClientsRepositoryInMemory implements IClientsRepository {
  clients: Client[] = [];

  async create({ username, password }: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, { username, password });

    this.clients.push(client);

    return client;
  }

  async findByUsername(username: string): Promise<Client> {
    return this.clients.find((client) => client.username === username);
  }
}

export { ClientsRepositoryInMemory };
