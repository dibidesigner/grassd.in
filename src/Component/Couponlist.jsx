import React from "react";
import Coupon from "./Cimages/coupon.png";
// import ".//static/couponlist.css";

function Couponlist(){
    return(
      <>
        <img src={Coupon} alt="Coupon" className="couponlist"
        />
      </>
    );
}
export default Couponlist;