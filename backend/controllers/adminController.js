import { User } from "../models/userModel.js"
import { generateToken, generateRefreshToken } from "../utils/Jwt/jwt.js"
import mongoose from "mongoose"
import { Book } from "../models/bookModel.js"
import ErrorResponse from "../utils/errorResponse.js"

import { Admin } from "../models/adminModel.js"

const login = async (req, res, next) => {
    try {
        const { gmail, password } = req.body
        console.log(req.body)
        const identity = 'admin'
        const user = await Admin.findOne({ email: gmail })
        console.log(user, 'admin')

        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }
        const match = await user.matchPasswords(password)
        if (!match) {
            return next(new ErrorResponse('Invalid password', 401));
        }
        console.log(match, 'match')
        const token = generateToken(res, user._id, identity)
        generateRefreshToken(res, user._id, identity)
        res.status(200).json(true)

    } catch (error) {
        console.log(error)
        next(error)
    }


}
const addBook = async (req, res, next) => {
    try {
        const title = req.body.title
        const author = req.body.author
        const find = await Book.findOne({ title: title })
        if (find) {
            return next(new ErrorResponse('Book Already Exist', 409))
        }
        const newBook = await Book.create({ title: title, author: author })
        res.status(201).json({ status: true, data: newBook })

    } catch (error) {
        console.log(error)
        next(error)

    }
}
const getBooks = async (req, res, next) => {

    try {
        const books = await Book.find()
        res.status(200).json(books)

    } catch (error) {
        next(error)
    }
}
const editBook = async (req, res, next) => {

    try {
        const id = req.body.id
        const title = req.body.title
        const author = req.body.author
        const data = await Book.findByIdAndUpdate(id, { title, author }, { new: true })
        res.status(200).json(data)

    } catch (error) {
        console.log(error)

    }
}
const getUsers = async (req, res, next) => {

    try {

        const data = await User.find()
        res.status(200).json(data)

    } catch (error) {
        next(error)
    }
}
const borrow = async(req,res,next)=>{
    try {
        
        console.log(req.body)
        
    } catch (error) {
        
    }
}


export {
    login,
    addBook,
    getBooks,
    editBook,
    getUsers,
    borrow
}