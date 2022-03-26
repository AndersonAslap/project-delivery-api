import { container } from "tsyringe";

import { ClientsRepository } from "../../modules/client/infra/prismaorm/repositories/ClientsRepository";
import { IClientsRepository } from "../../modules/client/repositories/IClientsRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);
