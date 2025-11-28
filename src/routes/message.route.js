import { Router } from 'express'
import {
  getMessages, getMessagesById, addMessages, updateMessages, deleteMessages
} from '../controllers/message.controller.js'

const router = Router()

router.get('/', getMessages)
router.get('/:id', getMessagesById)
router.post('/', addMessages)
router.put('/:id', updateMessages)
router.delete('/:id', deleteMessages)

export default router
