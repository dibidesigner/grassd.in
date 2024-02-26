import React from "react";
import Carlist from "./Carlist";
import Guide from "./Guide";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
// import ".//static/carorder.css";




function Carorder() {
  return (
    <>
        <div className="carorder"> 
           <div className="innerdiv">
              <div className="carordershape1"></div>
              <div className="carordershape2">
                 <div className="carordershape2innerdiv">
                     <div className="carordershape2innerdivpart1">
                      <FaAngleLeft className="arrow" />
                      <Carlist />
                      <Carlist />
                      <Carlist />
                      <Carlist />
                      <FaAngleRight className="arrow"/>
                     </div>
                     
                     <div className="middletext">
                        <div className="seemorecar">
                          <hr className="hrline"/>
                          <div className="text">
                             <h5>See more car</h5>
                          </div>
                        </div>
                        
                        <h3>How to rent car with us</h3>
                     </div>
                     <div className="carordershape2innerdivpart2">
                      <FaAngleLeft className="arrow"/>
                      <Guide step="Step 1"/>
                      <Guide step="Step 2"/>
                      <Guide step="Step 3"/>
                      <Guide step="Step 4"/>
                      <FaAngleRight className="arrow"/>
                     </div>
                    
                 </div>
              </div>
            </div> 
        </div>
    </>
  );
}

export default Carorder;
