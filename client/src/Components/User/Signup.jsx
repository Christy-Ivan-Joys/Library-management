import { react, useState } from 'react'
import loginImg from '../../assets/Images/LoginImg.jpg'
import { SignupSchema } from '../../validation/SignupSchema'
import { z, ZodError } from 'zod'
import { useRegisterMutation } from '../../utils/Redux/userApiSlices'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [name, setName] = useState('')
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setNumber] = useState('')
    const [errors, setErrors] = useState({})
    const [register] = useRegisterMutation()
    const navigate = useNavigate()
    const handlesubmit = async (e) => {
        e.preventDefault()

        try {

            const formData = SignupSchema.parse({
                name,
                gmail,
                phone,
                password
            })
            const res = await register(formData).unwrap()
            console.log(res)
            navigate('/login')

        } catch (error) {
            // console.log('error in signup page', error)
            // if (error instanceof ZodError) {
            //     const validationErrors = {}
            //     error.errors.forEach((err) => {
            //         validationErrors[err.path[0]] = err.message
            //     })
            //     setErrors(validationErrors)
            // }

        }
    }
    console.log(errors)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full' style={{ backgroundImage: `url(${loginImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <div className='hidden sm:block'>
                <img src="" alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded p-8 py-0 mb-20  p bg-opacity-60 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} onSubmit={handlesubmit}>
                    <h2 className='text-2xl text-center font-bold py-6'>Signup</h2>
                    <div className='flex flex-col py-2'>
                        <label className='font-mono font-semibold ' htmlFor="">Name</label>
                        <input className='border p-2 bg-white  rounded-lg' type="text" name="name" value={name} id="" onChange={(e) => setName(e.target.value)} placeholder='name' />
                        {errors?.name ? <p className="text-center font-semibold" style={{ color: 'red' }}>{errors.name}</p> : ''}
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-mono font-semibold ' htmlFor="">Email</label>
                        <input className='border p-2 bg-white  rounded-lg' type="text" name="email" id="" value={gmail} onChange={(e) => setGmail(e.target.value)} placeholder='gmail' />
                        {errors?.gmail && <p className="text-center font-semibold" style={{ color: 'red' }}>{errors.gmail}</p>}
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-mono font-semibold ' htmlFor="">Phone</label>
                        <input className='border p-2 bg-white text-black rounded-lg' type="text" name="phone" id="" value={phone} onChange={(e) => setNumber(e.target.value)} placeholder='phone' />
                        {errors?.phone && <p className="text-center font-semibold" style={{ color: 'red' }}>{errors.phone}</p>}
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='font-mono font-semibold ' htmlFor="">password</label>
                        <input className='border p-2 bg-white text-black rounded-lg' type="password" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
                        {errors?.password ? <p className="text-center font-semibold" style={{ color: 'red' }}>{errors.password}</p> : ''}
                    </div>
                    <button className='w-full font-bold py-2 my-5 border bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded hover:floating-effect' type='submit'>Signup</button>
                </form>
            </div>
        </div>
    )
}
export default Signup