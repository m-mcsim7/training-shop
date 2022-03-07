import React from "react";

import { PRODUCTS } from "../../products/products.js";

import Item_color_1 from "../../img/images/item_color1.jpg";
import Item_color_2 from "../../img/images/item_color2.jpg";
import Item_color_3 from "../../img/images/item_color3.jpg";
import Item_color_4 from "../../img/images/item_color4.jpg";

function Icon_color() {
  return (
    <div className="item__info-color-foto">
      <img src={Item_color_1} alt="item_color" />
      <img src={Item_color_2} alt="item_color" />
      <img src={Item_color_3} alt="item_color" />
      <img src={Item_color_4} alt="item_color" />
    </div>
  );
}

export default Icon_color;
