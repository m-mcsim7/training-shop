import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products/products.js";
import Rating from "../Item_card/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

function Slider_R(props) {
  let newProducts = props.products;

  let item = props.product_type;

  return (
    <Swiper
      className="related-products__items mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={4}
      slidesPerGroup={1}
      spaceBetween={50}
      navigation={{
        nextEl: props.buttons.nextEl,
        prevEl: props.buttons.prevEl,
      }}
      breakpoints={{
        // when window width is >= 640px
        1130: {
          slidesPerView: 4,
        },
        // when window width is >= 768px
        840: {
          slidesPerView: 3,
        },
        570: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 1,
        },
      }}
    >
      {newProducts.map((card, index) => (
        <SwiperSlide className="swiper_r" key={index}>
          <Link
            data-test-id={`clothes-card-${item}`}
            to={`/${item}/${card.id}`}
            className="item__card"
          >
            {card.discount && (
              <span className="item__card-sale">{card.discount}</span>
            )}
            <div className="item__card-img">
              <img
                src={`https://training.cleverland.by/shop${card.images[0].url}`}
                alt="item"
              />
            </div>
            <div className="item__card-title">{card.name}</div>
            <div className="item__card-suptitle">
              <div className="item__card-price">
                ${" "}
                {card.discount
                  ? Math.round(
                      (card.price -
                        (card.price / 100) * card.discount.slice(1, -1)) *
                        100
                    ) / 100
                  : card.price}
                {card.discount && (
                  <span className="item__card-price-sale">$ {card.price}</span>
                )}
              </div>
              <Rating rating={card.rating} />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider_R;
