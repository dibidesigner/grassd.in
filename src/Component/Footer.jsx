import React from "react";
// import ".//static/footer.css";
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
           <div className="part3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14974.599595095566!2d85.75476776380592!3d20.23186433346234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7d4dbbc983f%3A0xc4e63f379a170756!2sPatrapada%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1707820719365!5m2!1sen!2sin"  title="On Google map Location"></iframe>
                <address>PlotNo.:88/2344,Patrapada,Near V2 Shopping Mall Side Road,Kalinga  Nagar,Bhubaneswar,Odisha-751019</address>
           </div>
       </div>
    </>
    );
}

export default Footer;