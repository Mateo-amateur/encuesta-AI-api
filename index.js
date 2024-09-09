import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'

export const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/register', router)

if (process.env.ENT === 'Production') {
  app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}