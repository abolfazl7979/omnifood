import React, { useState } from "react";
import womanEating from "../../resources/imgs/eating.jpg";

const CallToAction = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [hearedLoc, setHearedLoc] = useState("");

  const onFullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onHearedLocChangeHandler = (e) => {
    setHearedLoc(e.target.value);
  };
  const onFormSubmitionHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="c-t-a-section">
      <div className="c-t-a__container">
        <div className="c-t-a-section__content">
          <header className="c-t-a-section__header">
            <h2 className="sections-title">Get your first meal for free!</h2>
            <p className="c-t-a-section__paragraph">
              {" "}
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!{" "}
            </p>
          </header>
          <form
            className="c-t-a-section__form"
            onSubmit={onFormSubmitionHandler}
          >
            <div className="c-t-a-section__input-container">
              <label
                className="c-t-a-section-form__inputs-label"
                htmlFor="full-name-id"
              >
                full name
              </label>
              <input
                className="c-t-a-section-form__input"
                type="text"
                value={fullName}
                onChange={onFullNameChangeHandler}
                id="full-name-id"
                placeholder="John Smith"
              />
            </div>
            <div className="c-t-a-section__input-container">
              <label
                className="c-t-a-section-form__inputs-label"
                htmlFor="email-id"
              >
                Email address
              </label>
              <input
                className="c-t-a-section-form__input"
                type="email"
                value={email}
                onChange={onEmailChangeHandler}
                id="email-id"
                placeholder="John.S2023@gmail.com"
              />
            </div>
            <div className="c-t-a-section__input-container">
              <label
                className="c-t-a-section-form__inputs-label"
                htmlFor="heared-location-id"
              >
                When did you hear from us?
              </label>
              <select
                className="c-t-a-section-form__input"
                value={hearedLoc}
                onChange={onHearedLocChangeHandler}
                placeholder="asdasd"
                id="heared-location-id"
              >
                <option className="c-t-a-section-form__option" value="">
                  Please choose one option:
                </option>
                <option
                  className="c-t-a-section-form__option"
                  value="Friends and family"
                >
                  Friends and family
                </option>
                <option
                  className="c-t-a-section-form__option"
                  value="Youtube video"
                >
                  Youtube video
                </option>
                <option className="c-t-a-section-form__option" value="Podcast">
                  Podcast
                </option>
                <option
                  className="c-t-a-section-form__option"
                  value="Facebook ad"
                >
                  Facebook ad
                </option>
                <option className="c-t-a-section-form__option" value="Others">
                  Others
                </option>
              </select>
            </div>
            <button className="c-t-a-section-form__button" type="submit">
              Sign up now
            </button>
          </form>
        </div>
        <div className="c-t-a-section__img-container">
          <img
            className="c-t-a-section__img"
            alt="Woman enjoying food"
            src={womanEating}
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
