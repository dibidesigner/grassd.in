import React from "react";
import ".//static/mainimage.css";




function Mainimage(){
    return(
      <>
        <div className='maincar'>
            
            <div className='top'>
                <div className='mainleft passion'>
                    <h3 className='live'>Live your</h3>
                    <h3 className='passion'>
                        PASSION</h3>
                </div>
                <div className='mainright'>
                
                </div>
            </div>
           
            <div className='buttom'>
               <div className='mainleft'>
                    <select className="searchinput">
                        <option>Bhubaneswar</option>
                    </select>
                    <input type="Date" className="searchinput" />
                    <input type="submit" className="searchbutton"/>
                </div>
                <div className='mainright'>
                
                </div>
                
               
            </div>
        </div>
      </>
    );
}

export default Mainimage;