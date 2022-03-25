import { Client } from "../../infra/prismaorm/entities/Client";
import { IClientRepository } from "../IClientRepository";

class ClientRepositoryInMemory implements IClientRepository {
  private clients: Client[] = [];

  async create(username: string, password: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}

export { ClientRepositoryInMemory };
