import { Book } from "../models/bookModel.js"
import { User } from "../models/userModel.js"
import { generateToken, generateRefreshToken } from "../utils/Jwt/jwt.js"
import ErrorResponse from "../utils/errorResponse.js"

const login = async (req, res, next) => {
    try {

        const { gmail, password } = req.body
        console.log(req.body)
        const identity = 'user'
        const user = await User.findOne({ email: gmail })
        console.log(user)
        if (user.blocked) {
            return next(new ErrorResponse('User is blocked', 403));
        }
        if (!user) {
            return next(new ErrorResponse('User not found', 404));
        }
        const match = await user.matchPasswords(password)

        if (!match) {
            return next(new ErrorResponse('Invalid password', 401));
        }
        console.log(user)
        const token = generateToken(res, user._id, identity)
        console.log(token)
        generateRefreshToken(res, user._id, identity)
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }

}
const register = async (req, res, next) => {
    try {

        console.log(req.body)
        const user = await User.findOne({ email: req.body.gmail })
        console.log(user)
        if (user) {
            return next(new ErrorResponse('User alreay exist', 409));
        }

        const data = {
            name: req.body.name,
            email: req.body.gmail,
            phone: req.body.phone,
            password: req.body.password
        }
        console.log(data)

        const result = await User.create(data)
        console.log(result)
        res.status(201).json(result)
    } catch (error) {
        console.log(error)

    }
}
const getAllBooks = async (req, res, next) => {

    try {

        const data = await Book.find({ borrowed: false })
        res.status(200).json(data)
        

    } catch (error) {
        next(error)

    }
}




export {
    login,
    register,
    getAllBooks,
}              