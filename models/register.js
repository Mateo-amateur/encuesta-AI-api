import { PrismaClient } from "@prisma/client"
import dotenv from 'dotenv'

dotenv.config()

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

export async function getUsers() {
  try {
    const users = await prisma.register.findMany({ select: { username: true, userlastname: true } })
    console.log(users);
    return users
  } catch (error) {
    console.log(error);
    return { error: 'error' }
  }
}