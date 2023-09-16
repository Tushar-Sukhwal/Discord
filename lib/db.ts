import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined 
}


//to avoid multiple instances of Prisma Client in development (hot reloading)
export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db