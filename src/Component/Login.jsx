import React from "react";
import Navbar from "./Navabar";
import Navbarspace from "./Navbarspace";
import Footer from "./Footer";
import Search from './Search';
import ".//static/login.css";
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import {Link} from "react-router-dom";



function Login(){
    return(
        <>
          <Navbar />
          <Navbarspace /> 
          <Search />
          <Navbarspace />
          <div className="backgroundlogin">
            <div className="formheading">
                <h1>Log In Form</h1>
            </div>

        
            <form className="form">
                <div className="urid">
                    <div className="personicon">
                       <FaUser />
                    </div>
                    <input type="text" placeholder="Enter your id" className="loginput" />
                </div>
                <div className="forgotwithpass">
                    <div className="urid">
                    <div className="personicon">
                        <IoIosLock />
                    </div>
                    <input type="password" placeholder="Enter your password" className="loginput"/>
                    </div>
                    <h5>Forgot password?</h5>
                </div>
                
                
                <input type="submit" value="Log In" className="loginboton"/>
            </form>
            <div className="registerplease">
                <h4>If you don't have account? <Link to="/registrationform?"><span className="registerspan">Register</span></Link></h4>
            </div>
                
                
                
        
          </div>
          <Navbarspace />
          <Footer />
        </>
    );
}
export default Login;