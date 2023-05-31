import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Details from "../pages/Details";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='products' element={<Product/>} />
        <Route path='details' element={<Details/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
