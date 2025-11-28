import mongoose from 'mongoose'

if (process.env.NODE_ENV !== 'production') {
  process.loadEnvFile()
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI)
      console.log(`MongoDB conectado en: ${mongoose.connection.host}`)
    }
  } catch (err) {
    console.error(`Error de conexión a MongoDB: ${err.message}`)
    process.exit(1)
  }
}
