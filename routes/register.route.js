import { Router } from 'express'
import { getRegisters, addRegister } from '../models/register.js'

const router = Router()

router.get('/', async (req, res) => {
  const registers = await getRegisters()
  res.json(registers)
})

router.post('/', async (req, res) => {
  const { username, userEdge, responses } = req.body
  const response = addRegister({ username, userEdge, responses })
  if (response.error) {
    return res.status(400).json(response.error)
  }
  res.status(201).json(response)
})

export default router