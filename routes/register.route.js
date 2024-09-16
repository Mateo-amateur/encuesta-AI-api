import { Router } from 'express'
import { getRegisters, addRegister, getUsers } from '../models/register.js'
import { Register } from '../schemas/register.schema.js'

const router = Router()

router.get('/', async (req, res) => {
  const registers = await getRegisters()
  res.json(registers)
})

router.post('/', async (req, res) => {
  const { username, userlastname, userEdge, responses } = req.body
  const { response1, response2, response3, response4 } = responses
  const data = { username, userlastname, userEdge, response1, response2, response3, response4 }
  const validation = Register.safeParse(data)
  if (validation.success) {
    const response = await addRegister({ data })
    if (response.error) {
      return res.status(400).json(response.error)
    }

    res.status(201).json(response)
  } else return res.status(404).json(validation.error)
})

router.get('/users', async (req, res) => {
  try {
    const users = await getUsers()
    console.log(users);

    return res.status(200).json(users)
  } catch (error) {
    console.log(error);

    return res.status(404).json({ error: 'Error getting users\'s data' })
  }
})

export default router