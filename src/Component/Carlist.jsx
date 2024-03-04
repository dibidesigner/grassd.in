import React from "react";
import Car from "./Cimages/carimage.png";
import { Link } from "react-router-dom";
import "./static/carlist.css";



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
