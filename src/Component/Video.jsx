import React from "react";
// import ".//static/video.css";






function Video(){
    return(
       <>
         <div className="videomain">
            <div>
                <iframe src="https://www.youtube.com/embed/KIvC5wsoW2Y?si=PCuEOqIl0qOU7nfW" autplay={true} title="YouTube video player"  className="videomain"/>
                
            </div>
           
         </div>
       </>
    );
}

export default Video;