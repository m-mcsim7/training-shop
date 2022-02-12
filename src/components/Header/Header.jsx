import React from "react";
import { Link } from "react-router-dom";
import basket_number from "../../img/icons/basket_number.svg";
import "./Header.css";

import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

function Header() {
  return (
    <div className="header" data-test-id="header">
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
        <div className="header__main main">
          <div className="main_logo"><Link to="/" className="header-nav-logo" data-test-id="header-logo-link">CleverShop</Link></div>

          <Navigation
            items={[
              "about us",
              "women",
              "men",
              "beauty",
              "accessories",
              "blog",
              "contact",
            ]}
          />

          <ul className="main__icons">
            <li>
              <a className="main__icons-search" href="https://m-mcsim7.github.io/training-shop/">1</a>
            </li>
            <li>
              <a className="main__icons-earth" href="https://m-mcsim7.github.io/training-shop/">1</a>
            </li>
            <li>
              <a className="main__icons-human" href="https://m-mcsim7.github.io/training-shop/">1</a>
            </li>
            <li>
              <a className="main__icons-basket" href="https://m-mcsim7.github.io/training-shop/">
                <img src={basket_number} alt="basket_number" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
