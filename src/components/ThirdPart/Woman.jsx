import React from "react";
import Item_card_women from "../Item_card/Item_card_women";

import "./Woman.css";

function Woman() {
  return (
    <div data-test-id="clothes-women">
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
            {/*<div className="sort__items">*/}
               <Item_card_women />

            {/*</div>*/}
            <div className="sort__button">See All</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Woman;
