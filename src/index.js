import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.connection.js'

// Routes
import messageRoutes from './routes/message.route.js'

if(process.env.NODE_ENV !== 'production') {
  process.loadEnvFile()
}

const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://embolada-project.netlify.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

app.use('/api/messages', messageRoutes)

app.listen(PORT, async () => {
  try {
    await connectDB()
    console.log(`Server running on port ${PORT}`)
  } catch (err) {
    console.error('DB connection failed:', err)
  }

})  