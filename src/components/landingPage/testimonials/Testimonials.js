import React from "react";
import Gallaries from "./Gallaries";
import ben from "../../../resources/imgs/customers/ben.jpg";
import dave from "../../../resources/imgs/customers/dave.jpg";
import hannah from "../../../resources/imgs/customers/hannah.jpg";
import steve from "../../../resources/imgs/customers/steve.jpg";


const Testimonials = () => {
  return (
    <section className="testimonials-section" id="landing-page-testimonials">
      <div className="testimonial--container">
        <div className="testimonials-section__content">
          <header className="testimonials-section__header sections-margin-bottom">
            <p className="sections-subtitle">Testimonials</p>
            <h2 className="sections-title">
              Once you try it, you can't go back
            </h2>
          </header>
          <div className="testimonials-section__testimonials">
            <article className="testimonials-section__testimonial-item">
              <img
                className="testimonials-section__testimonial-img"
                alt="Photo of customer Dave Bryson"
                src={dave}
              />
              <p className="testimonials-section__testimonial-paragraph">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.{" "}
              </p>
              <p className="testimonials-section__testimonial-name">
                — Dave Bryson
              </p>
            </article>
            <article className="testimonials-section__testimonial-item">
              <img
                className="testimonials-section__testimonial-img"
                alt="Photo of customer Ben Hadley"
                src={ben}
              />
              <p className="testimonials-section__testimonial-paragraph">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </p>
              <p className="testimonials-section__testimonial-name">
                — Ben Hadley
              </p>
            </article>
            <article className="testimonials-section__testimonial-item">
              <img
                className="testimonials-section__testimonial-img"
                alt="Photo of customer Steve Miller"
                src={steve}
              />
              <p className="testimonials-section__testimonial-paragraph">
                Omnifood is a life saver! I just started a company, so there's
                no time for cooking. I couldn't live without my daily meals now!
              </p>
              <p className="testimonials-section__testimonial-name">
                — Steve Miller
              </p>
            </article>
            <article className="testimonials-section__testimonial-item">
              <img
                className="testimonials-section__testimonial-img"
                alt="Photo of customer Hannah Smith"
                src={hannah}
              />
              <p className="testimonials-section__testimonial-paragraph">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </p>
              <p className="testimonials-section__testimonial-name">
                — Hannah Smith
              </p>
            </article>
          </div>
        </div>
        <Gallaries />
      </div>
    </section>
  );
};

export default Testimonials;
