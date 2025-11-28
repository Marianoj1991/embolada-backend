import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    activo: {
      type: Boolean, default: true
    }
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema)

export default Message