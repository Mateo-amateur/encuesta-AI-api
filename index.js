import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { initializationOfDB } from './models/register.js'

export const app = express()

initializationOfDB()

const PORT = process.env.PORT || 3000

const corsMiddleware = () => cors({
  origin: (origin, callback) => {
    // ! Remove this line after the debug
    const ACCEPTED_ORIGINS = [
      'https://encuesta-ai-ui-996a.vercel.app',
      'http://localhost:5173'
    ]

    console.log(ACCEPTED_ORIGINS, origin);


    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})

app.use(corsMiddleware())

app.use(express.json())

app.use(morgan('dev'))

app.use('/register', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})