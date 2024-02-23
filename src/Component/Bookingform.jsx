import React, { useEffect } from "react";
import Navbar from "./Navabar";
import Search from "./Search";
import Footer from "./Footer";
import Navbarspace from "./Navbarspace";
import "./static/bookingform.css";





function Bookingform(){
    useEffect(()=>{
          document.title="Grassd | Booking-Form";
    },[])
    return(
        <>
          <Navbar />
          <Navbarspace /> 
          <Search />
          <Navbarspace />
          <div className="bookingmain">
           
            <form >
            <div className="bookingform">
              <div className="leftsideform">
                <input type="text" placeholder="Enter your full name" className="bookinginput" />
                <input type="text" placeholder="Invoice No" className="bookinginput" />
                <input type="text" placeholder="Regd No" className="bookinginput" />
                <input type="text" placeholder="Adhar No" className="bookinginput"/>
                <input type="text" placeholder="Contact Primary No" className="bookinginput"/>
                <input type="text" placeholder="Contact Secondary No" className="bookinginput"/>
              </div>
              <div className="rightsideform">
                <input type="text" placeholder="S/o,D/o,W/o" className="bookinginput"/>
                <input type="text" placeholder="Vehicle" className="bookinginput" />
                <input type="text" placeholder="DL No" className="bookinginput"/>
                <input type="text" placeholder="Destination" className="bookinginput" />
                <input type="text" placeholder="No of Person" className="bookinginput"/>
                <input type="text" placeholder="Address as per DL" className="bookinginput"/>
              </div>
              
            </div> 
            <div className="term">
              <input type="checkbox" />
              <label className="textblack">Agree with Term & Conditions</label>
            </div>
            <div className="bookingboton">
                <input type="submit" value="Book" className="bookboton"/>
                <input type="submit" value="Clear" className="bookclearboton"/>
            </div> 
            </form>
          </div>
          <Footer />
        </>
    );
}
export default Bookingform;