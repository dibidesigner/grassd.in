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

       
       
        
        <div className="main-nav bg-black h-12 w-full flex flex-row">
           
          
        </div>
        
        
       
        
        
               
    
    </>
  );
}

export default Navbar;
