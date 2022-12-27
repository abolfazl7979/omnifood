import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImageMin from "../../../resources/imgs/hero-min.png";
import heroImageWebp from "../../../resources/imgs/hero.webp";
import heroImagePng from "../../../resources/imgs/hero.png";
import Delivered from "./Delivered";

const Hero = ({ setAddSticky }) => {
  const heroSection = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const ent = entries[0];

        if (!ent.isIntersecting) {
          setAddSticky(true);
        }
        if (ent.isIntersecting) {
          setAddSticky(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-175px",
      }
    );
    obs.observe(heroSection.current);
  }, []);

  return (
    <section className="hero-section" ref={heroSection} id = 'landing-page-hero'>
      <div className="hero">
        <div className="hero-section__content">
          <h1 className="hero-section__title">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-section__paragraph">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.{" "}
          </p>
          <div className="hero-section__links-container">
            <Link className="btn main-btn" to="#">
              Start eating well
            </Link>
            <Link className="btn outline--btn" to="#">
              Learn more &darr;
            </Link>
          </div>
          <Delivered />
        </div>
        <div className="hero-section__img-container">
          <picture>
            <source
              srcSet={heroImageWebp}
              type="image/webp"
            />
            <source
              srcSet={heroImagePng}
              type="image/png"
            />
            <img
              className="hero-section__img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              src={heroImageMin}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
