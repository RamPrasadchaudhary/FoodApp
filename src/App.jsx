import React, { useState } from "react"
import Navbar from './Component/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Component/Footer/Footer";
import LoginPop from "./Component/LoginPopUp/LoginPop";
const App = () => {
  const [showLogin ,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/PlaceOrder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>

    
  )
}

export default App