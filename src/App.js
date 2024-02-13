import React from 'react';
import './App.css';
import Navbar from './Component/Navabar';
import Mainimage from './Component/Mainimage';
import Carorder from "./Component/Carorder";
import Offer from "./Component/Offer";
import Footer from "./Component/Footer";
import Coupon from "./Component/Coupon";
import Gifoffer from './Component/Gifoffer';
import Caradv from './Component/Caradv';
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,Link
   
  
} from "react-router-dom";
import Aboutus from "./Component/Aboutus";




function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        
        <Route exact path="aboutus" element={<Aboutus />} />
       </Routes>
      </BrowserRouter> 
      <Navbar />
      <Mainimage />
      <div className='background'>
          <Carorder />
          <Offer />
          <Coupon />
          <Gifoffer />
          <Caradv />
      </div>
      <Footer />
      
      
      
      
      
      
    </>
   
  );
}

export default App;
