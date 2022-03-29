import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const clientsRepository = prisma.clients;
const deliverymansRepository = prisma.deliveryman;
const deliveriesRepository = prisma.deliveries;

export {
    clientsRepository,
    deliverymansRepository,
    deliveriesRepository
}