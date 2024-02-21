import React from "react";
import ".//static/Offer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Offerimage1 from "./Cimages/Offerimage1.png";
import Offerimage2 from "./Cimages/Offerimage2.png";





function Offer() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
   
  };
  return (
    <>
     <div className="offer">
      {/* <img src={Offerimage1} /> */}
        <Slider {...settings} className="slidecss">
          <div className="offerimage">
            <img src={Offerimage1} alt="Offer" />
          </div>
          <div className="offerimage">
            <img src={Offerimage2} alt="Offer" />
          </div>
          <div className="offerimage">
            <img src={Offerimage1} alt="Offer" />
          </div>
          <div className="offerimage">
            <img src={Offerimage2} alt="Offer" />
          </div>
          <div className="offerimage">
            <img src={Offerimage1} alt="Offer" />
          </div>
          <div className="offerimage">
            <img src={Offerimage2} alt="Offer" />
          </div>  
        </Slider>
      </div>  
    </>
  );
}

export default Offer;
