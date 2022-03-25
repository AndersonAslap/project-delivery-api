import { v4 as uuidv4 } from "uuid";

import { Client } from "../../infra/prismaorm/entities/Client";
import { IClientRepository } from "../IClientRepository";

class ClientRepositoryInMemory implements IClientRepository {
  private clients: Client[] = [];

  async create(username: string, password: string): Promise<Client> {
    const client = new Client(username, password);
    client.id = uuidv4();

    this.clients.push(client);

    return client;
  }
}

export { ClientRepositoryInMemory };
