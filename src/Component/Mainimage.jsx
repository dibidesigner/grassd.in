import React from "react";
import ".//static/mainimage.css";




function Mainimage(){
    return(
      <>
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
                    <input type="submit" value="Search" className="searchbutton"/>
                </div>
                <div className='buttommainright'>
                     
                </div>
                 
               
            </div>
        </div>
      </>
    );
}

export default Mainimage;