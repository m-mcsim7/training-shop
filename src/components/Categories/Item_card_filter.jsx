import React from "react";
import { Link } from "react-router-dom";

import Rating from "../../components/Item_card/Rating";
import { PRODUCTS } from "../../products/products.js";
//import { particularsMenu } from "../../products/products.js";
//import { particularsMenu } from "../../products/particularsMenu.js";

function Item_card_filter(props) {
  let item = props.product_item;
  let newProducts;


    (props.newProductsIncludes.length  === 0) && (props.arrLengthZero == 4)
    ? (newProducts = PRODUCTS[item])
    : (newProducts = props.newProductsIncludes);





  return (
    <div className="sort__items">
      {newProducts.map((card, index) => (
        <Link
          to={`/${item}/${card.id}`}
          // data-test-id={id_card}
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

export default Item_card_filter;
