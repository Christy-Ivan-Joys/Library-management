
import { Login } from '../Components/Admin/Login.jsx'
import { Routes, Route } from 'react-router-dom'

import { Books } from '../Pages/Admin/Books.jsx'
import Users from '../Pages/Admin/Users.jsx'

export default function AdminRoutes() {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/books' element={<Books />} />
            <Route path='/users' element={<Users/>}/>
        </Routes>

    )
}