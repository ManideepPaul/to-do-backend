import express from 'express'
import { createUser } from '../controllers/createUser.js'
import { home } from '../controllers/home.js'
const router = express.Router()

router.get('/', home)
router.post('/createUser', createUser)

export default router