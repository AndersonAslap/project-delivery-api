import { ICreateClientDTO } from "../dtos/ICreateClientDTO";
import { Client } from "../infra/prismaorm/entities/Client";

interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>;
  findByUsername(username: string): Promise<Client>;
}

export { IClientsRepository };
