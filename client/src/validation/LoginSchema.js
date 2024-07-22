import {z} from 'zod'


const invalidTypeError  = 'Invalid type'
const requiredError= 'Required';

export const LoginSchema= z.object({
     gmail:z
     .string()
     .min(1,{message:'Enter gmail to continue'})
     .email({message:'Enter a valid gmail'}),
     password:z
     .string()
     .min(6, { message: 'Password must be at least 6 characters long' })
     .regex(
       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
       { message: 'Enter a valid password' }
     )
})  