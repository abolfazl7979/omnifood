import React from "react";
import pauseIcon from "../../../resources/imgs/svgIcons/pause-outline.svg";
import leafIcon from '../../../resources/imgs/svgIcons/leaf-outline.svg';
import appleIcon from '../../../resources/imgs/svgIcons/nutrition-outline.svg';
import ribbonIcon from '../../../resources/imgs/svgIcons/ribbon-outline.svg';


const Plans = () => {
  return (
    <section className="price-section__plans-items">
      <article className="price-section__plans-item">
        <div className="price-section__plans-img-container">
          <img
            className="price-section__plans-icon"
            alt="ribbon icon"
            src={ribbonIcon}
          />
        </div>
        <p className="price-section__plans-item-title">Never cook again!</p>
        <p className="price-section__plans-item-paragraph">
          Our subscriptions cover 365 days per year, even including major
          holidays.{" "}
        </p>
      </article>
      <article className="price-section__plans-item">
        <div className="price-section__plans-img-container">
          <img
            className="price-section__plans-icon"
            alt="nutrition icon"
            src={appleIcon}
          />
        </div>
        <p className="price-section__plans-item-title">Local and organic</p>
        <p className="price-section__plans-item-paragraph">
          Our cooks only use local, fresh, and organic products to prepare your
          meals.
        </p>
      </article>
      <article className="price-section__plans-item">
        <div className="price-section__plans-img-container">
          <img
            className="price-section__plans-icon"
            alt="leaf icon"
            src={leafIcon}
          />
        </div>
        <p className="price-section__plans-item-title">No waste</p>
        <p className="price-section__plans-item-paragraph">
          All our partners only use reusable containers to package all your
          meals.
        </p>
      </article>
      <article className="price-section__plans-item">
        <div className="price-section__plans-img-container">
          <img
            className="price-section__plans-icon"
            alt="pause icon"
            src={pauseIcon}
          />
        </div>
        <p className="price-section__plans-item-title">Pause anytime</p>
        <p className="price-section__plans-item-paragraph">
          Going on vacation? Just pause your subscription, and we refund unused
          days.
        </p>
      </article>
    </section>
  );
};

export default Plans;
