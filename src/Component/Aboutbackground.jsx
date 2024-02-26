import React from "react";
import Aboutgrassd from "./Aboutgrassd";
// import ".//static/aboutbackground.css";
import Companyjourny from "./Companyjourny";
import Purpose from "./Purpose";



function Aboutbackground(){
    return(
        <>
          <div className="aboutbg">
             <Aboutgrassd />
             <hr className="hrline2"/>
             <Companyjourny />
             <hr className="hrline2"/>
             <Purpose />
          </div>
        </>
    );
}

export default Aboutbackground;
