import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'

const AppRouter = () => {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
   
   
   </BrowserRouter>
  )
}

export default AppRouter
