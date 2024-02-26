import React from "react";
// import ".//static/aboutgrassd.css";
import carwithlogo from "./Cimages/carwithlogo.png";

function Aboutgrassd(){
    return(
        <>
           <div className="logoabout">
                <div className="apart1">
                    <h2>About Grassd Service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>
                <div className="apart2">
                    <img src={carwithlogo} alt="car with logo" />
                </div>
                
            </div>
        </>
    );
}
export default Aboutgrassd;