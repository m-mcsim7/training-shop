import React from "react";
//import item_1 from "../../img/images/item1.jpg";

import Item_card from "../../components/Item_card/Item_card";

import "./Woman.css";

function Woman() {
  return (
    <div>
      <div className="sort">
        <div className="container">
          <div className="sort__main">
            <div className="sort__title">
              <div className="sort__logo">WOMEN’S</div>
              <ul className="sort__navigation">
                <li>NEW ARRIVALS</li>
                <li>SPECIALS</li>
                <li>BESTSELLERS</li>
                <li>MOST VIEWED</li>
                <li>FEATURED PRODUCTS</li>
              </ul>
            </div>
            <div className="sort__items">
               <Item_card />

            </div>
            <div className="sort__button">See All</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Woman;
