import { Client } from "../infra/prismaorm/entities/Client";

interface IClientRepository {
  create(username: string, password: string): Promise<Client>;
}

export { IClientRepository };
