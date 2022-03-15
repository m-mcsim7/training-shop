import React from "react";
//import { PRODUCTS } from "../../products/products.js";
import { useSelector } from "react-redux";
import {
  deleteItemFromCart,
  addQuantity,
  delQuantity,
} from "../../redux/cart/reducer";
import { useDispatch } from "react-redux";

import basket from "../../img/icons/item__basket.svg";
import basket_closed from "../../img/icons/basket_closed.svg";

import "./Cart.css";

function Cart(props) {
  const [isCartMenuVisible, setIsCartMenuVisible] = props.menuVisible;

  const items = useSelector((state) => state.cart.itemsInCart);

  let totalPrice = items.reduce(
    (acc, item) =>
      (acc += item.discount
        ? (Math.round(
            (item.price - (item.price / 100) * item.discount.slice(1, -1)) * 100
          ) /
            100) *
          item.quantity
        : item.price * item.quantity),
    0
  );

  const dispatch = useDispatch();

  const [quantityItemInCard, setQuantityItemInCard] = React.useState(1);
  isCartMenuVisible
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  return (
    <div
      className={isCartMenuVisible ? "cart__wrapper _active" : "cart__wrapper"}
      onClick={() =>
        isCartMenuVisible ? setIsCartMenuVisible(!isCartMenuVisible) : null
      }
      data-test-id="cart"
    >
      <div
        className={
          isCartMenuVisible ? "cart__container _active" : "cart__container"
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="cart__title">
          shopping cart
          <div className="cart__close">
            <img
              src={basket_closed}
              alt="icon"
              onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
          </div>
        </div>
        {items.length > 0 ? (
          <div className="cart__info">
            <ul className="cart__link">
              <li>Item in Cart</li>
              <li>Delivery Info</li>
              <li>Payment</li>
            </ul>
            <div className="cart__item">
              {items.map((item, index) => (
                <div className="cart__item__container" data-test-id="cart-card">
                  <div className="cart__item__wrapper" key={index}>
                    <div className="cart__item__img">
                      <img
                        src={`https://training.cleverland.by/shop${item.images[0].url}`}
                        alt="item"
                      />
                    </div>
                    <div className="cart__item__info">
                      <div className="cart__item__name">{item.name}</div>
                      <div className="cart__item__cize">
                        <p className="cart__item__tittle">
                          {item.images[0].color}
                        </p>
                        <p className="cart__item__color">{item.sizes[0]}</p>
                      </div>

                      <div className="cart_price_wrapper">
                      <div className="cart__number">
                        <div
                          className="cart__item__numder__remove"
                          data-test-id="minus-product"
                          onClick={() => dispatch(delQuantity(item))}
                        >
                          -
                        </div>
                        <div>
                          {item.quantity > 0
                            ? item.quantity
                            : dispatch(deleteItemFromCart(item))}
                        </div>

                        <div
                          className="cart__item__numder__add"
                          data-test-id="plus-product"
                          onClick={() => dispatch(addQuantity(item))}
                        >
                          +
                        </div>
                      </div>




<div className="cart_item_price_total">
<div className="cart__item__price">
                        ${" "}
                        {item.discount
                          ? (
                              (Math.round(
                                (item.price -
                                  (item.price / 100) *
                                    item.discount.slice(1, -1)) *
                                  100
                              ) /
                                100) *
                              item.quantity
                            ).toFixed(2)
                          : (item.price * item.quantity).toFixed(2)}
                      </div>
                      <div
                        className="cart__item__basket"
                        data-test-id="remove-product"
                        onClick={() => dispatch(deleteItemFromCart(item))}
                      >
                        <img src={basket} alt="icon" />
                      </div>

</div>
</div>



                    </div>
                  </div>
                  <div className="cart__item__line"></div>
                </div>
              ))}
            </div>
            <div className="cart_total">
              Total{" "}
              <span>
                ${totalPrice.toFixed(2)}
                {/*{Math.round(totalPrice * 100) / 100}*/}
              </span>
            </div>
            <div className="button__further">Further</div>
            <div
              className="button__view_cart"
              onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            >
              View Cart
            </div>
          </div>
        ) : (
          <div className="cart__empty">
            <div className="cart__empty__title">Sorry, your cart is empty</div>
            <div
              className="button__empty"
              onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            >
              back to shoping
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
