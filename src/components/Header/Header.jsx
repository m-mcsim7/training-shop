import React from "react";
import basket_number from "../../img/icons/basket_number.svg";
import "./Header.css";

import Navigation from "./Navigation";
import SocialIcons from "./SocialIcons";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top top">
          <ul className="top__contacts">
            <li>
              <a href="tel:+375291002030" className="top__phone">  +375 29 100 20 30 </a>
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
          <div className="main_logo">CleverShop</div>

          <Navigation
            onClick={(name_navigation) => console.log(name_navigation)}
            items={[
              "About Us",
              "Women",
              "Men",
              "Beauty",
              "Accessories",
              "Blog",
              "Contact",
            ]}
          />

          <ul className="main__icons">
            <li>
              <a className="main__icons-search" href="https://yandex.by/">8</a>
            </li>
            <li>
              <a className="main__icons-earth" href="https://yandex.by/">8</a>
            </li>
            <li>
              <a className="main__icons-human" href="https://yandex.by/">8</a>
            </li>
            <li>
              <a className="main__icons-basket" href="https://yandex.by/">
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
