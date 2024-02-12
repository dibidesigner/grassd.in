import React from 'react';
import './App.css';
import Navbar from './Component/Navabar';
import Mainimage from './Component/Mainimage';
import Carorder from "./Component/Carorder";
import Offer from "./Component/Offer";
import Footer from "./Component/Footer";
import Coupon from "./Component/Coupon";



function App() {
  return (
    <>
      <Navbar />
      <Mainimage />
      <div className='background'>
          <Carorder />
          <Offer />
          <Coupon />
      </div>
      <Footer />
      
      
      
      
      
      
    </>
   
  );
}

export default App;
