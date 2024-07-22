import { Route, Routes } from 'react-router-dom'
import Login from '../Components/User/Login.jsx'
import Signup from '../Components/User/Signup.jsx'
import Home from '../Pages/User/Home.jsx'


export default function UserRoutes() {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />

        </Routes>

    )
}