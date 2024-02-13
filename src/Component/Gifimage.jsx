import React from "react";
import ".//static/gifimage.css";
import gifimage from "./Cimages/gifimage.png";

function Gifimage(){
    return(
       <>
       <div className="gifcontainer">
          <img src={gifimage} alt="gif" className="gifimage" />
       </div>
         
       </>
    );
}

export default Gifimage;