import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";


import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

import Photo_1 from "../../img/images/main_photo.jpg";

//import Item_color_1 from "../../img/images/item_color1.jpg";
//import Item_color_2 from "../../img/images/item_color2.jpg";
//import Item_color_3 from "../../img/images/item_color3.jpg";
//import Item_color_4 from "../../img/images/item_color4.jpg";

function Slider(props) {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="slider_item_swiper" data-test-id="product-slider">

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
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
          slidesPerGroup={1}
          slidesPerView={1}
          spaceBetween={15}
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
    </section>
  );
}

export default Slider;
