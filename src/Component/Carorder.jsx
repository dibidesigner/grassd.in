import React from "react";
import Carlist from "./Carlist";
import Guide from "./Guide";
<<<<<<< HEAD
<<<<<<< HEAD
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import ".//static/carorder.css";
=======
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import ".//static/carorder.css";
>>>>>>> parent of de21c67 (Tailwing change)
=======
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import ".//static/carorder.css";
>>>>>>> parent of de21c67 (Tailwing change)




function Carorder() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
  return (
    <>
        <div className="carorder"> 
           <div className="innerdiv">
              <div className="carordershape1"></div>
              <div className="carordershape2">
                 <div className="carordershape2innerdiv">
                     <Slider {...settings} className="carordershape2innerdivpart1">
                      {/* <FaAngleLeft className="arrow" /> */}
                      <div>
                        <Carlist step="Step 1" />
                      </div>
                      <div>
                        <Carlist step="Step 2" />
                      </div>
                      <div>
                        <Carlist step="Step 3" />
                      </div>
                      <div>
                        <Carlist step="Step 4" />
                      </div>
                      <div>
                        <Carlist step="Step 5"/>
                      </div>
                      <div>
                        <Carlist step="Step 6"/>
                      </div>
                      <div>
                        <Carlist step="Step 7"/>
                      </div>
                      <div>
                        <Carlist step="Step 8"/>
                      </div>
                      <div>
                        <Carlist step="Step 9"/>
                      </div>
                      <div>
                        <Carlist step="Step 10"/>
                      </div>
                      <div>
                        <Carlist step="Step 11" />
                      </div>
                      <div>
                        <Carlist step="Step 12" />
                      </div>
                      <div>
                        <Carlist step="Step 13"/>
                      </div>
                      <div>
                        <Carlist step="Step 14" />
                      </div>
                      <div>
                        <Carlist step="Step 15"/>
                      </div>
                      <div>
                        <Carlist step="Step 16"/>
                      </div>
                      <div>
                        <Carlist step="Step 17"/>
                      </div>
                      <div>
                        <Carlist step="Step 18"/>
                      </div>
                      <div>
                        <Carlist step="Step 19"/>
                      </div>
                      <div>
                        <Carlist step="Step 20"/>
                      </div>
                      <div>
                        <Carlist step="Step 21"/>
                      </div>
                      <div>
                        <Carlist step="Step 22"/>
                      </div>
                      <div>
                        <Carlist step="Step 23"/>
                      </div>
                      <div>
                        <Carlist step="Step 24"/>
                      </div>
                      
                      
                      {/* <FaAngleRight className="arrow"/> */}
                     </Slider>
                     
                     <div className="middletext">
                        <div className="seemorecar">
                          <hr className="hrline"/>
                          <div className="text">
                             <Link to="/filter-car"><h5>See more car</h5></Link>
                          </div>
                        </div>
                        
                        <h3>How to rent car with us</h3>
                     </div>
                     <Slider {...settings} className="carordershape2innerdivpart2">
                      {/* <FaAngleLeft className="arrow"/> */}
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      <div>
                         <Guide step="Step 1"/>
                      </div>
                      
                      
                      {/* <FaAngleRight className="arrow"/> */}
                     </Slider>
                    
                 </div>
              </div>
            </div> 
        </div>
    </>
  );
}

export default Carorder;
