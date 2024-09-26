import router from "./routes/register.route.js"
import express from 'express'
import morgan from 'morgan'
import { corsMiddleware } from "./middleware.js"

export const app = express()

const PORT = process.env.PORT || 3000

app.use(corsMiddleware())

app.use(express.json())

app.use(morgan('dev'))

app.use('/register', router)

app.get("/", (req, res) => {
  res.send("Express on Vercel")
})

app.use((req, res, next) => {
  res.status(404).json({ error: 'Página no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app