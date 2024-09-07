import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getRegisters() {
  try {
    const registers = await prisma.register.findMany()
    return registers
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch registers')
  }
} 