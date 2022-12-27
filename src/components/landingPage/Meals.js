import React from "react";
import { Link } from "react-router-dom";
import meal1 from "../../resources/imgs/meals/meal-1.jpg";
import meal2 from "../../resources/imgs/meals/meal-2.jpg";
import flameFire from "../../resources/imgs/svgIcons/flame-outline.svg";
import spoonAndFork from "../../resources/imgs/svgIcons/restaurant-outline.svg";
import star from "../../resources/imgs/svgIcons/star-outline.svg";

const Meals = () => {
  return (
    <section className="meals-section" id="landing-page-meals">
      <div className="container">
        <header className="meals-section__header sections-margin-bottom center-text">
          <p className="sections-subtitle">Meals</p>
          <h2 className="sections-title">
            Omnifood AI chooses from 5,000+ recipes{" "}
          </h2>
        </header>
        <div className="meals-section__content">
          <article className="meals-section__item">
            <img
              className="meals-section__item-img"
              alt="Japanese Gyozas"
              src={meal1}
            />
            <div className="meals-section__item-content">
              <div className="meals-section__item-label-container">
                <span className="meals-section__item-label item-label--vegetarian">
                  Vegetarian
                </span>
              </div>
              <p className="meals-section__item-title">Japanese Gyozas</p>
              <ul className="meals-section__item-list">
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={flameFire}
                  />
                  <strong>650</strong> calories
                </li>
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={spoonAndFork}
                  />
                  NutriScore ® &nbsp;<strong>74</strong>
                </li>
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={star}
                  />
                  <strong>4.9</strong> rating (537)
                </li>
              </ul>
            </div>
          </article>
          <article className="meals-section__item">
            <img
              className="meals-section__item-img"
              alt="Avocado Salad"
              src={meal2}
            />
            <div className="meals-section__item-content">
              <div className="meals-section__item-label-container">
                <span className="meals-section__item-label item-label--vegan">
                  Vegan
                </span>
                <span className="meals-section__item-label item-label--paleo">
                  Paleo
                </span>
              </div>
              <p className="meals-section__item-title">Avocado Salad</p>
              <ul className="meals-section__item-list">
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={flameFire}
                  />
                  <strong>400</strong> calories
                </li>
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={spoonAndFork}
                  />
                  NutriScore ® &nbsp;<strong>92</strong>
                </li>
                <li className="meals-section__item-list-item">
                  <img
                    className="meals-section__item-icon"
                    alt="icon"
                    src={star}
                  />
                  <strong>4.8</strong> rating (441)
                </li>
              </ul>
            </div>
          </article>
          <div className="meals-section__list-container">
            <h3 className="meals-section__list-title">Works with any diet:</h3>
            <ul className="meals-section__list">
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Vegetarian
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Vegan
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Pescatarian
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Gluten-free
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Lactose-free
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Keto
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Paleo
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Low FODMAP
              </li>
              <li className="meals-section__list-item">
                <span className="list-icons">&#10003;</span>
                Kid-friendly
              </li>
            </ul>
          </div>
        </div>
        <p className="meals-section__paragraph-for-link">
          <Link className="meals-section__link" to="#">
            See all recipes &rarr;
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Meals;
