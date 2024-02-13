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



function App() {
  return (
    <>
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
