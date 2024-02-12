import React from "react";
import Carlist from "./Carlist";
import Guide from "./Guide";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import ".//static/carorder.css";




function Carorder() {
  return (
    <>
        <div className="carorder"> 
           <div className="innercarorder">
                <div className="griditems1">
                    <h3>Adv Design</h3>
                </div>
                <div className="griditems2">
                   <div className="shape1">
                      <div className="arrow"><FaAngleLeft />  </div>
                        <Carlist />
                        <Carlist />
                        <Carlist />
                        <Carlist />
                      <div className="arrow" ><FaAngleRight /> </div>
                   </div>
                   <div className="hr">
                      <hr className="hrline"/>
                      <div className="seemore">See more car</div>
                   </div>
                   
                   <div className="howto">
                     <h3>How to rent a car with us</h3>
                   </div>
                   <div className="shape2">
                        <div className="arrow"><FaAngleLeft />  </div>
                        <Guide step="Step 1"/>
                        <Guide step="Step 2"/>
                        <Guide step="Step 3"/>
                        <Guide step="Step 4"/>
                        <div className="arrow" ><FaAngleRight /> </div>
                   </div>
                </div>

           </div>
            
        </div>
    </>
  );
}

export default Carorder;
