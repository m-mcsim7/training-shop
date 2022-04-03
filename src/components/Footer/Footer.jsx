import React from "react";
import { Link } from "react-router-dom";
import { useAddEmailMutation } from "../../redux/buttonEmail/reducer";
import SocialIcons from "../../components/Header/SocialIcons";

import pay1 from "../../img/icons/pay/pay1.svg";
import pay2 from "../../img/icons/pay/pay2.svg";
import pay3 from "../../img/icons/pay/pay3.svg";
import pay4 from "../../img/icons/pay/pay4.svg";
import pay5 from "../../img/icons/pay/pay5.svg";
import pay6 from "../../img/icons/pay/pay6.svg";
import pay7 from "../../img/icons/pay/pay7.svg";

import "./Footer.css";

function Footer() {
  const [email, setEmail] = React.useState("");
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState(
    "E-mail не может быть пустым"
  );
  const [formValid, setFormValid] = React.useState(false);
  const [addEmail, { isLoading, error, isError }] = useAddEmailMutation();

  const mailAdd = {
    mail: email,
  };
  const handleAddEmail = async () => {
   await addEmail(mailAdd);
   !isError &&  setEmail("");
   setFormValid(false);
   setReturnMessage(true)
   isError &&  error.originalStatus === 200 && setEmail('')

 };

  React.useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError("Некорректный e-mail");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = () => setEmailDirty(true);

  const[returnMessage, setReturnMessage] = React.useState(false)


  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__input">
              <div className="footer__input-text">BE IN TOUCH WITH US:</div>

              <form className="footer__input-input">
                <input
                  data-test-id="footer-mail-field"
                  onBlur={(e) => blurHandler(e)}
                  value={email}
                  onChange={(e) => {
                     emailHandler(e);
                     setReturnMessage(false)}}
                  className="footer__input-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                {emailDirty && emailError && (
                  <div className="bigbanner__email-error-footer">
                    {emailError}
                  </div>
                )}
                {returnMessage && isError &&
                  (error.originalStatus !== 200 ? (
                    <div className="bigbanner__email-error-footer">
                      Ошибка при отправке почты
                    </div>
                  ) : (
                    <div className="bigbanner__email-notEerror-footer">
                      Почта отправлена успешно
                    </div>
                  ))}
                <button
                  className={
                    isLoading
                      ? "footer__input-button loading-f"
                      : "footer__input-button"
                  }
                  data-test-id="footer-subscribe-mail-button"
                  disabled={!formValid || isLoading}
                  onClick={(e) => {
                    handleAddEmail();
                    e.preventDefault();
                  }}
                >
                  Join Us
                </button>
              </form>

              <SocialIcons />
            </div>
            <div className="footer__rows">
              <ul className="footer__column">
                <li>Categories</li>
                <li>
                  <Link to="/men">Men</Link>
                </li>
                <li>
                  <Link to="/women">Women</Link>
                </li>
                <li>
                  <Link to="/accessories">Accessories</Link>
                </li>
                <li>
                  <Link to="/beauty">Beauty</Link>
                </li>
              </ul>
              <ul className="footer__column">
                <li>Infomation</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>FAQs</li>
              </ul>
              <ul className="footer__column">
                <li>Useful links</li>
                <li>Terms & Conditions</li>
                <li>Returns & Exchanges</li>
                <li>Shipping & Delivery</li>
                <li>Privacy Policy</li>
              </ul>
              <ul className="footer__column">
                <li>CONTACT US</li>
                <li>Belarus, Gomel, Lange 17</li>
                <li>+375 29 100 20 30</li>
                <li>All week 24/7</li>
                <li>info@clevertec.ru</li>
              </ul>
            </div>
            <div className="footer__pay">
              <div className="footer__copyright">
                Copyright © 2032 all rights reserved
              </div>
              <div className="footer__pay-line">
                <div>
                  <img src={pay1} alt="pay" />
                </div>
                <div>
                  <img src={pay2} alt="pay" />
                </div>
                <div>
                  <img src={pay3} alt="pay" />
                </div>
                <div>
                  <img src={pay4} alt="pay" />
                </div>
                <div>
                  <img src={pay5} alt="pay" />
                </div>
                <div>
                  <img src={pay6} alt="pay" />
                </div>
                <div>
                  <img src={pay7} alt="pay" />
                </div>
              </div>
              <div className="footer__link">
                <a href="https://clevertec.ru/">Clevertec.ru/training</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
