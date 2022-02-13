import React from 'react';
import Facebook from "../../img/icons/facebook.svg";
import Twitter from "../../img/icons/twitter.svg";
import Instagram from "../../img/icons/instagram.svg";
import Pinterest from "../../img/icons/pinterest.svg";

function SocialIcons() {
  return (
   <ul className="top__social">
   <li>
     <a className="top__social-facebook" href="https://m-mcsim7.github.io/training-shop/">
        <img src={Facebook} alt="icon" />
     </a>
   </li>
   <li>
     <a className="top__social-twitter" href="https://m-mcsim7.github.io/training-shop/">
     <img src={Twitter} alt="icon" />
     </a>
   </li>
   <li>
     <a className="top__social-instagram" href="https://m-mcsim7.github.io/training-shop/">
     <img src={Instagram} alt="icon" />
     </a>
   </li>
   <li>
     <a className="top__social-pinteerst" href="https://m-mcsim7.github.io/training-shop/">
     <img src={Pinterest} alt="icon" />
     </a>
   </li>
 </ul>
 );
}

export default SocialIcons;
