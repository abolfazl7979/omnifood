import React from "react";
import appImage1 from "../../resources/imgs/app/app-screen-1.png";
import appImage2 from "../../resources/imgs/app/app-screen-2.png";
import appImage3 from "../../resources/imgs/app/app-screen-3.png";

const HowItWorks = () => {
  return (
    <section className="h-i-w-section" id="landing-page-how">
      <div className="container">
        <header className="h-i-w-section__header sections-margin-bottom">
          <p className="sections-subtitle">How it works</p>
          <h2 className="sections-title">
            Your daily dose of health in 3 simple steps{" "}
          </h2>
        </header>
        <div className="h-i-w-section__items">
          <article className="h-i-w-section__item">
            <div className="h-i-w-section__item-content">
              <p className="h-i-w-section__item-number">01</p>
              <h3 className="h-i-w-section__item-title">
                Tell us what you like (and what not)
              </h3>
              <p className="h-i-w-section__item-paragraph">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!{" "}
              </p>
            </div>
            <div className="h-i-w-section__item-img-container">
              <img
                className="h-i-w-section__item-img"
                alt="iPhone app
                preferences selection screen"
                src={appImage1}
              />
            </div>
          </article>
          <article className="h-i-w-section__item">
            <div className="h-i-w-section__item-content">
              <p className="h-i-w-section__item-number">02</p>
              <h3 className="h-i-w-section__item-title">
                Approve your weekly meal plan
              </h3>
              <p className="h-i-w-section__item-paragraph">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>
            <div className="h-i-w-section__item-img-container">
              <img
                className="h-i-w-section__item-img"
                alt="iPhone app
                meal approving plan screen"
                src={appImage2}
              />
            </div>
          </article>
          <article className="h-i-w-section__item">
            <div className="h-i-w-section__item-content">
              <p className="h-i-w-section__item-number">03</p>
              <h3 className="h-i-w-section__item-title">
                Receive meals at convenient time
              </h3>
              <p className="h-i-w-section__item-paragraph">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div className="h-i-w-section__item-img-container">
              <img
                className="h-i-w-section__item-img"
                alt="iPhone app
                delivery screen"
                src={appImage3}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
