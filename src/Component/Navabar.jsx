
import logo from "./Cimages/logo.png";
import { FaBars} from "react-icons/fa";
import Menu from "./Menu";
import { useState } from "react";



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
            <img src={logo} alt="Logo" title="Go to Home Page"/>
           </div>
           <div className="menu">
              <h2 title="Go to Services Page">SERVICES  </h2>
              <h2 title="Go to Conatact Us Page">CONTACT US</h2>
              <h2 title="Go to About Us Page">ABOUT US  </h2>
              <h2 title="Go to Payment Page">PAYMENT   </h2>
           </div>
           <div className="login">
            <h4 className="becomeahost" title="Host your car to earn money">Become a Host</h4>
            <div className="loginbutton" title="Log in with id password">
              <h4 >Log in/Sig in</h4>
            </div>
           </div>
           <div className="menubar">
            <FaBars className="bar" onClick={Change} />
           </div>
           
          
        </div>
        
        
       
        

       
    </>
  );
}

export default Navbar;
