import logo from "./Cimages/logo.png";
import { FaBars} from "react-icons/fa";
import Menu from "./Menu";
import { useState } from "react";
import {Link} from "react-router-dom";









function Navbar() {
  const [menu,setMenu]=useState(false)
  function Change(){
    setMenu(!menu)
  }
 

  return (
    <>
    
    
        {
          menu && (
            <Menu />
          )
        }

       
       
        
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
           
          
        </div>
        
        
       
        
        
               
    
    </>
  );
}

export default Navbar;
