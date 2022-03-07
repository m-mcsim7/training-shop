import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

function Slider(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section className="slider_item_swiper">
      <Swiper
        className="item__slider-small-photo mySwiper"
        navigation={true}
        modules={[Navigation]}
        onSwiper={setThumbsSwiper}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: props.buttons.nextEl,
          prevEl: props.buttons.prevEl,
        }}
        direction="vertical"
      //  slidesPerView={props.images.length}
      //  slidesPerView={props.images.length}

        slidesPerView={ (props.images.length < 5) ? props.images.length : 4}
        slidesPerGroup={1}
        spaceBetween={16}
        loop={true}
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://training.cleverland.by/shop${item}`}
              alt="baner"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="item__slider-big-photo mySwiper"
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        slidesPerGroup={1}
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://training.cleverland.by/shop${item}`}
              alt="baner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Slider;
