import React from "react";
import { useAddEmailMutation } from "../../redux/buttonEmail/reducer";
import BigBannerWoman from "../../img/images/woman.png";
import BigBannerMan from "../../img/images/man.png";
import "./FifthPart.css";

function FifthPart() {
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

  console.log(formValid)
//  isError &&
//  (error.originalStatus !== 200 ? setFormValid(false) : setFormValid(true))

  return (
    <div>
      <div className="bigbanner">
        <div className="container">
          <div className="bigbanner__wrapper">
            <img className="bigbanner_woman" src={BigBannerWoman} alt="woman" />
            <img className="bigbanner_man" src={BigBannerMan} alt="man" />
            <div className="bigbanner__contain">
              <p className="bigbanner__subtitle">Special Offer</p>
              <p className="bigbanner__title">
                Subscribe
                <br />
                and <span>Get 10% Off</span>
              </p>
              <form>
                <input
                  data-test-id="main-subscribe-mail-field"
                  onBlur={(e) => blurHandler(e)}
                  value={email}
                  onChange={(e) => emailHandler(e)}
                  className="bigbanner__email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                {emailDirty && emailError && (
                  <div className="bigbanner__email-error">{emailError}</div>
                )}
                {isError &&
                  (error.originalStatus !== 200 ? (
                    <div className="bigbanner__email-error">
                      Ошибка при отправке почты
                    </div>
                  ) : (
                    <div className="bigbanner__email-notEerror">
                      Почта отправлена успешно
                    </div>
                  ))}
                <button
                  data-test-id="main-subscribe-mail-button"
                  className={
                    isLoading
                      ? "bigbanner__button loading"
                      : "bigbanner__button"
                  }
                  disabled={!formValid || !isError}
                  onClick={(e) => {
                    handleAddEmail();
                    e.preventDefault();
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPart;
