import React from 'react';

import Share from "../../img/icons/Share.svg"
import view1 from "../../img/icons/view1.svg"
import view2 from "../../img/icons/view2.svg"
import down from "../../img/icons/down.svg"
import further from "../../img/icons/item__further.svg"
import item from "../../img/images/item_1.jpg"

import "./Categories.css";

function Categories() {
  return <div>
      <div className="nav__categoriya">
        <div className="container">
          <div className="nav__categotiya-wrapper">
            <div className="nav_categoriya__chit">
              <ul className="nav__categoriya-link">
                <li><a href="https://m-mcsim7.github.io/training-shop/">Home</a></li>
                <li><a href="https://m-mcsim7.github.io/training-shop/">Women</a></li>
              </ul>
              <div className="nav__categoriya-share">
                <img src={Share} alt="share" />
                <p>Share</p>
              </div>
            </div>
            <div className="nav__categoriya-title">Women</div>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="container">
          <div className="filter__wrapper">
            <div className="filter__items">
              <div className="filter__filter">
                <img src="./img/icons/filter.svg" alt="filter" />
                <p>filter</p>
              </div>
              <div className="filter__view">
                <img src={view1} alt="view" />
                <img src={view2} alt="view" />
              </div>
              <div className="filter__best">
                <p>bestsellers</p>
                <img src={down} alt="down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="continer">
          <div className="items_wrapper">
            <div className="sort__items">
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
              <div className="item__card">
                <div className="item__card-img">
                  <img src={item} alt="item" />
                </div>
                <div className="item__card-title">Women's tracksuit Q109</div>
                <div className="item__card-suptitle">
                  <div className="item__card-price">$ 30.00</div>
                  <div className="item__card-score"></div>
                </div>
              </div>
            </div>
            <div className="item__further">
               <img src={further} alt="item__further" />
            </div>
          </div>
        </div>
      </div>
  </div>;
}

export default Categories;
