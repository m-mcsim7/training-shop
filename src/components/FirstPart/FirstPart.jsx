import React from "react";

//import big_banner from "../../img/images/big_banner.jpg";
import banner_woman from "../../img/images/banner_woman.jpg";
import banner_man from "../../img/images/banner_man.jpg";
import banner_accessories from "../../img/images/banner_accessories.jpg";

import img1 from "../../img/images/big_banner.jpg";
import img2 from "../../img/images/banner_woman.jpg";
import img3 from "../../img/images/banner_man.jpg";
import img4 from "../../img/images/banner_accessories.jpg";

import slider_left from "../../img/icons/left.svg";
import slider_right from "../../img/icons/right.svg";

import "./FirstPart.css";
import SliderFP from "./SliderFP";

function FirstPart() {
  return (
    <div>
      <div className="bloks">
        <div className="container">
          <div className="bloks__banners banners">
          <SliderFP />
            <div className="banners__small">
              <div className="banners__small-up">
                <div className="banners__small-up-left">
                  <div className="banners__small-up-left-title">Women</div>
                  <img src={banner_woman} alt="banner_woman" />
                </div>
                <div className="banners__small-up-right">
                  <div className="banners__small-up-right-title">men</div>
                  <img src={banner_man} alt="banner_man" />
                </div>
              </div>
              <div className="banners__small-down">
                <div className="banners__small-down-title">Accessories</div>
                <img src={banner_accessories} alt="banner_accessories" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FirstPart;
