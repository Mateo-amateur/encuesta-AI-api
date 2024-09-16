import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'
import { initializationOfDB } from './models/register.js'
import { corsMiddleware } from "./middleware.js"

export const app = express()

initializationOfDB()

const PORT = process.env.PORT || 3000

app.use(corsMiddleware())

app.use(express.json())

app.use(morgan('dev'))

app.use('/register', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})