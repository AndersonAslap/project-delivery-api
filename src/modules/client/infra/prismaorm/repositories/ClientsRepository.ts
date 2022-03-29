import { ICreateClientDTO } from "../../../dtos/ICreateClientDTO";
import { IClientsRepository } from "../../../repositories/IClientsRepository";
import { Client } from "../entities/Client";
import { clientsRepository } from "../../../../../database/prismaClient";

class ClientsRepository implements IClientsRepository {

  private repository = clientsRepository;

  async create(data: ICreateClientDTO): Promise<Client> {
    const client = await this.repository.create({ data });
    return client;
  }

  async findByUsername(username: string): Promise<Client> {
    const client = await this.repository.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    });

    return client;
  }
}

export { ClientsRepository };
