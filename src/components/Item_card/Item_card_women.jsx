import React from "react";
import { Link } from "react-router-dom";

import item_women_7 from "../../img/images/item_woman/item_women_1.jpg";
import item_women_3 from "../../img/images/item_woman/item_women_2.jpg";
import item_women_6 from "../../img/images/item_woman/item_women_3.jpg";
import item_women_2 from "../../img/images/item_woman/item_women_4.jpg";
import item_women_5 from "../../img/images/item_woman/item_women_5.jpg";
import item_women_1 from "../../img/images/item_woman/item_women_6.jpg";
import item_women_8 from "../../img/images/item_woman/item_women_7.jpg";
import item_women_4 from "../../img/images/item_woman/item_women_8.jpg";


const items = [
  {
    img: item_women_1,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 1,
  },
  {
    img: item_women_2,
    title: "Women's tracksuit Q109",
    price: "$ 30.00   $ 60.00",
    score: "",
    id: 2,
  },
  {
    img: item_women_3,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 3,
  },
  {
    img: item_women_4,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 4,
  },
  {
    img: item_women_5,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 5,
  },
  {
    img: item_women_6,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 6,
  },
  {
    img: item_women_7,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 7,
  },
  {
    img: item_women_8,
    title: "Women's tracksuit Q109",
    price: "$ 30.00",
    score: "",
    id: 8,
  },
];

function Item_card_women() {
  return (
    <div className="sort__items">
      {items.map((a, index) => (
    <Link to={`/women/${a.id}`} data-test-id="clothes-card-women" key={index} className="item__card">
      <div className="item__card-img">
           <img src={a.img} alt="item" />
      </div>
      <div className="item__card-title">{a.title}</div>
      <div className="item__card-suptitle">
        <div className="item__card-price">{a.price}</div>
        <div className="item__card-score"></div>
      </div>
    </Link>
      ))}
    </div>
  );
}

export default Item_card_women;
