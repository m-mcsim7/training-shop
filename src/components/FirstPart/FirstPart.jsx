import React from 'react';
import big_banner from "../../img/images/big_banner.jpg";
import banner_woman from "../../img/images/banner_woman.jpg";
import banner_man from "../../img/images/banner_man.jpg";
import banner_accessories from "../../img/images/banner_accessories.jpg";
import "./FirstPart.css";

function FirstPart() {
  return (
  <div>
           <div className="bloks">
        <div className="container">
          <div className="bloks__banners banners">
            <div className="banners__big">
              <div className="banners__bg-title">
                <span>Banner</span>
                your Title text
              </div>
              <img src={big_banner} alt="big_banner" />
            </div>
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
                <img
                  src={banner_accessories} alt="banner_accessories"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default FirstPart;
