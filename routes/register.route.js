import { Router } from 'express'
import { getRegisters, addRegister } from '../models/register.js'
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
    const response = addRegister({ data })
    if (response.error) {
      return res.status(400).json(response.error)
    }
    res.status(201).json(response)
  } else return res.status(404).json(validation.error)
})

export default router