import Message from '../models/message.model.js'

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({activo: true})
    return res.json({
      status: 'success',
      data: [...messages]
    })
  } catch (error) {
    console.log('ERROR IN GETMESSAGES: ', error)
    return res.json({
      status: 'failed',
      data: error
    })
  }
}

// Obtener un mensaje por ID
export const getMessagesById = async (req, res) => {
  try {
    const { id } = req.params
    const message = await Message.findById(id)
    if (!message) {
      return res.json({ status: 'failed', data: 'Message not found' })
    }
    return res.json({ status: 'success', data: message })
  } catch (error) {
    console.log('ERROR IN GETMESSAGEBYID: ', error)
    return res.status(404).json({ status: 'failed', data: error })
  }
}

// Crear un nuevo mensaje
export const addMessages = async (req, res) => {
  try {
    const { text } = req.body
    const newMessage = new Message({ text })
    await newMessage.save()
    return res.json({ status: 'success', data: newMessage })
  } catch (error) {
    console.log('ERROR IN ADDMESSAGES: ', error)
    return res.json({ status: 'failed', data: error })
  }
}

// Actualizar un mensaje existente
export const updateMessages = async (req, res) => {
  try {
    const { id } = req.params
    const { text } = req.body
    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { text },
      { new: true }
    )
    if (!updatedMessage) {
      return res.json({ status: 'failed', data: 'Message not found' })
    }
    return res.json({ status: 'success', data: updatedMessage })
  } catch (error) {
    console.log('ERROR IN UPDATEMESSAGES: ', error)
    return res.json({ status: 'failed', data: error })
  }
}

// Eliminar un mensaje
export const deleteMessages = async (req, res) => {
  try {
    const { id } = req.params
    const deletedMessage = await Message.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    )
    if (!deletedMessage) {
      return res.json({ status: 'failed', data: 'Message not found' })
    }
    return res.json({ status: 'success', data: deletedMessage })
  } catch (error) {
    console.log('ERROR IN DELETEMESSAGES: ', error)
    return res.json({ status: 'failed', data: error })
  }
}
