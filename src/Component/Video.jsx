import React from "react";
import ".//static/video.css";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";





function Video(){
    return(
       <>
         <div className="videomain">
            <div>
                <iframe src="https://www.youtube.com/embed/KIvC5wsoW2Y?si=PCuEOqIl0qOU7nfW" autplay={true} title="YouTube video player" autplay={true} className="videomain"/>
                
            </div>
           
         </div>
       </>
    );
}

export default Video;