import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";

import Search from "../../img/icons/Search.svg";
import Earth from "../../img/icons/Earth.svg";
import Human from "../../img/icons/human.svg";

import "./Header.css";

import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";
import { useGetProductsQuery } from "../../redux/productsApi/productsApi";

import { addProductsApiInStore } from "../../redux/productsApi/reducer";

import { useDispatch } from "react-redux";

function Header() {
   const dispatch = useDispatch();
   const { data = {} } = useGetProductsQuery();

   useEffect(() => {
      dispatch(addProductsApiInStore(data))
   }, [data])

   console.log(data)



  const items = useSelector((state) => state.cart.itemsInCart);
  let itemsLength = items.length;

  const [menuActive, setMenuActive] = useState(false);
  menuActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  return (
    <div
      className="header"
      onClick={() =>
        menuActive ? setMenuActive(!menuActive) : setMenuActive(menuActive)
      }
    >
       
      <Cart menuVisible={[isCartMenuVisible, setIsCartMenuVisible]} />
      <div className="container">
        <div className="header__top top">
          <ul className="top__contacts">
            <li>
              <a href="tel:+375291002030" className="top__phone">
                +375 29 100 20 30
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/dJtf9kFjZdC3hAE99"
                className="top__addres"
              >
                Belarus, Gomel, Lange 17
              </a>
            </li>
            <li className="top__workinghours">All week 24/7</li>
          </ul>

          <SocialIcons />
        </div>
        <div className="header__main main ">
          <div className="main_logo">
            <div className="main__backgraund"></div>
            <Link to="/" className="header-nav-logo">
              CleverShop
            </Link>
          </div>

          <Navigation
            active={menuActive}
            setActive={setMenuActive}
            // onClick={e => e.stopPropagation()}
          />

          <ul className="main__icons">
            <li>
              <a
                className="main__icons-search"
                href="https://m-mcsim7.github.io/training-shop/"
              >
                <img src={Search} alt="icon" />
              </a>
            </li>
            <li>
              <a
                className="main__icons-earth"
                href="https://m-mcsim7.github.io/training-shop/"
              >
                <img src={Earth} alt="icon" />
              </a>
            </li>
            <li>
              <a
                className="main__icons-human"
                href="https://m-mcsim7.github.io/training-shop/"
              >
                <img src={Human} alt="icon" />
              </a>
            </li>
            <li
              className="main__icons-basket"
              data-test-id="cart-button"
              onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            >
              {itemsLength > 0 ? <span>{itemsLength}</span> : null}
            </li>
            <li
              onClick={(e) => {
                setMenuActive(!menuActive);
                e.stopPropagation();
              }}
              className={
                menuActive ? "header__burger _active" : "header__burger"
              }
            >
              <span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
