import React, { useState } from "react";

import { PRODUCTS } from "../../products/products.js";
import { particularsMenu } from "../../products/products.js";
import { Link } from "react-router-dom";

import Item_card from "../Item_card/Item_card";

import "./ProductType.css";

function ProductType(props) {
  const particulars = [
    "NEW ARRIVALS",
    "SPECIALS",
    "BESTSELLERS",
    "MOST VIEWED",
    "FEATURED PRODUCTS",
  ];

  const [changParticular, setChangParticular] = useState(0);

  let item = props.product_type;

  let particularNameChange;

  function activeParticular() {
    for (let i of particularsMenu) {
      if (i.name === particulars[changParticular]) {
        particularNameChange = i.particularName;
      }
    }
  }
  activeParticular();

  let particularLink = particularNameChange;
  const newProducts = [];

  function changeParticularsMenu() {
    for (let i of PRODUCTS[item]) {
      i.particulars[particularLink] && newProducts.push(i);
    }

    return newProducts;
  }
  changeParticularsMenu();

  return (
    <div data-test-id={`clothes-${props.product_type}`}>
      <div className="sort">
        <div className="container">
          <div className="sort__main">
            <div className="sort__title">
              <div className="sort__logo">{props.product_type}’S</div>
              <ul className="sort__navigation">
                {particulars.map((item, index) => (
                  <li
                    data-test-id={`clothes-${props.product_type}-${particularsMenu[index].particularName}`}
                    className={changParticular === index ? "_active " : ""}
                    key={index}
                    onClick={() => setChangParticular(index)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sort__items">
              <Item_card
                newProducts={newProducts}
                product_item={props.product_type}
                // changParticular={changParticular}
              />
            </div>
            <Link to={`/${props.product_type}`}>
              <div className="sort__button">See All</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductType;
