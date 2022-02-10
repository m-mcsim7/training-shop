import React from "react";
import blog_1 from "../../img/images/blog1.jpg"
import blog_2 from "../../img/images/blog2.jpg"
import blog_3 from "../../img/images/blog3.jpg"
import "./SixthPart.css";

function SixthPart() {
  return (
    <div>
      <div className="blog">
        <div className="container">
          <div className="blog__wrapper">
            <div className="blog__title">
              <p>LATEST FROM BLOG</p>
              <p>SEE ALL</p>
            </div>
            <div className="blog__rows">
              <div className="blog__columm">
                <img src={blog_1} alt="blog" />
                <div className="blog__info">
                  <p className="blog__info-title">Easiest Way to Break</p>
                  <p className="blog__info-contetnt">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
              <div className="blog__columm">
                <img src={blog_2} alt="blog" />
                <div className="blog__info">
                  <p className="blog__info-title">Wedding Season</p>
                  <p className="blog__info-contetnt">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
              <div className="blog__columm">
                <img src={blog_3} alt="blog"/>
                <div className="blog__info">
                  <p className="blog__info-title">Recent Favorites On Repeat</p>
                  <p className="blog__info-contetnt">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleas and praising pain was bor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixthPart;
