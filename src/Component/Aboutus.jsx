import React from "react";
import Navbar from "./Navabar";
import Search from "./Search";
import Footer from "./Footer";
import Navbarspace from "./Navbarspace";
import Aboutbackground from "./Aboutbackground";



function Aboutus(){
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