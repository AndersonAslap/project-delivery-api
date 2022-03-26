import { ICreateClientDTO } from "../../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";
import { Client } from "../entities/Client";

class ClientsRepository implements IClientsRepository {
  async create(data: ICreateClientDTO): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}

export { ClientsRepository };
