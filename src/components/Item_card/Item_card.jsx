import React from "react";
import { Link } from "react-router-dom";

import Rating from "./Rating";
import { PRODUCTS } from "../../products/products.js";
import { particularsMenu } from "../../products/products.js";
//import { particularsMenu } from "../../products/particularsMenu.js";

function Item_card(props) {
  let item = props.product_item;
  let newProducts;
  props.newProducts === undefined
    ? (newProducts = PRODUCTS[item])
    : (newProducts = props.newProducts);

  return (
    <div className="sort__items">
      {newProducts.map((card, index) => (
        <Link
        data-test-id={`clothes-card-${item}`}
          to={`/${item}/${card.id}`}
          key={index}
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
      ))}
    </div>
  );
}

export default Item_card;
