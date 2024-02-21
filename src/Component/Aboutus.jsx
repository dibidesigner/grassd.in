import React from "react";
import Navbar from "./Navabar";
import Search from "./Search";
import Footer from "./Footer";
import Navbarspace from "./Navbarspace";
import Aboutbackground from "./Aboutbackground";
import { useEffect } from "react";



function Aboutus(){
   useEffect(()=>{
      document.title="Grassd | Know about us";
  },[])
    return(
       <>
          
          <Navbar />
          <Navbarspace /> 
          <Search />
          <Navbarspace /> 
          <Aboutbackground />
          <Footer />
       </>
    );
}
export default Aboutus;