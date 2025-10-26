import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const db = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db


// It prevents Prisma from creating a new database connection every time your app reloads, especially in environments like Next.js where code can re-run often.


// const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
// In this line, globalThis is being cast in TypeScript with as unknown as { prisma: PrismaClient }.

// as unknown first casts the globalThis object to an unknown type to bypass default type restrictions.

// Then as { prisma: PrismaClient } tells TypeScript "treat this global object as if it has a property named prisma of type PrismaClient."
// This is necessary because normally the global object does not have a prisma property defined and TypeScript would complain about type errors.