import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Controller } from "swiper";

import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

import Photo_1 from "../../img/images/main_photo.jpg";

//import Item_color_1 from "../../img/images/item_color1.jpg";
//import Item_color_2 from "../../img/images/item_color2.jpg";
//import Item_color_3 from "../../img/images/item_color3.jpg";
//import Item_color_4 from "../../img/images/item_color4.jpg";

function Slider(props) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
//  const nav = ".item__slider-small-photo"
  //const [activeSlide, srtActiveSlide] = useState(true)

  return (
    <section className="slider_item_swiper" data-test-id="product-slider">
      {/*<div className="item__slider-small-photo">
       <img src={Photo_1} alt="baner" />
       <img src={Photo_1} alt="baner" />
       <img src={Photo_1} alt="baner" />
       <img src={Photo_1} alt="baner" />
       </div>*/}
      <Swiper
        className="item__slider-small-photo mySwiper"
        navigation={true}
        modules={[Navigation, Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control:secondSwiper }}

        navigation={{
          nextEl: props.buttons.nextEl,
          prevEl: props.buttons.prevEl,
        }}
        direction="vertical"
        slidesPerView={4}
        slidesPerGroup={1}
        spaceBetween={16}
        loop= {true}
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
          slidesPerGroup={1}
          slidesPerView={1}
          loop= {true}
      //  thumbs={{
      //    swiper: {nav}
      //  }}
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
        <SwiperSlide>
          <img src={Photo_1} alt="baner" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slider;
