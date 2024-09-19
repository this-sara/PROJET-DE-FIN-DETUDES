// import React from 'react'
import './App.css'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Card from "./pages/Card/Card"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import LoginPup from "./components/loginpup/LoginPup"
import Contact from './pages/contact/contact'
import Story from './pages/Story/Story'
import Product from './pages/product/Product'
import Verify from './pages/verify/Verify'
import Myorders from './pages/MyOrders/Myorders'
import Scrolltop from './components/scroll/Scrolltop';
const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (<>
  {showLogin?<LoginPup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='verify' element={<Verify/>}/>
        <Route path='myorders' element={<Myorders/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}> 
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/story' element={<Story/>}/>
        </Routes>
    </div>
    <Footer/>
    <Scrolltop/>
    </>
  )
}

export default App
