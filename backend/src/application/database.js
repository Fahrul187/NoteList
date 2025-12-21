import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from "../../generated/prisma/index.js"
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 5,
})

export const prismaClient = new PrismaClient({
    adapter,
    log: ['query', 'error', 'info', 'warn'],
})


