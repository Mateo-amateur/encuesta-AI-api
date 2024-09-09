import { getRegisters } from '../models/register.js'

test('should to return a array', async () => {
  const registers = await getRegisters()
  expect(Array.isArray(registers)).toBe(true)
})