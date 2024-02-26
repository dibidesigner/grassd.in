import React from "react";
import Logo from "./Cimages/logo.png";
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";

 function Navbar(){

 return (
    <>
    
    
        
       
       
        
<<<<<<< HEAD
        <header className="main-nav bg-black h-14 w-full flex flex-row fixed">
           <div className="flex justify-center items-center">
             <img src={Logo} alt="Logo" className="h-8"/>
           </div>
           <div className="flex flex-row justify-center items-center text-white">
             <Link to='/service' className="h-full mw-40 bg-white"><h2>SERVICES</h2></Link>
             <Link to='/service'className="h-full mw-40 bg-white"><h2>CONTACT US</h2></Link>
             <Link to='/service'className="h-full mw-40 bg-white"><h2>ABOUT US</h2></Link>
             <Link to='/service' className="h-full mw-40 bg-white"><h2>PAYMENT</h2></Link>
           </div>
           <div className="flex flex-row">
            <h4 className="text-[#09cb2d]">Become a Host</h4>
            <div className="h-8 w-30 bg-[#09cb2d]">Log In/Sign In</div>
           </div>
           <div>
             <FaBars />
           </div>
=======
        <div className="navbar">
           <div className="logo">
            <Link to="/"><img src={logo} alt="Logo" title="Go to Home Page"/></Link>
           </div>
           <div className="menu">
              <h2 title="Go to Services Page">SERVICES  </h2>
              <Link to="/contactus"><h2 title="Go to Conatact Us Page">CONTACT US</h2></Link>
              <Link to="/aboutus"><h2>ABOUT US</h2></Link>
              <h2 title="Go to Payment Page">PAYMENT</h2>
           </div>
           <div className="login">
            <h4 className="becomeahost" title="Host your car to earn money">Become a Host</h4>
            <Link to="/login"><div className="loginbutton" title="Log in with id password">
              <h4 >Log in/Sign in</h4>
            </div></Link>
           </div>
           <div className="menubar">
            <FaBars className="bar" onClick={Change} />
           </div>
           
>>>>>>> parent of de21c67 (Tailwing change)
          
        </header>
        
        
       
        
        
               
    
    </>
  );
}

export default Navbar;
