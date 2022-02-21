import React, { useState } from "react";
import { Link } from "react-router-dom";
import basket_number from "../../img/icons/basket_number.svg";
import Search from "../../img/icons/Search.svg";
import Earth from "../../img/icons/Earth.svg";
import Human from "../../img/icons/human.svg";

import "./Header.css";

import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  menuActive
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <div
      className="header"
      data-test-id="header"
      // onClick={() => setMenuActive(!menuActive)}
       onClick={() => (menuActive) ? setMenuActive(!menuActive): setMenuActive(menuActive) }
    >
      <div className="container">
        <div
          className="header__top top"

        >
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
            <Link
              to="/"
              className="header-nav-logo"
              data-test-id="header-logo-link"
            >
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
            <li>
              <a
                className="main__icons-basket"
                href="https://m-mcsim7.github.io/training-shop/"
              >
                <img src={basket_number} alt="basket_number" />
              </a>
            </li>
            <li
              onClick={(e) => {
                 setMenuActive(!menuActive)
                 e.stopPropagation()
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
