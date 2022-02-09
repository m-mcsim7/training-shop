import React from 'react';
import big_banner from "../../img/images/big_banner.jpg";
import banner_woman from "../../img/images/banner_woman.jpg";
import banner_man from "../../img/images/banner_man.jpg";
import banner_accessories from "../../img/images/banner_accessories.jpg";


function FirstPart() {
  return (
  <div>
           <div class="bloks">
        <div class="container">
          <div class="bloks__banners banners">
            <div class="banners__big">
              <div class="banners__bg-title">
                <span>Banner</span>
                your Title text
              </div>
              <img src={big_banner} alt="big_banner" />
            </div>
            <div class="banners__small">
              <div class="banners__small-up">
                <div class="banners__small-up-left">
                  <div class="banners__small-up-left-title">Women</div>
                  <img src={banner_woman} alt="banner_woman" />
                </div>
                <div class="banners__small-up-right">
                  <div class="banners__small-up-right-title">men</div>
                  <img src={banner_man} alt="banner_man" />
                </div>
              </div>
              <div class="banners__small-down">
                <div class="banners__small-down-title">Accessories</div>
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
