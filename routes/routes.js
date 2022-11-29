import express from 'express'
import { addTask } from '../controllers/addTask.js'
import { addTitle } from '../controllers/addTitle.js'
import { createUser } from '../controllers/createUser.js'
import { deleteTask } from '../controllers/deleteTask.js'
import { deleteTitle } from '../controllers/deleteTitle.js'
import { deleteUser } from '../controllers/deleteUser.js'
import { editTask } from '../controllers/editTask.js'
import { editTitle } from '../controllers/editTitle.js'
import { editUser } from '../controllers/editUser.js'
import { findAllUser } from '../controllers/findAllUser.js'
import { findUser } from '../controllers/findUser.js'
import { home } from '../controllers/home.js'
const router = express.Router()

router.get('/', home)
router.post('/createUser', createUser)
router.put('/addTitle/:id', addTitle)
router.put('/addTask/:id/:titleId', addTask)
router.delete('/deleteTask/:id/:titleId/:index', deleteTask)
router.delete('/deleteTitle/:id/:titleId', deleteTitle)
router.delete('/deleteUser/:id', deleteUser)
router.put('/editTask/:id/:titleId/:index', editTask)
router.put('/editTitle/:id/:titleId/', editTitle)
router.put('/editUser/:id/', editUser)
router.get('/findAllUser', findAllUser)
router.get('/findUser/:id', findUser)

export default router