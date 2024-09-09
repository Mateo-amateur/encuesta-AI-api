import { z } from 'zod'

export const Register = z.object({
  username: z.string({ message: "Type error, must be string" }).min(3, { message: "Must be 3 or more characters long" }).max(30, { message: "Must be 30 or less characters long" }),
  userEdge: z.number().gte(1).lte(100).nonnegative(),
  response1: z.number().gte(1).lte(7).nonnegative(),
  response2: z.number().gte(1).lte(3).nonnegative(),
  response3: z.number().gte(1).lte(5).nonnegative(),
  response4: z.number().gte(1).lte(6).nonnegative()
})