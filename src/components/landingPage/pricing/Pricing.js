import React from "react";
import { Link } from "react-router-dom";
import Plans from "./Plans";

const Pricing = () => {
  return (
    <section className="pricing-section" id="landing-page-pricing">
      <div className="container">
        <header className="pricing-section__header sections-margin-bottom">
          <p className="sections-subtitle">Pricing</p>
          <h2 className="sections-title">
            Eating well without breaking the bank{" "}
          </h2>
        </header>
        <div className="pricing-section__cards">
          <article className="pricing-section__card starter--card">
            <p className="pricing-section__card-subtitle center-text">
              Starter
            </p>
            <p className="pricing-section__card-price center-text">
              <span>$</span>399
            </p>
            <p className="pricing-section__card-description center-text">
              per month. That's just $13 per meal!
            </p>
            <ul className="pricing-section__card-list">
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>1 meal per day
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>
                Order from 11am to 9pm
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>
                Delivery is free
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&times;</span>
              </li>
            </ul>
            <Link className="btn main-btn price-section--link" to="#">
              Start eating well
            </Link>
          </article>
          <article className="pricing-section__card compelete--card">
            <p className="pricing-section__card-subtitle center-text">
              Complete
            </p>
            <p className="pricing-section__card-price center-text">
              <span>$</span>649
            </p>
            <p className="pricing-section__card-description center-text">
              per month. That's just $11 per meal!
            </p>
            <ul className="pricing-section__card-list">
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>2 meal per day
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>
                Order 24/7
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>
                Delivery is free
              </li>
              <li className="pricing-section__card-list-item">
                <span className="list-icons">&#10003;</span>
                Get access to latest recipes
              </li>
            </ul>
            <Link className="btn main-btn price-section--link" to="#">
              Start eating well
            </Link>
          </article>
        </div>
        <p className="price-section__description-text center-text">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
        <Plans />
      </div>
    </section>
  );
};

export default Pricing;
