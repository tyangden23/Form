import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Layout/Home'
import User from '../../Layout/User'
import Search from '../../Layout/Search'
import Login from '../../Layout/Login'
import ProtectedRoute from '../ProtectedRoute'
import Dashboard from '../../Layout/Dashboard'
import Products from '../../Layout/Products'
import NotFound from '../../Layout/NotFound'
import FeaturedProducts from '../../Layout/Featuredproducts'
import NewProducts from '../../Layout/Newproducts'
import Form from '../../Layout/Form'

export const AppRoutes = ({ isAuthenticated, handleLogin }) => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:userId' element={<User />} />
        <Route path='/search' element={<Search />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path ='/form' element={<Form onLogin={handleLogin} />}/>

    <Route
    path='/dashboard'
    element={
        <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
        </ProtectedRoute>
    }
    />
    <Route path='/products' element={<Products/>}>
     <Route
    index
    element={
        <strong
        style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '16px',
        }}
        >
            select a category
        </strong>
    }
    />
    <Route path='featured' element={<FeaturedProducts />} />
    <Route path='new' element={<NewProducts />} /> 
    </Route>

    <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}