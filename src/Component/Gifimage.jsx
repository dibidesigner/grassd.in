import React from "react";
import ".//static/gifimage.css";
import gifvideo from "./Cimages/playstore.gif";

function Gifimage(){
    return(
       <>
       <div className="gifcontainer">
          <img src={gifvideo} alt="gif" className="gifimage" />
       </div>
         
       </>
    );
}

export default Gifimage;