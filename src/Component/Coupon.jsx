import React from "react";
import ".//static/Coupon.css";
import Couponlist from "./Couponlist";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";





function Coupon(){
  return (
    <>
        <div className="coupon">
          
            <div className="couponinner"> 
                <FaAngleLeft />
                  <div className="couponwithtext">
                    <div>
                        <h4 className="getcoupon">Get your Coupon</h4>
                    </div>
                    <div className="coupon3">
                      <Couponlist />
                      <Couponlist />
                      <Couponlist />

                    </div>
                  </div>  
                <FaAngleRight /> 
            </div>
           
        </div>
    </>
  );
}

export default Coupon;
