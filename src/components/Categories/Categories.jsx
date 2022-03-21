import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Filter_men from "./Filter_men";
import { Link } from "react-router-dom";

import Share from "../../img/icons/Share.svg";
import "./Categories.css";






function Categories(props) {


   const productsAPi = useSelector((state) => state.productsApiSlice.productsApi);

   function isEmpty(obj) {
      for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
      }
      return true;
    }



   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);

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

      {!isEmpty(productsAPi) && <Filter_men product_item={props.product_type} />}

    </div>
  );
}

export default Categories;
