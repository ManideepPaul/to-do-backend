import express from 'express'
import { addTitle } from '../controllers/addTitle.js'
import { createUser } from '../controllers/createUser.js'
import { home } from '../controllers/home.js'
const router = express.Router()

router.get('/', home)
router.post('/createUser', createUser)
router.put('/addTitle/:id', addTitle)

export default router