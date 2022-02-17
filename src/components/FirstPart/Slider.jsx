import React from "react";
import img1 from "../../img/images/big_banner.jpg";
import img2 from "../../img/images/banner_woman.jpg";
import img3 from "../../img/images/banner_man.jpg";
import img4 from "../../img/images/banner_accessories.jpg";

import slider_left from "../../img/icons/left.svg";
import slider_right from "../../img/icons/right.svg";

const img = [
  <img1 src={img1} key={1} />,
  <img1 src={img2} key={2} />,
  <img1 src={img3} key={3} />,
  <img1 src={img4} key={4} />,
];

//const [activeIndex, setActiveIndex] = useState(0);

//// Хук Effect
//useEffect(() => {
//   // Запускаем интервал
//   const interval = setInterval(() => {
//       // Меняем состояние
//       setActiveIndex((current) => {
//           // Вычисляем индекс следующего слайда, который должен вывестись
//           const res = current === img.length - 1 ? 0 : current + 1
//           // Возвращаем индекс
//           return res
//       })
//   }, 3000)
//   // Выключаем интервал
//   return () => clearInterval()
//}, [])

//// Вычисляем индекс предыдущего слайда
//const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
//// Вычисляем индекс следующего слайда
//const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

function Slider() {
  return (
    <div className="banners__big">
      <div className="banners__bg-title">
        <div className="slider_left" >
          <img src={slider_left} alt="icon" />
        </div>
        <span>Banner</span>
        your Title text
        <div className="slider_right">
          <img src={slider_right} alt="icon" />
        </div>
      </div>
      <img src={img1} alt="big_banner" />
    </div>
  );
}

export default Slider;
