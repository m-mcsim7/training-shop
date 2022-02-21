import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products/products.js";
import Rating from "./Rating";
import { SwiperSlide } from "swiper/react";

//const CardsItem = Products;

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

function Item_card_RELATED(props) {
  let item = props.product_item;
  let genderItems = items.filter((e) => e[1] === item);
  let id_card = "clothes-card-" + item;

  return (
    <div className="sort__items">
      {genderItems.map((card, index) => (
                  <SwiperSlide
                        data-test-id={id_card}
            key={index}
            className="item__card"
          >
            {card[0].discount && (
              <span className="item__card-sale">{card[0].discount}</span>
            )}
            <div className="item__card-img">
              <img
                src={`https://training.cleverland.by/shop${card[0].images}`}
                alt="item"
              />
            </div>
            <div className="item__card-title">{card[0].name}</div>
            <div className="item__card-suptitle">
              <div className="item__card-price">
                $ {card[0].price}
                {card[0].discount && (
                  <span className="item__card-price-sale">
                    ${" "}
                    {Math.round(
                      (card[0].price -
                        (card[0].price / 100) * card[0].discount.slice(1, -1)) *
                        100
                    ) / 100}
                  </span>
                )}
              </div>

              <Rating rating={card[0].rating} />
            </div>
          </SwiperSlide>
      ))}
    </div>
  );
}

export default Item_card_RELATED;
