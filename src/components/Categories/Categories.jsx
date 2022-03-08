import React from "react";
//import Item_card_men from "../Item_card/Item_card_men";
import Item_card from "../Item_card/Item_card";
import Filter_women from "./Filter_women";
import Filter_men from "./Filter_men";
import { Link } from "react-router-dom";

import Share from "../../img/icons/Share.svg";
//import view1 from "../../img/icons/view1.svg"
//import view2 from "../../img/icons/view2.svg"
import down from "../../img/icons/down.svg";
import further from "../../img/icons/item__further.svg";
//import filter from "../../img/icons/filter.svg"

import "./Categories.css";

function Categories(props) {
  return (
    <div data-test-id={`products-page-${props.product_type}`}>
      <div className="nav__categoriya">
        <div className="container">
          <div className="nav__categotiya-wrapper">
            <div className="nav_categoriya__chit">
              <ul className="nav__categoriya-link">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={`/${props.product_type}`}>
                    {props.product_type}
                  </Link>
                </li>
              </ul>
              <div className="nav__categoriya-share">
                <img src={Share} alt="share" />
                <p>Share</p>
              </div>
            </div>
            <div className="nav__categoriya-title">{props.product_type}</div>
          </div>
        </div>
      </div>
      {props.product_type === "women" ? (
        <Filter_women product_item={props.product_type} />
      ) : (
         <Filter_men product_item={props.product_type} />
      )}
    </div>
  );
}

export default Categories;
