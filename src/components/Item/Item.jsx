import React from "react";
//import Item_card_related from "../Item_card/Item_card_related";
import Slider from "./Slider";
import Slider_R from "./Slider_R";

//import Item_card_RELATED from "../Item_card/Item_card_RELATED";
//import { Navigation } from "swiper";

import Share from "../../img/icons/Share.svg";
import Star from "../../img/icons/star.svg";
import Slider_up from "../../img/icons/slider_up.png";
import Slider_down from "../../img/icons/slider_down.png";
//import Photo_1 from "../../img/images/item_photo1.jpg";
//import Photo_2 from "../../img/images/item_photo2.jpg";
//import Photo_3 from "../../img/images/item_photo3.jpg";
//import Photo_4 from "../../img/images/item_photo4.jpg";
//import Photo_main from "../../img/images/main_photo.jpg";
import Item_color_1 from "../../img/images/item_color1.jpg";
import Item_color_2 from "../../img/images/item_color2.jpg";
import Item_color_3 from "../../img/images/item_color3.jpg";
import Item_color_4 from "../../img/images/item_color4.jpg";
import Size_guide from "../../img/icons/size_guide.svg";
import Shipping from "../../img/icons/Shipping_Delivery.svg";
import Returns from "../../img/icons/Returns.svg";
import Ask from "../../img/icons/Ask_question.svg";
import Pay1 from "../../img/icons/pay/pay1.svg";
import Pay2 from "../../img/icons/pay/pay2.svg";
import Pay3 from "../../img/icons/pay/pay3.svg";
import Pay4 from "../../img/icons/pay/pay4.svg";
import Pay5 from "../../img/icons/pay/pay5.svg";
import Pay6 from "../../img/icons/pay/pay6.svg";
import Pay7 from "../../img/icons/pay/pay7.svg";
import Left from "../../img/icons/left.png";
import Right from "../../img/icons/right.png";
import Heart from "../../img/icons/hearth.svg";
import Scale from "../../img/icons/scales.svg";

import Review from "../../img/icons/review.svg";



import "./Item.css";

function Item(props) {
const Navigation={
   nextEl:".swiper-button-next-out",
   prevEl:".swiper-button-prev-out"
   }
const Navigation_RELATED ={
   nextEl:".swiper-button-next-out-related",
   prevEl:".swiper-button-prev-out-related"
   }
  let id = "product-page-" + props.product_type;
  return (
    <div data-test-id={id}>
      <div className="nav__categoriya">
        <div className="container">
          <div className="nav__categotiya-wrapper">
            <div className="nav_categoriya__chit">
              <ul className="nav__categoriya-link">
                <li>
                  <a href="https://m-mcsim7.github.io/training-shop/">Home</a>
                </li>
                <li>
                  <a href="https://m-mcsim7.github.io/training-shop/">
                    {props.product_type}
                  </a>
                </li>
                <li>
                  <a href="https://m-mcsim7.github.io/training-shop/">
                    Women's tracksuit Q109
                  </a>
                </li>
              </ul>
              <div className="nav__categoriya-share">
                <img src={Share} alt="share" />
                <p>Share</p>
              </div>
            </div>
            <div className="nav__categoriya-title">Women's tracksuit Q109</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="container">
          <div className="item__wrapper">
            <div className="item__score-all">
              <div className="item__score">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <p>2 Reviews</p>
              </div>
              <div className="item__score__info">
                <p>
                  <span>SKU:</span>777
                </p>
                <p>
                  <span>Availability:</span>In Stock
                </p>
              </div>
            </div>
            <div className="item__all">
              <div className="item__slider">


                <div className="swiper-button-prev-out"></div>
                <div className="swiper-button-next-out"></div>

                <Slider buttons={Navigation}/>

              </div>
              <div className="item__info">
                <div className="item__info-color">
                  <p>
                    <span>COLOR:</span>Blue
                  </p>
                </div>
                <div className="item__info-color-foto">
                  <img src={Item_color_1} alt="item_color" />
                  <img src={Item_color_2} alt="item_color" />
                  <img src={Item_color_3} alt="item_color" />
                  <img src={Item_color_4} alt="item_color" />
                </div>
                <div className="item__info-size">
                  <p>
                    <span>Size:</span>S
                  </p>
                </div>
                <div className="item__info-size-icon">
                  <p className="size_icon">XS</p>
                  <p className="size_icon_active">S</p>
                  <p className="size_icon">M</p>
                  <p className="size_icon">L</p>
                </div>
                <div className="item__info-size-guide">
                  <img src={Size_guide} alt="" />
                  Size guide
                </div>
                <div className="item__info-line"></div>
                <div className="item__info-cost">
                  <div className="item__info-price">$ 379.99</div>
                  <div className="item__info-add-to-card">Add to card</div>
                  <img src={Heart} alt="icon" />
                  <img src={Scale} alt="icon" />
                </div>
                <div className="item__info-line"></div>
                <div className="item__info-conditions">
                  <p>
                    <img src={Shipping} alt="icon" />
                    Shipping & Delivery
                  </p>
                  <p>
                    <img src={Returns} alt="icon" />
                    Returns & Exchanges
                  </p>
                  <p>
                    <img src={Ask} alt="icon" />
                    Ask a question
                  </p>
                </div>
                <div className="item__info-checkout">
                  <div className="item__info-checkout-safe">
                    <p>guaranteed safe checkout</p>
                    <p className="item__info-checkout-safe-line"></p>
                  </div>

                  <div className="item__info-pay">
                    <img src={Pay1} alt="pay" />
                    <img src={Pay2} alt="pay" />
                    <img src={Pay3} alt="pay" />
                    <img src={Pay4} alt="pay" />
                    <img src={Pay5} alt="pay" />
                    <img src={Pay6} alt="pay" />
                    <img src={Pay7} alt="pay" />
                  </div>
                  <div className="item__info-line"></div>
                  <div className="item__info-description">DESCRIPTION</div>
                  <div className="item__info-line"></div>
                  <div className="item__info-additional">
                    <p>ADDITIONAL INFORMATION</p>
                    <p>
                      Color: <span>Blue, White, Black, Grey</span>
                    </p>
                    <p>
                      Size: <span>XS, S, M, L</span>
                    </p>
                    <p>
                      Material: <span>100% Polyester</span>
                    </p>
                  </div>
                  <div className="item__info-line"></div>
                  <div className="item__info-reviews">
                    <p>REVIEWS</p>
                    <div className="item__info-score-reviews">
                      <div className="item__score-star">
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <p>2 Reviews</p>
                      </div>
                      <p>
                        <img src={Review} alt="icon" /> Write a review
                      </p>
                    </div>
                    <div className="item__review">
                      <div className="item__review-title">
                        <div className="item__review-title-name">
                          Oleh Chabanov
                        </div>
                        <div className="item__review-title-data">
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                        </div>
                      </div>
                      <div className="item__review-contain">
                        On the other hand, we denounce with righteous
                        indignation and like men who are so beguiled and
                        demoralized by the charms of pleasure of the moment
                      </div>
                    </div>
                    <div className="item__review">
                      <div className="item__review-title">
                        <div className="item__review-title-name">
                          ShAmAn design
                        </div>
                        <div className="item__review-title-data">
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                          <img src={Star} alt="star" />
                        </div>
                      </div>
                      <div className="item__review-contain">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                      </div>
                    </div>
                  </div>
                  <div className="item__info-line"></div>
                </div>
              </div>



              
            </div>

            <div className="related-products">
              <div className="related-products__title">
                <div>RELATED PRODUCTS</div>
                <p>
                  <img className="swiper-button-next-out-related" src={Left} alt="icon" />
                  <img className="swiper-button-prev-out-related" src={Right} alt="icon" />
                </p>
              </div>


              <Slider_R  buttons={Navigation_RELATED}/>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
