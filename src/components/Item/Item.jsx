import React from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../products/products.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setItemInCart, deleteItemFromCart } from "../../redux/cart/reducer";

import Slider from "./Slider";
import Slider_R from "./Slider_R";
import Rating from "../Item_card/Rating";

import Share from "../../img/icons/Share.svg";

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const Navigation = {
    nextEl: ".swiper-button-next-out",
    prevEl: ".swiper-button-prev-out",
  };
  const Navigation_RELATED = {
    nextEl: ".swiper-button-next-out-related",
    prevEl: ".swiper-button-prev-out-related",
  };
  const product_type = "product-page-" + props.product_type;

  const cardID = Object.values(useParams())[0];
  let card;
  const arr = PRODUCTS[props.product_type];
  const arrImages = [];

  for (let i of arr) {
    if (i.id === cardID) {
      card = i;
    }
  }
  const arrColor = card.images.map((item) => item.color);
  const strColor = new Set(arrColor);
  const arrColorIncludes = [...strColor];

  for (let i of card.images) {
    arrImages.push(i.url);
  }

  const card_url = [card.images[0].url];
  for (let i = 1; i < card.images.length; i++) {
    if (card.images[i].color !== card.images[i - 1].color) {
      card_url.push(card.images[i].url);
    }
  }
  const [activeSise, setAativeSise] = React.useState(0);
  const [activeColor, setAativeColor] = React.useState(0);

  useEffect(() => {
    return () => {
      setAativeSise(0);
      setAativeColor(0);
    };
  }, [cardID]);

  const dispatch = useDispatch();

  const cardInCart = Object.assign({}, card);

  cardInCart.images = [card.images[activeColor]];
  cardInCart.sizes = [card.sizes[activeSise]];

  const items = useSelector((state) => state.cart.itemsInCart);

  let itemsStrArr = items.map((item) => JSON.stringify(item));

  let cardInCartStr = JSON.stringify(cardInCart);

  let itemInCard = itemsStrArr.includes(cardInCartStr);

  function hadleClick() {
    itemInCard
      ? dispatch(deleteItemFromCart(cardInCart))
      : dispatch(setItemInCart(cardInCart));
  }

  return (
    <div data-test-id={`product-page-${props.product_type}`}>
      <div className="nav__categoriya">
        <div className="container">
          <div className="nav__categotiya-wrapper">
            <div className="nav_categoriya__chit">
              <ul className="nav__categoriya-link">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={`/${props.product_type}`}>
                    {props.product_type}
                  </Link>
                </li>
                <li>
                  <a href="https://m-mcsim7.github.io/training-shop/">
                    {card.name}
                  </a>
                </li>
              </ul>
              <div className="nav__categoriya-share">
                <img src={Share} alt="share" />
                <p>Share</p>
              </div>
            </div>
            <div className="nav__categoriya-title">{card.name}</div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="container">
          <div className="item__wrapper">
            <div className="item__score-all">
              <div className="item__score">
                <Rating rating={card.rating} />
                <p>{card.reviews.length} Reviews</p>
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
              <div className="item__slider-wrapper">
                <div className="swiper-button-prev-out"></div>
                <div className="swiper-button-next-out"></div>

                <Slider buttons={Navigation} images={arrImages} />
              </div>
              <div className="item__info">
                <div className="item__info-color">
                  <p>
                    <span>COLOR:</span>
                    <p className="card_color">
                      {arrColorIncludes[activeColor]}
                    </p>
                  </p>
                </div>
                <div className="item__info-color-foto">
                  {card_url.map((item, index) => (
                    <img
                      className={
                        activeColor === index
                          ? "color-img _active"
                          : "color-img"
                      }
                      onClick={() => setAativeColor(index)}
                      key={index}
                      src={`https://training.cleverland.by/shop${item}`}
                      alt="item_color"
                    />
                  ))}
                </div>

                <div className="item__info-size">
                  <p>
                    <span>Size:</span>
                    {card.sizes[activeSise]}
                  </p>
                </div>
                <div className="item__info-size-icon">
                  {card.sizes.map((item, index) => (
                    <p
                      className={
                        activeSise === index ? "size_icon _active" : "size_icon"
                      }
                      key={index}
                      onClick={() => setAativeSise(index)}
                    >
                      {item}
                    </p>
                  ))}
                </div>

                <div className="item__info-size-guide">
                  <img src={Size_guide} alt="" />
                  Size guide
                </div>
                <div className="item__info-line"></div>
                <div className="item__info-cost">
                  <div className="item__info-price">
                    ${" "}
                    {card.discount
                      ? Math.round(
                          (card.price -
                            (card.price / 100) * card.discount.slice(1, -1)) *
                            100
                        ) / 100
                      : card.price}
                    {card.discount && (
                      <span className="item__info-price-sale">
                        $ {card.price}
                      </span>
                    )}
                  </div>
                  <div className="item__info-add-to-card" onClick={hadleClick}
                  data-test-id='add-cart-button'>
                    {itemInCard ? "remove to card" : "Add to card"}
                  </div>
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
                      Color:
                      {arrColorIncludes.map((item, index) => (
                        <span className="card_color" key={index}>
                          {item}
                        </span>
                      ))}
                    </p>
                    <p>
                      Size:
                      {card.sizes.map((item, index) => (
                        <span className="card_sizes" key={index}>
                          {item}
                        </span>
                      ))}
                    </p>
                    <p>
                      Material: <span>{card.material}</span>
                    </p>
                  </div>
                  <div className="item__info-line"></div>
                  <div className="item__info-reviews">
                    <p>REVIEWS</p>
                    <div className="item__info-score-reviews">
                      <div className="item__score-star">
                        <Rating rating={card.rating} />
                        <p>{card.reviews.length} Reviews</p>
                      </div>
                      <p>
                        <img src={Review} alt="icon" /> Write a review
                      </p>
                    </div>

                    {card.reviews.map((item, index) => (
                      <div className="item__review" key={index}>
                        <div className="item__review-title">
                          <div className="item__review-title-name">
                            {" "}
                            {item.name}{" "}
                          </div>

                          <Rating rating={item.rating} />
                        </div>
                        <div className="item__review-contain">{item.text}</div>
                      </div>
                    ))}
                  </div>
                  <div className="item__info-line"></div>
                </div>
              </div>
            </div>

            <div className="related-products">
              <div className="related-products__title">
                <div>RELATED PRODUCTS</div>
                <p>
                  <img
                    className="swiper-button-next-out-related"
                    src={Left}
                    alt="icon"
                  />
                  <img
                    className="swiper-button-prev-out-related"
                    src={Right}
                    alt="icon"
                  />
                </p>
              </div>

              <Slider_R
                products={arr}
                buttons={Navigation_RELATED}
                product_type={props.product_type}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
