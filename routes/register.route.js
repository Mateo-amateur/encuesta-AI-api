import { Router } from 'express'
import { getRegisters } from '../models/register.js'

const router = Router()

router.get('/', async (req, res) => {
  const registers = await getRegisters()
  res.json(registers)
})

export default router