import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products/products.js";
import Rating from "../Item_card/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "./swiper_item.css";
import "swiper/css/navigation";

import Photo_1 from "../../img/images/main_photo.jpg";

const number = PRODUCTS.men.map((item) => [
  {
    name: item.name,
    price: item.price,
    images: item.images[0].url,
    rating: item.rating,
    discount: item.discount,
    id: item.id,
  },
  "men",
]);
const number2 = PRODUCTS.women.map((item) => [
  {
    name: item.name,
    price: item.price,
    images: item.images[0].url,
    rating: item.rating,
    discount: item.discount,
    id: item.id,
  },
  "women",
]);

const items = [...number, ...number2];

function Slider_R(props) {
  return (
    <Swiper
    data-test-id="related-slider"
      className="related-products__items mySwiper"
      navigation={true}
      modules={[Navigation]}
      //slidesPerView={4}
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
         //600: {
         //  slidesPerView: 1,
         //},
       }}
    >
      <SwiperSlide className="swiper_r">
        <Link
          to={`/${items[0][1]}/${items[0][0].id}`}
          className="item__card"
        >
          {items[0][0].discount && (
            <span className="item__card-sale">{items[0][0].discount}</span>
          )}
          <div className="item__card-img_R">
            <img
              src={`https://training.cleverland.by/shop${items[0][0].images}`}
              alt="item"
            />
          </div>
          <div className="item__card-title_r">{items[0][0].name}</div>
          <div className="item__card-suptitle_r">
            <div className="item__card-price">
              $ {items[0][0].price}
              {items[0][0].discount && (
                <span className="item__card-price-sale">
                  ${" "}
                  {Math.round(
                    (items[0][0].price -
                      (items[0][0].price / 100) *
                        items[0][0].discount.slice(1, -1)) *
                      100
                  ) / 100}
                </span>
              )}
            </div>

            <Rating rating={items[0][0].rating} />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          to={`/${items[1][1]}/${items[1][0].id}`}
          className="item__card"
        >
          {items[1][0].discount && (
            <span className="item__card-sale">{items[1][0].discount}</span>
          )}
          <div className="item__card-img_R">
            <img
              src={`https://training.cleverland.by/shop${items[1][0].images}`}
              alt="item"
            />
          </div>
          <div className="item__card-title_r">{items[1][0].name}</div>
          <div className="item__card-suptitle_r">
            <div className="item__card-price">
              $ {items[1][0].price}
              {items[1][0].discount && (
                <span className="item__card-price-sale">
                  ${" "}
                  {Math.round(
                    (items[1][0].price -
                      (items[1][0].price / 100) *
                        items[1][0].discount.slice(1, -1)) *
                      100
                  ) / 100}
                </span>
              )}
            </div>

            <Rating rating={items[1][0].rating} />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          to={`/${items[0][1]}/${items[0][0].id}`}
          className="item__card"
        >
          {items[0][0].discount && (
            <span className="item__card-sale">{items[0][0].discount}</span>
          )}
          <div className="item__card-img_R">
            <img
              src={`https://training.cleverland.by/shop${items[0][0].images}`}
              alt="item"
            />
          </div>
          <div className="item__card-title_r">{items[0][0].name}</div>
          <div className="item__card-suptitle_r">
            <div className="item__card-price">
              $ {items[0][0].price}
              {items[0][0].discount && (
                <span className="item__card-price-sale">
                  ${" "}
                  {Math.round(
                    (items[0][0].price -
                      (items[0][0].price / 100) *
                        items[0][0].discount.slice(1, -1)) *
                      100
                  ) / 100}
                </span>
              )}
            </div>

            <Rating rating={items[0][0].rating} />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          to={`/${items[0][1]}/${items[0][0].id}`}
          className="item__card"
        >
          {items[0][0].discount && (
            <span className="item__card-sale">{items[0][0].discount}</span>
          )}
          <div className="item__card-img_R">
            <img
              src={`https://training.cleverland.by/shop${items[0][0].images}`}
              alt="item"
            />
          </div>
          <div className="item__card-title_r">{items[0][0].name}</div>
          <div className="item__card-suptitle_r">
            <div className="item__card-price">
              $ {items[0][0].price}
              {items[0][0].discount && (
                <span className="item__card-price-sale">
                  ${" "}
                  {Math.round(
                    (items[0][0].price -
                      (items[0][0].price / 100) *
                        items[0][0].discount.slice(1, -1)) *
                      100
                  ) / 100}
                </span>
              )}
            </div>

            <Rating rating={items[0][0].rating} />
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link
          to={`/${items[5][1]}/${items[5][0].id}`}
          className="item__card"
        >
          {items[5][0].discount && (
            <span className="item__card-sale">{items[5][0].discount}</span>
          )}
          <div className="item__card-img_R">
            <img
              src={`https://training.cleverland.by/shop${items[5][0].images}`}
              alt="item"
            />
          </div>
          <div className="item__card-title_r">{items[5][0].name}</div>
          <div className="item__card-suptitle_r">
            <div className="item__card-price">
              $ {items[5][0].price}
              {items[5][0].discount && (
                <span className="item__card-price-sale">
                  ${" "}
                  {Math.round(
                    (items[5][0].price -
                      (items[5][0].price / 100) *
                        items[5][0].discount.slice(1, -1)) *
                      100
                  ) / 100}
                </span>
              )}
            </div>

            <Rating rating={items[5][0].rating} />
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider_R;
