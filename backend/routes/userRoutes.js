import express from "express";

const router = express.Router()
console.log('user rotues')
import {
    login,
    register,
    getAllBooks
} from '../controllers/userController.js'

router.post('/login', login)
router.post('/register',register)
router.get('/books',getAllBooks)

export default router