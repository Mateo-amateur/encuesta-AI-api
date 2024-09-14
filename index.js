import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const PORT = process.env.PORT || 3000

const ACCEPTED_ORIGINS = [
  'https://encuesta-ai-ui-996a.vercel.app/',
  // ! Remove this line after the debug
  'http://localhost:5173/'
]

const corsMiddleware = ({ acceptedOrigins = process.env.UI_URL ? process.env.UI_URL : ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
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