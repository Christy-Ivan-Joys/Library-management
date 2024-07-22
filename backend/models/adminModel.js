import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


const adminModel = mongoose.Schema({
    
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
})

adminModel.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

adminModel.methods.matchPasswords = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export const Admin = mongoose.model('Admin', adminModel)
