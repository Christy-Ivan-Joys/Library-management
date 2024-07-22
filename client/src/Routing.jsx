

import { Route, Routes } from 'react-router-dom'
import UserRoutes from './Routes/userRoutes'
import AdminRoutes from './Routes/adminRoutes'

export default function Routing() {

  return (

          <Routes>
              <Route path='/*' element={<UserRoutes/>} />
              <Route path='admin/*' element={<AdminRoutes />} />
          </Routes>
   
  )
}
