import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./filter.css";
import { PRODUCTS } from "../../products/products.js";
import Item_card_filter from "./Item_card_filter";

import view1 from "../../img/icons/view1.svg";
import view2 from "../../img/icons/view2.svg";
import filter from "../../img/icons/filter.svg";
import filter_activ from "../../img/icons/filter_activ.svg";
import further from "../../img/icons/item__further.svg";

function Filter(props) {
  let gender = props.product_item;

  //----------------------------------------------------color---------------------------------------
  const colorChekBox = PRODUCTS[gender].map((item, index) =>
    item.images.map((item) => item.color)
  );
  let colorChekBoxIncludes = [...new Set(colorChekBox.flat())];
  colorChekBoxIncludes.sort();
  const colorArr = ["color", colorChekBoxIncludes];
  const [color, setColor] = useState([]);
  console.log(color.length);

  let newProductsColorChekBox = PRODUCTS[gender];
  const colorChekBoxId = PRODUCTS[gender].map((item, index) => ({
    id: item.id,
    color: item.images.map((item) => item.color),
  }));
  let idArr = [];
  for (let i of color) {
    for (let k of colorChekBoxId) {
      if (k.color.indexOf(i) !== -1) {
        idArr.push(k.id);
      }
    }
  }
  idArr = [...new Set(idArr)];
  let newProductsColor = [];
  for (let i of newProductsColorChekBox) {
    for (let k of idArr) {
      if (k === i.id) {
        newProductsColor.push(i);
      }
    }
  }
  const handleToggle = (item) => {
    const newColor = [...color];
    let booleanColor = newColor.includes(item);
    if (booleanColor === false) {
      newColor.push(item);
    } else {
      newColor.splice(color.indexOf(item), 1);
    }
    setColor(newColor);
  };
  //----------------------------------------------------size---------------------------------------
  const sizeChekBox = PRODUCTS[gender].map((item, index) => item.sizes);

  let sizeChekBoxIncludes = [...new Set(sizeChekBox.flat())];
  sizeChekBoxIncludes.sort();

  const sizeArr = ["size", sizeChekBoxIncludes];
  const [size, setSize] = useState([]);

  let newProductsSizeChekBox = PRODUCTS[gender];
  const sizeChekBoxId = PRODUCTS[gender].map((item, index) => ({
    id: item.id,
    size: item.sizes,
  }));

  let idArrSize = [];
  for (let i of size) {
    for (let k of sizeChekBoxId) {
      if (k.size.indexOf(i) !== -1) {
        idArrSize.push(k.id);
      }
    }
  }
  idArrSize = [...new Set(idArrSize)];
  let newProductsSize = [];
  for (let i of newProductsSizeChekBox) {
    for (let k of idArrSize) {
      if (k === i.id) {
        newProductsSize.push(i);
      }
    }
  }
  const handleToggleSize = (item) => {
    const newSize = [...size];
    let booleanSize = newSize.includes(item);
    if (booleanSize === false) {
      newSize.push(item);
    } else {
      newSize.splice(size.indexOf(item), 1);
    }
    setSize(newSize);
  };
  //----------------------------------------------------Brand---------------------------------------
  const brandChekBox = PRODUCTS[gender].map((item, index) => item.brand);
  let brandChekBoxIncludes = [...new Set(brandChekBox.flat())];
  brandChekBoxIncludes.sort();
  const brandArr = ["brand", brandChekBoxIncludes];
  const [brand, setBrand] = useState([]);

  let newProductsBrandChekBox = PRODUCTS[gender];
  const brandChekBoxId = PRODUCTS[gender].map((item, index) => ({
    id: item.id,
    brand: item.brand,
  }));
  let idArrBrand = [];
  for (let i of brand) {
    for (let k of brandChekBoxId) {
      if (k.brand.indexOf(i) !== -1) {
        idArrBrand.push(k.id);
      }
    }
  }
  idArrBrand = [...new Set(idArrBrand)];

  let newProductsBrand = [];
  for (let i of newProductsBrandChekBox) {
    for (let k of idArrBrand) {
      if (k === i.id) {
        newProductsBrand.push(i);
      }
    }
  }
  const handleToggleBrand = (item) => {
    const newBrand = [...brand];
    let booleanBrand = newBrand.includes(item);
    if (booleanBrand === false) {
      newBrand.push(item);
    } else {
      newBrand.splice(brand.indexOf(item), 1);
    }
    setBrand(newBrand);
  };
  console.log(brand);
  //----------------------------------------------------Price---------------------------------------
  const priceChekBox = PRODUCTS[gender].map((item, index) => item.price);

  let priceChekBoxIncludes = [
    "$0 - $50",
    "$50 - $100",
    "$100 - $150",
    "$150 - $200",
    "$200 - $250",
    "$250 - $300",
  ];

  const priceArr = ["price", priceChekBoxIncludes];
  const [price, setPrice] = useState([]);

  let newProductsPriceChekBox = PRODUCTS[gender];
  const priceChekBoxId = PRODUCTS[gender].map((item, index) => ({
    id: item.id,
    price: item.price,
  }));

  let idArrPrice = [];

  for (let i of priceChekBoxId) {
    for (let k of price) {
      let arr = k.split(" - ");
      let arrNumber = arr.map((item) => +item.slice(1));
      if (i.price > arrNumber[0] && i.price < arrNumber[1]) {
        idArrPrice.push(i.id);
      }
    }
  }

  let newProductsPrice = [];
  for (let i of newProductsPriceChekBox) {
    for (let k of idArrPrice) {
      if (k === i.id) {
        newProductsPrice.push(i);
      }
    }
  }

  const handleTogglePrice = (item) => {
    const newPrice = [...price];
    let booleanPrice = newPrice.includes(item);
    if (booleanPrice === false) {
      newPrice.push(item);
    } else {
      newPrice.splice(price.indexOf(item), 1);
    }
    setPrice(newPrice);
  };
  //----------------------------------------------Удаляем чекбокс-------------------------------------------
  //  const linkPage = Object.values(useParams());
  //   console.log(linkPage)
  console.log(gender);

  React.useEffect(() => {
    return () => {
      setColor([]);
      setBrand([]);
      setSize([]);
      setPrice([]);
      setFilterActive(false);
    };
  }, [gender]);

  //----------------------------------------------Выводим текст-------------------------------------------

  const colorText = color.map((item) => "color:" + item);
  const sizeText = size.map((item) => "size:" + item);
  const brandText = brand.map((item) => "brand:" + item);
  const priceText = price.map((item) => "price:" + item);

  const textFilterArr = [
    ...[colorText],
    ...[sizeText],
    ...[brandText],
    ...[priceText],
  ].flat();

  let textFilterStr = textFilterArr.join("");

  //---------------------------------------------Объеденяем массивы----------------------------------------------

  let newProductsColorId = newProductsColor.map((item) => item.id);
  let newProductsColorIdIncludes = [...new Set(newProductsColorId)];
  let newProductsSizeId = newProductsSize.map((item) => item.id);
  let newProductsSizeIdIncludes = [...new Set(newProductsSizeId)];
  let newProductsBrandId = newProductsBrand.map((item) => item.id);
  let newProductsBrandIdIncludes = [...new Set(newProductsBrandId)];
  let newProductsPriceId = newProductsPrice.map((item) => item.id);
  let newProductsPriceIdIncludes = [...new Set(newProductsPriceId)];

  let newProductsIdArr = [
    [newProductsColorIdIncludes],
    [newProductsSizeIdIncludes],
    [newProductsBrandIdIncludes],
    [newProductsPriceIdIncludes],
  ];
  let newProductsId = newProductsIdArr.flat(2);
  let newProductsIdIncludes = [];
  var result = newProductsId.reduce(function (acc, el) {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  const arrLength = [
    newProductsColorIdIncludes.length,
    newProductsSizeIdIncludes.length,
    newProductsBrandIdIncludes.length,
    newProductsPriceIdIncludes.length,
  ];
  let arrLengthZero = 0;
  for (let i of arrLength) {
    if (i === 0) {
      arrLengthZero = arrLengthZero + 1;
    }
  }
  for (let value in result) {
    if (result[value] >= 4 - arrLengthZero) {
      newProductsIdIncludes.push(value);
    }
  }
  let newProducts = [];
  for (let i of PRODUCTS[gender]) {
    for (let k of newProductsIdIncludes) {
      if (k === i.id) {
        newProducts.push(i);
      }
    }
  }
  let newProductsIncludes = [...new Set(newProducts)];

  const [filterActive, setFilterActive] = useState(false);

  return (
    <div>
      <div className="filter">
        <div className="container">
          <div className="filter__wrapper">
            <div className="filter__items">
              <div className="filter__filter">
                <div
                  data-test-id="filter-button"
                  onClick={() => {
                    setFilterActive(!filterActive);
                  }}
                  className={
                    filterActive ? "filter_icon _active" : "filter_icon"
                  }
                >
                  <p>filter</p>
                </div>
                {/*<p>filter</p>*/}
              </div>

              <div className="filter__view">
                <img src={view1} alt="view" />
                <img src={view2} alt="view" />
              </div>
            </div>
          </div>
        </div>
        {filterActive && (
          <div
            data-test-id={`filters-${gender}`}
            className={
              filterActive
                ? "filter__wrapper_rows"
                : "filter__wrapper_rows _none"
            }
          >
            <div className="filter__rows">
              <div className="filter__column">
                <h2>{colorArr[0]}</h2>
                <div
                  data-test-id={`filters-color`}
                  className="filter__column_ul"
                >
                  {colorArr[1].map((item, index) => (
                    <label key={index}>
                      <input
                        className="checkbox"
                        type="checkbox"
                        data-test-id={`filters-${colorArr[0]}-${item}`}
                        value={item}
                        checked={color.indexOf(item) > -1}
                        onChange={() => handleToggle(item)}
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter__column">
                <h2>{sizeArr[0]}</h2>
                <div
                  data-test-id={`filters-size`}
                  className="filter__column_ul"
                >
                  {sizeArr[1].map((item, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        data-test-id={`filters-${sizeArr[0]}-${item}`}
                        value={item}
                        checked={size.indexOf(item) > -1}
                        onChange={() => handleToggleSize(item)}
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter__column">
                <h2>{brandArr[0]}</h2>
                <div
                  data-test-id={`filters-brand`}
                  className="filter__column_ul"
                >
                  {brandArr[1].map((item, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        data-test-id={`filters-${brandArr[0]}-${item}`}
                        value={item}
                        checked={brand.indexOf(item) > -1}
                        onChange={() => handleToggleBrand(item)}
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter__column">
                <h2>{priceArr[0]}</h2>
                <div className="filter__column_ul">
                  {priceChekBoxIncludes.map((item, index) => (
                    <label key={index}>
                      <input
                        type="checkbox"
                        value={item}
                        checked={price.indexOf(item) > -1}
                        onChange={() => handleTogglePrice(item)}
                      />{" "}
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {textFilterArr.length > 0 && (
          <div
            className={
              filterActive ? "filer_active_text" : "filer_active_text _none"
            }
          >
            {newProductsIncludes.length + " items Found"}
            {textFilterArr.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
      </div>
      <div className="items">
        <div className="continer">
          <div className="items_wrapper">
            <div className="sort__items">
              <Item_card_filter
                product_item={gender}
                newProductsIncludes={newProductsIncludes}
                arrLengthZero={arrLengthZero}
              />
            </div>
            <div className="item__further">
              <img src={further} alt="item__further" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
