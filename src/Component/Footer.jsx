import React from "react";
import ".//static/footer.css";
import logo from "./Cimages/logo.png";



function Footer(){
    return(
    <>
       <div className="footer">
           <div className="part1">
            <img src={logo} className="footerlogo" alt="Logo"/>
           </div>
           <vr />
           <div className="part2">
               <div className="quick">
                    <h3 className="heading">Quick Link</h3>
                    <p><li>Home</li></p>
                    <p><li>Services</li></p>
                    <p><li>About Us</li></p>
                    <p><li>Log in</li></p>
                    <p><li>Sign in</li></p>
                    <p><li>Car Search</li></p>
                    <p><li>Career</li></p>
               </div>
               <div className="term">
                    <h3 className="heading">Term & Conditions</h3>
                    <p><li>Home</li></p>
                    <p><li>Services</li></p>
                    <p><li>About Us</li></p>
                    <p><li>Log in</li></p>
                   
               </div>
               <div className="social">
                    <h3 className="heading">Social</h3>
                    <p><li>Facebook</li></p>
                    <p><li>Instagram</li></p>
                    <p><li>Youtube</li></p>
                    
               </div>
           </div>
           <div className="part3"></div>
       </div>
    </>
    );
}

export default Footer;