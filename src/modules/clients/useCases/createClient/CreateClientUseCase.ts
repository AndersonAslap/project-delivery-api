import { inject, injectable } from "tsyringe";

import { Client } from "../../infra/prismaorm/entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { hash } from "bcrypt";
import { AppError } from "../../../../shared/error/AppError";

@injectable()
class CreateClientUseCase {

  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) { }

  async execute({ username, password }: ICreateClientDTO): Promise<Client> {
    const clientAlreadyExist = await this.clientsRepository.findByUsername(username);

    if (clientAlreadyExist) {
      throw new AppError("Client Already Exists!", 400);
    }

    const hashPassword = await hash(password, 10);

    const client = await this.clientsRepository.create({ username, password: hashPassword });

    return client;
  }
}

export { CreateClientUseCase };
