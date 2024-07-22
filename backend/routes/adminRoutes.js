import express from 'express'

const router = express.Router()
console.log('admin rotues')
import {
    login,
    addBook,
    getBooks,
    editBook,
    getUsers,
    borrow
} from '../controllers/adminController.js'


router.post('/Alogin', login)
router.post('/add',addBook)
router.get('/books',getBooks)
router.patch('/edit',editBook)
router.get('/users',getUsers)
router.post('/borrow',borrow)


export default router                