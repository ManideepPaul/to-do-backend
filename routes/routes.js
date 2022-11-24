import express from 'express'
import { addTask } from '../controllers/addTask.js'
import { addTitle } from '../controllers/addTitle.js'
import { createUser } from '../controllers/createUser.js'
import { deleteTask } from '../controllers/deleteTask.js'
import { deleteTitle } from '../controllers/deleteTitle.js'
import { home } from '../controllers/home.js'
const router = express.Router()

router.get('/', home)
router.post('/createUser', createUser)
router.put('/addTitle/:id', addTitle)
router.put('/addTask/:id/:titleId', addTask)
router.delete('/deleteTask/:id/:titleId/:index', deleteTask)
router.delete('/deleteTitle/:id/:index', deleteTitle)

export default router