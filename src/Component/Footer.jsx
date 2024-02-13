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
           <div className="part3">
            <iframe src="https://www.google.com/maps/place/Ruchika+Market,+Baramunda+Housing+Board+Colony,+Baramunda,+Bhubaneswar,+Odisha+751003/@20.2774277,85.7926044,18z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3a1909d2d5170aa5:0xfc580e2b68b33fa8!2sBhubaneswar,+Odisha!3b1!8m2!3d20.2960587!4d85.8245398!16zL20vMDNjenFz!3m5!1s0x3a19a788fefbb1e9:0xe8410d6618eb0f1f!8m2!3d20.2772756!4d85.7951726!16s%2Fg%2F11cn6z5w5k?entry=ttu" className="map"/>
           </div>
       </div>
    </>
    );
}

export default Footer;