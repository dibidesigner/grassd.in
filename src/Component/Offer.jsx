import React from "react";
import ".//static/Offer.css";
<<<<<<< HEAD
<<<<<<< HEAD
import Slider from "react-slick";
=======
=======
>>>>>>> parent of de21c67 (Tailwing change)

>>>>>>> parent of de21c67 (Tailwing change)




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
            <img  alt="Offer" />
          </div>
          <div className="offerimage">
            <img  alt="Offer" />
          </div>
          <div className="offerimage">
            <img  alt="Offer" />
          </div>
          <div className="offerimage">
            <img  alt="Offer" />
          </div>
          <div className="offerimage">
            <img  alt="Offer" />
          </div>
          <div className="offerimage">
            <img  alt="Offer" />
          </div>  
        </Slider>
      </div>  
    </>
  );
}

export default Offer;
