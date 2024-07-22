import React, { useEffect, useState } from "react"
import LoginImg from '../../assets/Images/LoginImg.jpg'
import { Link, useNavigate } from "react-router-dom"
import { LoginSchema } from "../../validation/LoginSchema"
import { setErrorMap, z, ZodError } from 'zod'
import { useLoginMutation } from "../../utils/Redux/userApiSlices"
import Cookies from "js-cookie"
import { userLogout } from "../../Helpers/Logout"

const Login = () => {
  const [gmail, setGmail] = useState('')
  const [password, SetPassword] = useState('')
  const [errors, SetErrors] = useState({})
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {

    e.preventDefault()

    try {
      LoginSchema.parse({ gmail, password })
      SetErrors({})
      alert(gmail, password)
      const res = await login({ gmail, password }).unwrap()
      console.log(res)
      navigate('/')

    } catch (error) {

      if (error instanceof ZodError) {
        const validationErrors = {}
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message
        })
        SetErrors(validationErrors)
      }
    }
  }
  useEffect(() => {
    const userToken = Cookies.get('userAccessToken')
    if (userToken) {
      navigate('/')
    } else {
      userLogout()
      navigate('/login')
    }
  }, [])

  return (
    <div>
      <div className="grid grid-col-1 sm:grid-cols-2 h-screen w-full" style={{ backgroundImage: `url(${LoginImg})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'fixed' }}>

        <div className="hidden sm:block">

          <img src="" alt="" />

        </div>

        <div className="flex flex-col justify-center sm:mx-auto px-20 mb-24">

          <form className=" flex flex-col justify-center shadow-purple-700 sm:max-w-[400px] w-full mx-auto rounded p-8 bg-opacity-60 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} onSubmit={handleSubmit}>

            <h2 className="text-3xl font-bold text-center py-6">Login</h2>

            <div className="flex flex-col py-2">

              <label className="font-mono text-black" htmlFor="">Username</label>

              <input className="border p-2 bg-black text-white" type="text" placeholder="username" value={gmail} onChange={(e) => setGmail(e.target.value)} />

              {errors?.gmail && <p className="text-center font-semibold" style={{ color: 'red' }}>{errors.gmail}</p>}

            </div>

            <div className="flex flex-col py-2">
              <label className="font-mono text-black " htmlFor="">Password</label>
              <input className="border p-2 bg-black text-white" type="password" placeholder="Password" value={password} onChange={(e) => SetPassword(e.target.value)} />
              {errors?.password ? (<p className='text-center font-semibold' style={{ color: 'red' }}>{errors.password}</p>) : (<p></p>)}
            </div>
            <button className=" w-full bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 rounded border my-5 py-2 px-4 font-bold hover:floating-effect" type="submit">Login</button>

            <div className="flex justify-between p-2 sm:justify-center gap-14">

              <p className="flex items-center gap-2"><input className="ml-2" type="checkbox" name="" id="" />Remember Me</p>

              <p><Link to='/register'>Create an account</Link></p>

            </div>
          </form>
        </div>

      </div>

    </div>

  )
}

export default Login
