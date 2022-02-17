import React from "react";
import Star_grey from "../../img/icons/star_grey.png";
import Star_gold from "../../img/icons/star_gold.png";

function Rating(props) {
  console.log(props.rating);

  return (
    <div className="item__card-score">
      <img src={Star_gold} alt="icon_star" />
      { props.rating > 2 ? <img src={Star_gold} alt="icon_star" /> : <img src={Star_grey} alt="icon_star" />}
      { props.rating > 3 ? <img src={Star_gold} alt="icon_star" /> : <img src={Star_grey} alt="icon_star" />}
      { props.rating > 4 ? <img src={Star_gold} alt="icon_star" /> : <img src={Star_grey} alt="icon_star" />}
      { props.rating > 5 ? <img src={Star_gold} alt="icon_star" /> : <img src={Star_grey} alt="icon_star" />}
    </div>
  );
}

export default Rating;
