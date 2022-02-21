import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "./swiperFP.css";
import "swiper/css/navigation";

import img1 from "../../img/images/big_banner.jpg";

function SliderFP() {
  return (
    <Swiper
      className="banners__big mySwiper"
      navigation={true}
      modules={[Navigation]}
      data-test-id="main-slider"
    >


      <SwiperSlide>
        <img src={img1} alt="baner" />
        <div className="banners__bg-title">
        <span>Banner</span>
        your Title text
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="baner" />
        <div className="banners__bg-title">
        <span>Banner</span>
        your Title text
      </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="baner" />
        <div className="banners__bg-title">
        <span>Banner</span>
        your Title text
      </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderFP;
