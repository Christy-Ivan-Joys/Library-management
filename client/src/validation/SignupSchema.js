import {z} from 'zod'
const invalidTypeError ='Invalid type'
const requiredError = 'Required'
export const SignupSchema= z.object({
    name:z
    .string()
    .min(1,{message:'Enter a valid name'}),
    gmail:z
    .string()
    .min(1,{message:'Enter gmail to continue'})
    .email({message:'Enter a valid gmail'}),
    phone:z
    .string()
    .min(10,{message:'Phone number must contain 10 digits'})
    .regex(
        /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,

        {message:'Enter a valid number'}
    ),
    password:z
    .string()
    .min(8,{message:'password must be atleast 8 characters'})
    .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {message:'Enter a secure password'}
    )
}) 
