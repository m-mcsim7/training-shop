import React, { useState,  } from "react";
import { useSelector } from "react-redux";

import { PRODUCTS } from "../../products/products.js";
import { particularsMenu } from "../../products/products.js";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/productsApi/productsApi";

//----------------------

import Item_card from "../Item_card/Item_card";

import "./ProductType.css";

function ProductType(props) {
  let product_type = props.product_type;
  //--------------------------------------API----------------------------------------------------
  const productsAPi = useSelector((state) => state.productsApiSlice.productsApi);
  //-----------------------------------------------------------------
  const particulars = [
    "NEW ARRIVALS",
    "SPECIALS",
    "BESTSELLERS",
    "MOST VIEWED",
    "FEATURED PRODUCTS",
  ];

  const [changParticular, setChangParticular] = useState(0);

  let particularNameChange;

  //  function activeParticular() {
  for (let i of particularsMenu) {
    if (i.name === particulars[changParticular]) {
      particularNameChange = i.particularName;
    }
  }

  let particularLink = particularNameChange;

  const newProducts = [];

  //function changeParticularsMenu() {


  
  if (productsAPi[product_type]) {
    for (let i of productsAPi[product_type]) {
      i.particulars[particularLink] && newProducts.push(i);
    }
  }




//console.log()
  //    return newProducts;
  //  }
  //  changeParticularsMenu();

  return (
    <div data-test-id={`clothes-${product_type}`}>
      {/*{isLoading && <h1>Loading....</h1>}*/}
      <div className="sort">
        <div className="container">
          <div className="sort__main">
            <div className="sort__title">
              <div className="sort__logo">{product_type}’S</div>
              <ul className="sort__navigation">
                {particulars.map((item, index) => (
                  <li
                    data-test-id={`clothes-${product_type}-${particularsMenu[index].particularName}`}
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
                product_item={product_type}
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
