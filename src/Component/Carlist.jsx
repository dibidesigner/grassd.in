import React from "react";
import Car from "./Cimages/carimage.png";
// import "./static/carlist.css";



function Carlist() {
  return (
    <>
     <div className="car">
        <img src={Car} className="carno" alt="Car"/>
        <input type="submit" className="booknow" value="Book Now"/>
     </div>   
    </>
  );
}

export default Carlist;
