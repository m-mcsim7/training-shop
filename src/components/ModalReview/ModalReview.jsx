import React from "react";
import "./ModalReview.css";
import { useAddReviewMutation } from "../../redux/sentReview/sentReview";

import Rating from "../Item_card/Rating";
import Review from "../../img/icons/review.svg";

function ModalReview({ active, setActive, id, card }) {
  const [name, setName] = React.useState("");
  const [review, setReview] = React.useState("");
  const [nameDirty, setNameDirty] = React.useState(false);
  const [reviewDirty, setReviewDirty] = React.useState(false);
  const [nameError, setNameError] = React.useState("Поле не может быть пустым");
  const [reviewError, setReviewError] = React.useState(
    "Поле не может быть пустым"
  );
  const [formValid, setFormValid] = React.useState(false);
  const [addReview, { isLoading, error, isError, data }] =
    useAddReviewMutation();
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "review":
        setReviewDirty(true);
        break;
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!e.target.value) {
      setNameError("Поле не может быть пустым");
    } else {
      setNameError("");
    }
  };
  const reviewHandler = (e) => {
    setReview(e.target.value);
    if (!e.target.value) {
      setReviewError("Поле не может быть пустым");
    } else {
      setReviewError("");
    }
  };
  React.useEffect(() => {
    if (nameError || reviewError || isLoading) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, reviewError, isLoading]);

  const [ratingRadioButton, setRatingRadioButton] = React.useState(1);

  const hahdleRaiting = (e) => {
    setRatingRadioButton(+e.target.value);
  };

  const reviewAdd = {
    id: id,
    name: name,
    text: review,
    rating: ratingRadioButton,
  };
  console.log(reviewAdd);
  const handleAddReview = async () => {
    await addReview(reviewAdd);
    // data && setName("");
    setName("");
    setReview("");
    //setActive(false);
  };

  //---------------------------------------------------------------------------
  const [activModalReview, setActivModalReview] = React.useState(false);

  activModalReview
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "scroll");

  const [reviews, setRevies] = React.useState(card.reviews);
  console.log(reviews.length);

  data && data.reviews.length > reviews.length && setRevies(data.reviews);

  console.log(card);
  console.log(card.rating);
  //---------------------------------------------------------------------------

  return (
    <div>
      <div className="item__info-reviews">
        <p>REVIEWS</p>
        <div className="item__info-score-reviews">
          <div className="item__score-star">
            <Rating rating={card.rating} />
            <p>{reviews.length} Reviews</p>
          </div>
          <p
            data-test-id="review-button"
            className="item__write-review"
            onClick={() => setActivModalReview(true)}
          >
            <img src={Review} alt="icon" /> Write a review
          </p>
        </div>

        {reviews.map((item, index) => (
          <div className="item__review" key={index}>
            <div className="item__review-title">
              <div className="item__review-title-name"> {item.name} </div>

              <Rating rating={item.rating} />
            </div>
            <div className="item__review-contain">{item.text}</div>
          </div>
        ))}
      </div>

      {activModalReview && (
        <div
          className={activModalReview ? "modal active" : "modal"}
          onClick={() => setActivModalReview(false)}
        >
          <div
            data-test-id="review-modal"
            className="modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal_title">Write a review</div>
            <form>
              <div className="simple-rating">
                <div className="simple-rating__items">
                  <input
                    id="simple-rating__5"
                    type="radio"
                    value="5"
                    className="simple-rating__item"
                    name="simple-rating"
                    onChange={hahdleRaiting}
                  />
                  <label
                    for="simple-rating__5"
                    className="simple-rating__label"
                  ></label>
                  <input
                    id="simple-rating__4"
                    type="radio"
                    value="4"
                    className="simple-rating__item"
                    name="simple-rating"
                    onChange={hahdleRaiting}
                  />
                  <label
                    for="simple-rating__4"
                    className="simple-rating__label"
                  ></label>
                  <input
                    id="simple-rating__3"
                    type="radio"
                    value="3"
                    className="simple-rating__item"
                    name="simple-rating"
                    onChange={hahdleRaiting}
                  />
                  <label
                    for="simple-rating__3"
                    className="simple-rating__label"
                  ></label>
                  <input
                    id="simple-rating__2"
                    type="radio"
                    value="2"
                    className="simple-rating__item"
                    name="simple-rating"
                    onChange={hahdleRaiting}
                  />
                  <label
                    for="simple-rating__2"
                    className="simple-rating__label"
                  ></label>
                  <input
                    id="simple-rating__1"
                    type="radio"
                    value="1"
                    className="simple-rating__item"
                    name="simple-rating"
                    onChange={hahdleRaiting}
                  />
                  <label
                    for="simple-rating__1"
                    className="simple-rating__label"
                  ></label>
                </div>
              </div>
              <input
                data-test-id="review-name-field"
                value={name}
                className="modal__name"
                type="text"
                name="name"
                placeholder="Имя"
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => nameHandler(e)}
              />
              {nameDirty && nameError && (
                <div className="modal__nameError">{nameError}</div>
              )}
              <textarea
                data-test-id="review-text-field"
                value={review}
                type="comment"
                className="modal__comment"
                name="review"
                placeholder="Оставьте свой комментарий"
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => reviewHandler(e)}
              />
              {reviewDirty && reviewError && (
                <div className="modal__reviewError">{reviewError}</div>
              )}
              <button
                data-test-id="review-submit-button"
                type="submit"
                className={
                  isLoading ? "modal__submit loading" : "modal__submit"
                }
                name="submit"
                value="Send"
                disabled={!formValid}
                onClick={(e) => {
                  handleAddReview();
                  e.preventDefault();
                }}
              >
                Send
              </button>
              {isError && (
                <div className="modal__reviewError">
                  Ошибка сети при отправке отзыва
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalReview;
