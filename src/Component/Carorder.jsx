import React from "react";
import Carlist from "./Carlist";
import Guide from "./Guide";
import ".//static/carorder.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




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
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      <div>
                        <Carlist />
                      </div>
                      
                      
                      {/* <FaAngleRight className="arrow"/> */}
                     </Slider>
                     
                     <div className="middletext">
                        <div className="seemorecar">
                          <hr className="hrline"/>
                          <div className="text">
                             <h5>See more car</h5>
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
