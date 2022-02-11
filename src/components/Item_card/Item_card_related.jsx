import React from "react";
import { Link } from "react-router-dom";

import item_women_1 from "../../img/images/item_woman/item_women_1.jpg";
import item_women_2 from "../../img/images/item_woman/item_women_2.jpg";
import item_women_3 from "../../img/images/item_woman/item_women_3.jpg";
import item_women_4 from "../../img/images/item_woman/item_women_4.jpg";

const items = [
  {
    img: item_women_1,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_women_2,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_women_3,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_women_4,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
];

function item_card_related() {
  return (
    <div className="sort__items">
      {items.map((a, index) => (
        <div key={index} className="item__card">
          <div className="item__card-img">
            <Link to="product_page">
              <img src={a.img} alt="item" />
            </Link>
          </div>
          <div className="item__card-title">{a.title}</div>
          <div className="item__card-suptitle">
            <div className="item__card-price">{a.price}</div>
            <div className="item__card-score"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default item_card_related;
