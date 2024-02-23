import React from "react";
import Car from "./Cimages/carimage.png";
import "./static/carlist.css";
import { Link } from "react-router-dom";



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
