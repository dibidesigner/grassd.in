import React from "react";
// import ".//static/mainimage.css";
import Video from "./Video";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
// import ".//static/video.css";






function Mainimage(){
    const [video,setVideo]=useState(true)
    function closevideo(){
      setVideo(false)
    }
    
   
    return(
      <> 
      { video &&(
          <>
              <Video />
              <IoCloseCircleOutline title="Close the video" className="icon" onClick={closevideo}/>

          </> 
        ) 
      }  
        
        <div className='maincar'>
            
            <div className='top'>
                <div className='topmainleft'>
                    <h3 className='live'>Live your</h3>
                    <h3 className='passion'>PASSION</h3>
                </div>
                <div className='topmainright'>
                
                </div>
            </div>
            
            <div className='buttom'>
               <div className='buttommainleft'>
                    <select className="searchinput">
                        <option>Bhubaneswar</option>
                        <option>Cuttack</option>
                        <option>Khurda</option>
                        <option>Puri</option>
                    </select>
                    <input type="date" className="searchinput" />
                    <input type="submit" value="Search" className="searchbutton" />
                </div>
                <div className='buttommainright'>
                     
                </div>
                 
               
            </div>
        </div>
      </>
    );
}

export default Mainimage;