import { container } from "tsyringe";

import { ClientsRepository } from "../../modules/clients/infra/prismaorm/repositories/ClientsRepository";
import { IClientsRepository } from "../../modules/clients/repositories/IClientsRepository";
import { DeliveriesRepository } from "../../modules/deliveries/infra/prismaorm/repositories/DeliveriesRepositories";
import { IDeliveriesRepository } from "../../modules/deliveries/repositories/IDeliveriesRepository";
import { DeliverymansRepository } from "../../modules/deliverymans/infra/prismaorm/repositories/DeliverymansRepository";
import { IDeliverymansRepository } from "../../modules/deliverymans/repositories/IDeliverymansRepository";

container.registerSingleton<IClientsRepository>(
  "ClientsRepository",
  ClientsRepository
);

container.registerSingleton<IDeliverymansRepository>(
  "DeliverymansRepository",
  DeliverymansRepository
);

container.registerSingleton<IDeliveriesRepository>(
  "DeliveriesRepository",
  DeliveriesRepository
);