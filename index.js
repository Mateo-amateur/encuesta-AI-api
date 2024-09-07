import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/register', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})