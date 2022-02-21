import React, {useState} from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Controller } from "swiper";

import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

import Photo_1 from "../../img/images/main_photo.jpg";

function Slider(props) {

const [firstSwiper, setFirstSwiper] = useState(null);
const [secondSwiper, setSecondSwiper] = useState(null);
//const [activeSlide, srtActiveSlide] = useState(true)


  return (
    <section className="slider_item_swiper"
    data-test-id="product-slider">
      <Swiper
      
        className="item__slider-small-photo mySwiper"
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control:secondSwiper }}

        navigation={{
         nextEl: props.buttons.nextEl,
         prevEl: props.buttons.prevEl
        }}
      

        direction="vertical"
        slidesPerView={3}
      //  slidesPerGroup={1}
        spaceBetween={16}
      >
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
       </Swiper>

      <Swiper
        className="item__slider-big-photo mySwiper"
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={setSecondSwiper}
        controller={{ control:firstSwiper }}

        
      >
         
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
