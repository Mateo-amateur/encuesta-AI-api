import cors from 'cors'

export const corsMiddleware = () => cors({
  origin: (origin, callback) => {
    // ! Remove this line after the debug
    const ACCEPTED_ORIGINS = [
      'https://encuesta-ai-ui-996a.vercel.app',
      'http://localhost:5173'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})