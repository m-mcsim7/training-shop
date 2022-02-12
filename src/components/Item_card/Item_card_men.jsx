import React from "react";
import { Link } from "react-router-dom";

import item_men_1 from "../../img/images/item_men/item_men_1.jpg";
import item_men_2 from "../../img/images/item_men/item_men_2.jpg";
import item_men_5 from "../../img/images/item_men/item_men_3.jpg";
import item_men_6 from "../../img/images/item_men/item_men_4.jpg";
import item_men_3 from "../../img/images/item_men/item_men_5.jpg";
import item_men_7 from "../../img/images/item_men/item_men_6.jpg";
import item_men_4 from "../../img/images/item_men/item_men_7.jpg";
import item_men_8 from "../../img/images/item_men/item_men_8.jpg";


const items = [
  {
    img: item_men_1,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 1,
  },
  {
    img: item_men_2,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 2,
  },
  {
    img: item_men_3,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 3,
  },
  {
    img: item_men_4,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 4,
  },
  {
    img: item_men_5,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 5,
  },
  {
    img: item_men_6,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 6,
  },
  {
    img: item_men_7,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 7,
  },
  {
    img: item_men_8,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 8,
  },
];

function Item_card_men() {
  return (
    <div className="sort__items">
      {items.map((a, index) => (
    <div key={index} className="item__card">
      <div className="item__card-img">
        <Link to={`/men/${a.id}`} data-test-id="clothes-card-men"><img src={a.img} alt="item" /></Link>
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

export default Item_card_men;
