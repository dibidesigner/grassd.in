import React from "react";
import Car from "./Cimages/carimage.png";
<<<<<<< HEAD
// import "./static/carlist.css";
=======
import "./static/carlist.css";
import { Link } from "react-router-dom";
>>>>>>> 5b9854d11d7416fd9d3be448b998158899fe5aca



function Carlist() {
  return (
    <>
     <div className="car">
        <img src={Car} className="carno" alt="Car"/>
        <Link to="/booking-form"><input type="submit" className="booknow" value="Book Now"/></Link>
     </div>   
    </>
  );
}

export default Carlist;
