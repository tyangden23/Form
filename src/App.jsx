import { useState } from 'react'
import React from 'react'

import {BrowserRouter} from 'react-router-dom'

import { AppRoutes } from './Component/AppRoutes'
import NavBar from './Component/NavBar'

function App () {
  const [isAuthenticated,setAuthenticated]=useState(false)
  
  const handleLogin =()=>{
    setAuthenticated(true)
  }

  const handleLogout =()=>{
    setAuthenticated(flase)
  }

  return (
    <BrowserRouter>
    <div className='app'>
      <NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      <section className='page-container'>
      <AppRoutes
      handleLogin={handleLogin}
      isAuthenticated={isAuthenticated}
       />
      </section>
      
    
    
    </div>
    </BrowserRouter>
    
  )
}

export default App