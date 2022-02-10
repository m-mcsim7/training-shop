import React from 'react';
import pay1 from "../../img/icons/pay/pay1.svg";
//import pay2 from "../../img/icons/pay/pay2.svg";
//import pay3 from "../../img/icons/pay/pay3.svg";
//import pay4 from "../../img/icons/pay/pay4.svg";
//import pay5 from "../../img/icons/pay/pay5.svg";
//import pay6 from "../../img/icons/pay/pay6.svg";
//import pay7 from "../../img/icons/pay/pay7.svg";

import "./Footer.css";

function Footer() {
  return <div>
           <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__input">
              <div className="footer__input-text">BE IN TOUCH WITH US:</div>
              <div className="footer__input-input">
                <input
                  className="footer__input-email"
                  type="email"
                  name="email-address"
                  placeholder="Enter your email"
                />
                <button className="footer__input-button">Join Us</button>
              </div>
              <ul className="footer__input-social">
                <li><a className="top__social-facebook" href="https://m-mcsim7.github.io/training-shop/">f</a></li>
                <li><a className="top__social-twitter" href="https://m-mcsim7.github.io/training-shop/">f</a></li>
                <li><a className="top__social-instagram" href="https://m-mcsim7.github.io/training-shop/">f</a></li>
                <li><a className="top__social-pinteerst" href="https://m-mcsim7.github.io/training-shop/">f</a></li>
              </ul>
            </div>
            <div className="footer__rows">
              <ul className="footer__column">
                <li>Categories</li>
                <li>Men</li>
                <li>Women</li>
                <li>Accessories</li>
                <li>Beauty</li>
              </ul>
              <ul className="footer__column">
                <li>Infomation</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
              <ul className="footer__column">
                <li>Useful links</li>
                <li>Terms & Conditions</li>
                <li>Returns & Exchanges</li>
                <li>Shipping & Delivery</li>
                <li>Privacy Policy</li>
              </ul>
              <ul className="footer__column">
                <li>CONTACT US</li>
                <li>Belarus, Gomel, Lange 17</li>
                <li>+375 29 100 20 30</li>
                <li>All week 24/7</li>
                <li>info@clevertec.ru</li>
              </ul>
            </div>
            <div className="footer__pay">
              <div>Copyright © 2032 all rights reserved</div>
              <div>
                 <div><img src={pay1} alt="pay" /></div>

              </div>
              <div><a href="https://clevertec.ru/">Clevertec.ru/training</a></div>
            </div>
          </div>
        </div>
      </footer>
  </div>;
}

export default Footer;
