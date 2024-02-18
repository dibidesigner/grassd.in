import React from 'react';
import './App.css';
import "./index.css";
import Homepage from './Homepage';
import {Routes,Route} from "react-router-dom";
import Aboutus from "./Component/Aboutus";
import Login from "./Component/Login";
import Register from './Component/Register';







function App() {
  return (
    <>
      <Routes>
          <Route  exact path="/" element={<Homepage />} />
          <Route  exact path='/aboutus' element={<Aboutus />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registrationform?" element={<Register />} />
      </Routes>
    
        

     
               
      
      
      
      
      
      
    </>
   
  );
}

export default App;
