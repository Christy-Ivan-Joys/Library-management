import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import Routing from './Routing.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  
)
