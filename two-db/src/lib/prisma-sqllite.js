import { PrismaClient } from "@prisma-sqllite/prisma/client";
const globalForPrisma_SQLITE = global;
export const prismaSQLite = globalForPrisma_SQLITE.prisma ||
    new PrismaClient({
        log: ["query"],
    });