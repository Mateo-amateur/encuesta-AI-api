import { PrismaClient } from "@prisma/client"
import { PrismaLibSQL } from "@prisma/adapter-libsql"
import { createClient } from "@libsql/client"
import dotenv from 'dotenv'

dotenv.config()

const libsql = createClient({
  url: process.env.DB_URL,
  authToken: process.env.DB_TOKEN,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

export function initializationOfDB() {
  libsql.execute(`
    CREATE TABLE IF NOT EXISTS "register" (
      "id"	INTEGER,
      "username"	TEXT,
      "userlastname"	TEXT,
      userEdge INTEGER,
      response1 INTEGER,
      response2 INTEGER,
      response3 INTEGER,
      response4 INTEGER,
      PRIMARY KEY("id" AUTOINCREMENT),
      UNIQUE("userlastname","username")
);
    `)
}

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