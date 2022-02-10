import React from 'react';
import "./SecondPart.css";

function SecondPart() {
  return <div>
           <div className="conditions">
        <div className="container">
          <div className="conditions__rows">
            <div className="conditions__column">
              <div className="conditions__column-img shipping"></div>
              <div className="conditions__column-info">
                <div className="conditions__column-title">FREE SHIPPING</div>
                <div className="conditions__column-subtitle">
                  On all UA order or order above $100
                </div>
              </div>
            </div>
            <div className="conditions__column">
              <div className="conditions__column-img return"></div>
              <div className="conditions__column-info">
                <div className="conditions__column-title">30 DAYS RETURN</div>
                <div className="conditions__column-subtitle">
                  Simply return it within 30 days for an exchange
                </div>
              </div>
            </div>
            <div className="conditions__column">
              <div className="conditions__column-img support"></div>
              <div className="conditions__column-info">
                <div className="conditions__column-title">SUPPORT 24/7</div>
                <div className="conditions__column-subtitle">
                  Contact us 24 hours a day, 7 days a week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>;
}

export default SecondPart;
