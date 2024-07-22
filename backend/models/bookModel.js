import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const bookModel = mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    borrowed: {
        type: Boolean,
        default: false
    }

})  


export const Book = mongoose.model('Book', bookModel)
