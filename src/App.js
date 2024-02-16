import React from 'react';
import './App.css';
import "./index.css";
import Homepage from './Homepage';
import {Routes,Route} from "react-router-dom";
import Aboutus from "./Component/Aboutus";






function App() {
  return (
    <>
      <Routes>
          <Route  exact path="/" element={<Homepage />} />
          <Route  exact path='/aboutus' element={<Aboutus />} />
      </Routes>
    
        

     
               
      
      
      
      
      
      
    </>
   
  );
}

export default App;
