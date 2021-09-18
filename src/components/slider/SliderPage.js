import React from "react";
import Slider from "react-slick";

function SliderPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className="sliderSection">
      <div className="container">
        <div className="row">
        <div className="col-md-2 nopadding">
          <div className="category-menu">
            <ul>
              <li>
                <a href="#">Electronics Device</a>
              </li>
              <li>
                <a href="#">Electronic Accessories</a>
              </li>
              <li>
                <a href="#">TV & Home Appliances</a>
              </li>
              <li>
                <a href="#">Health & Beauty</a>
              </li>
              <li>
                <a href="#">Babies & Toys</a>
              </li>
              <li>
                <a href="#">Groceries & Pets</a>
              </li>
              <li>
                <a href="#">Home & Lifestyle</a>
              </li>
              <li>
                <a href="#">Women's Fashion</a>
              </li>
              <li>
                <a href="#">Men's Fashion</a>
              </li>
              <li>
                <a href="#">Watches & Accessories</a>
              </li>
              <li>
                <a href="#">Sports & Outdoor</a>
              </li>
              <li>
                <a href="#">Automotive & Motorbike</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <div className="slider-section">
            <Slider {...settings}>
              <div className="slider-image">
                <img src="//icms-image.slatic.net/images/ims-web/4f43c570-8c2f-4d82-8833-e93bcf33beee.jpg"/>
              </div>
              <div className="slider-image">
                <img src="//icms-image.slatic.net/images/ims-web/06af02d2-dd47-4861-bec3-84a8501be355.jpg_1200x1200.jpg"/>
              </div>
              <div className="slider-image">
                <img src="//icms-image.slatic.net/images/ims-web/ca68cae3-8a60-43c8-9a8a-9b69e597f97c.jpg"/>
              </div>
              <div className="slider-image">
                <img src="//icms-image.slatic.net/images/ims-web/06af02d2-dd47-4861-bec3-84a8501be355.jpg_1200x1200.jpg"/>
              </div>
              <div className="slider-image">
                <img src="//icms-image.slatic.net/images/ims-web/06af02d2-dd47-4861-bec3-84a8501be355.jpg_1200x1200.jpg"/>
              </div>
              
            </Slider>
          </div>
        </div>
        </div>
       
       
      </div>
    </div>
  );
}

export default SliderPage;
