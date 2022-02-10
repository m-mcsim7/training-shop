import React from "react";
import BigBannerWoman from "../../img/images/woman.png";
import BigBannerMan from "../../img/images/man.png";
import "./FifthPart.css";

function FifthPart() {
  return (
    <div>
      <div className="bigbanner">
        <div className="container">
          <div className="bigbanner__wrapper">
            <img
              className="bigbanner_woman"
              src={BigBannerWoman}
              alt="woman"
            />
            <img className="bigbanner_man" src={BigBannerMan} alt="man" />
            <div className="bigbanner__contain">
              <p className="bigbanner__subtitle">Special Offer</p>
              <p className="bigbanner__title">
                Subscribe
                <br />
                and <span>Get 10% Off</span>
              </p>
              <input
                className="bigbanner__email"
                type="email"
                name="email-address"
                placeholder="Enter your email"
              />
              <button className="bigbanner__button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPart;
