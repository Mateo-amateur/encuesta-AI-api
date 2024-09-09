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

export async function addRegister({ data }) {
  const { username, userlastname, userEdge, response1, response2, response3, response4 } = data
  try {
    const res = await prisma.register.create({ data: { username, userlastname, response1, response2, response3, response4, userEdge } })
    return res
  } catch (error) {
    console.error(error)
    return { error: 'Error to create a new register' }
  }
}