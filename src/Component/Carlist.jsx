import React from "react";
import Car from "./Cimages/carimage.png";
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from "react-router-dom";
// import "./static/carlist.css";
=======
import "./static/carlist.css";
>>>>>>> parent of de21c67 (Tailwing change)
=======
import "./static/carlist.css";
>>>>>>> parent of de21c67 (Tailwing change)



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
