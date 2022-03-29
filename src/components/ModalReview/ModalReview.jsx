import React from "react";
import "./ModalReview.css";
import { useAddReviewMutation } from "../../redux/sentReview/sentReview";

function ModalReview({ active, setActive, id }) {
  const [name, setName] = React.useState("");
  const [review, setReview] = React.useState("");
  const [nameDirty, setNameDirty] = React.useState(false);
  const [reviewDirty, setReviewDirty] = React.useState(false);
  const [nameError, setNameError] = React.useState("Поле не может быть пустым");
  const [reviewError, setReviewError] = React.useState(
    "Поле не может быть пустым"
  );
  const [formValid, setFormValid] = React.useState(false);
  const [addReview, { isLoading, error, isError, data }] = useAddReviewMutation();
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



  const [ratingRadioButton, setRatingRadioButton] = React.useState();

  const hahdleRaiting = (e) => {
    setRatingRadioButton(e.target.value);
  };

  const reviewAdd = {
    id: id,
    name: name,
    text: review,
    rating: ratingRadioButton,
  };
  const handleAddReview = async () => {
   await addReview(reviewAdd);
   data && 
   setName('');
   setReview('');
   setActive(false);
 };
 console.log(reviewAdd)

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
            value={name}
            className="modal__name"
            type="text"
            name="name"
            placeholder="Имя"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => nameHandler(e)}
          />
          {nameDirty && nameError && <div className="modal__nameError">{nameError}</div>}
          <textarea
            value={review}
            type="comment"
            className="modal__comment"
            name="review"
            placeholder="Оставьте свой комментарий"
            onBlur={(e) => blurHandler(e)}
            onChange={(e) => reviewHandler(e)}
          />
          {reviewDirty && reviewError && <div className="modal__reviewError">{reviewError}</div>}
          <button
            type="submit"
            className={
               isLoading
                 ? "modal__submit loading"
                 : "modal__submit"
             }
            name="submit"
            value="Send"
            disabled={!formValid}
            onClick={(e) => {
              handleAddReview();
              e.preventDefault();
            }}
          >Send</button>
          {isError && <div className="modal__reviewError">Ошибка сети при отправке отзыва</div>}
        </form>
      </div>
    </div>
  );
}

export default ModalReview;
