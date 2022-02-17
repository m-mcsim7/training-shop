//import React from "react";
//import { Link } from "react-router-dom";
//import { PRODUCTS } from "../../products/products.js";

//import item_men_1 from "../../img/images/item_men/item_men_1.jpg";
//import item_men_2 from "../../img/images/item_men/item_men_2.jpg";
//import item_men_5 from "../../img/images/item_men/item_men_3.jpg";
//import item_men_6 from "../../img/images/item_men/item_men_4.jpg";
//import item_men_3 from "../../img/images/item_men/item_men_5.jpg";
//import item_men_7 from "../../img/images/item_men/item_men_6.jpg";
//import item_men_4 from "../../img/images/item_men/item_men_7.jpg";
//import item_men_8 from "../../img/images/item_men/item_men_8.jpg";
//import item_women_7 from "../../img/images/item_woman/item_women_1.jpg";
//import item_women_3 from "../../img/images/item_woman/item_women_2.jpg";
//import item_women_6 from "../../img/images/item_woman/item_women_3.jpg";
//import item_women_2 from "../../img/images/item_woman/item_women_4.jpg";
//import item_women_5 from "../../img/images/item_woman/item_women_5.jpg";
//import item_women_1 from "../../img/images/item_woman/item_women_6.jpg";
//import item_women_8 from "../../img/images/item_woman/item_women_7.jpg";
//import item_women_4 from "../../img/images/item_woman/item_women_8.jpg";

////const CardsItem = Products;

//const number = PRODUCTS.men.map((item) => [
//  {
//    name: item.name,
//    price: item.price,
//    images: item.images[0].url,
//    rating: item.rating,
//    discount: item.discount,
//    id: item.id,
//  },
//  "men",
//]);
//const number2 = PRODUCTS.women.map((item) => [
//  {
//    name: item.name,
//    price: item.price,
//    images: item.images[0].url,
//    rating: item.rating,
//    discount: item.discount,
//    id: item.id,
//  },
//  "women",
//]);

//const items = [...number, ...number2]
////console.log(PRODUCTS.men.name)
////console.log(number);
//console.log(items);

////const items = [
////  {
////    img: item_women_1,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 1,
////  },
////  {
////    img: item_women_2,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00   $ 60.00",
////    score: "",
////    id: 2,
////  },
////  {
////    img: item_women_3,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 3,
////  },
////  {
////    img: item_women_4,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 4,
////  },
////  {
////    img: item_women_5,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 5,
////  },
////  {
////    img: item_women_6,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 6,
////  },
////  {
////    img: item_women_7,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 7,
////  },
////  {
////    img: item_women_8,
////    gender: "women",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 8,
////  },
////  {
////    img: item_men_1,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 1,
////  },
////  {
////    img: item_men_2,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 2,
////  },
////  {
////    img: item_men_3,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 3,
////  },
////  {
////    img: item_men_4,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 4,
////  },
////  {
////    img: item_men_5,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 5,
////  },
////  {
////    img: item_men_6,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 6,
////  },
////  {
////    img: item_men_7,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 7,
////  },
////  {
////    img: item_men_8,
////    gender: "men",
////    title: "Women's tracksuit Q109",
////    price: "$ 30.00",
////    score: "",
////    id: 8,
////  },
////];

//function Item_card(props) {
//  let item = props.product_item;
//  let genderItems = items.filter((e) => e.gender == item);
//  let id_card = "clothes-card-" + item;

//  return (
//    <div className="sort__items">
//      {genderItems.map((a, index) => (
//        <Link
//          to={`/${item}/${a.id}`}
//          data-test-id={id_card}
//          key={index}
//          className="item__card"
//        >
//          <div className="item__card-img">
//            <img src={a.img} alt="item" />
//          </div>
//          <div className="item__card-title">{a.title}</div>
//          <div className="item__card-suptitle">
//            <div className="item__card-price">{a.price}</div>
//            <div className="item__card-score"></div>
//          </div>
//        </Link>
//      ))}
//    </div>
//  );
//}

//export default Item_card;
