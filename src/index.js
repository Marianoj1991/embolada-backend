import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { connectDB } from './lib/db.connection.js'

// Routes
import messageRoutes from './routes/message.route.js'

process.loadEnvFile()

const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  })
)

app.use('/api/messages', messageRoutes)

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}. Press ctrl + C to terminate`);
  await connectDB()
})  