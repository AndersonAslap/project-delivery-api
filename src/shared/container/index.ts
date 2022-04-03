import { container } from "tsyringe";

import { ClientsRepository } from "../../modules/client/infra/prismaorm/repositories/ClientsRepository";
import { IClientsRepository } from "../../modules/client/repositories/IClientsRepository";
import { DeliverymansRepository } from "../../modules/deliveryman/infra/prismaorm/repositories/DeliverymansRepository";
import { IDeliverymansRepository } from "../../modules/deliveryman/repositories/IDeliverymansRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IDeliverymansRepository>(
  "DeliverymansRepository",
  DeliverymansRepository
);