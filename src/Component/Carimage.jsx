import React from "react";
import ".//static/carimage.css";
import caradv from "./Cimages/caradv.png";

function Carimage(){
    return(
       <>
       <div className="carcontainer">
          <img src={caradv} alt="gif" className="carimage" />
       </div>
         
       </>
    );
}

export default Carimage;