import React from "react";
import banner_1 from "../../img/images/newseason.jpg"
import banner_2 from "../../img/images/sale.jpg"
import "./FourthPart.css";

function FourthPart() {
  return (
    <div>
      <div className="banners">
        <div className="container">
          <div className="banners__wrapper">
            <div className="banners__wrapper-img">
              <img src={banner_1} alt="newseason" />
              <div className="banners__wrapper-title">
                <p>New Season</p>
                lookbook collection
              </div>
            </div>
            <div className="banners__wrapper-img">
              <img src={banner_2} alt="sale" />
              <div className="banners__wrapper-title">
                <p>Sale</p>
                Get UP to <span>50% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPart;
