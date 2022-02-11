import React from "react";
import { Link } from "react-router-dom";

import item_1 from "../../img/images/item1.jpg";
import item_2 from "../../img/images/item2.jpg";
import item_3 from "../../img/images/item3.jpg";
import item_4 from "../../img/images/item4.jpg";

const items = [
  {
    img: item_1,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_2,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_3,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
  {
    img: item_4,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
  },
];

function Item_card() {
   
  return (
    <div>
      {items.map((a, index) => (
    <div key={index}>
      <div className="item__card-img">
        <Link to="product_page"><img src={a.img} alt="item" /></Link>
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

export default Item_card;
