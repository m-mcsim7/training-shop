import React from "react";
import BigBannerWoman from "../../img/images/woman.png";
import BigBannerMan from "../../img/images/man.png";
//import "./FifthPart.css";

function FifthPart() {
  return (
    <div>
      <div class="bigbanner">
        <div class="container">
          <div class="bigbanner__wrapper">
            <img
              class="bigbanner_woman"
              src={BigBannerWoman}
              alt="woman"
            />
            <img class="bigbanner_man" src={BigBannerMan} alt="man" />
            <div class="bigbanner__contain">
              <p class="bigbanner__subtitle">Special Offer</p>
              <p class="bigbanner__title">
                Subscribe
                <br />
                and <span>Get 10% Off</span>
              </p>
              <input
                class="bigbanner__email"
                type="email"
                name="email-address"
                placeholder="Enter your email"
              />
              <button class="bigbanner__button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPart;
