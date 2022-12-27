import React, { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import omnifoodLogo from "../resources/imgs/omnifood-logo.png";
import closeIcon from "../resources/imgs/svgIcons/close-outline.svg";
import menuIcon from "../resources/imgs/svgIcons/menu-outline.svg";

const Header = ({ addStickyValue }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const onMobileMenuToggleHandler = () => {
    setMobileMenuToggle((prevState) => !prevState);
  };

  let stickyClassName = "";
  if (addStickyValue) {
    stickyClassName = "sticky";
  }
  return (
    <header
      className={
        mobileMenuToggle
          ? `header-section ${stickyClassName} menu-open`
          : `header-section ${stickyClassName}`
      }
    >
      <div className="header-section__img-container">
        <LinkS
          className="header-section__img-link"
          to="landing-page-hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img
            className="header-section__logo-img"
            src={omnifoodLogo}
            alt="Omnifood logo"
          />
        </LinkS>
      </div>
      <nav className="header-section__nav">
        <ul className="header-section__list">
          <li className="header-section__list-item">
            <LinkS
              className="header-section__link"
              activeClass="landing-page-nav-active"
              to="landing-page-how"
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
            >
              How it works
            </LinkS>
          </li>
          <li className="header-section__list-item">
            <LinkS
              className="header-section__link"
              activeClass="landing-page-nav-active"
              to="landing-page-meals"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Meals
            </LinkS>
          </li>
          <li className="header-section__list-item">
            <LinkS
              className="header-section__link"
              activeClass="landing-page-nav-active"
              to="landing-page-testimonials"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              Testimonials
            </LinkS>
          </li>
          <li className="header-section__list-item">
            <LinkS
              className="header-section__link"
              activeClass="landing-page-nav-active"
              to="landing-page-pricing"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Pricing
            </LinkS>
          </li>
          <li className="header-section__list-item">
            <Link className="btn smaller--btn" to="#">
              Try for free
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="header-section__mobile-icons"
        onClick={onMobileMenuToggleHandler}
      >
        <img
          className="header-section__mobile-icon"
          alt={`${mobileMenuToggle ? "close icon" : "menu icon"}`}
          src={mobileMenuToggle ? closeIcon : menuIcon}
        />
      </button>
    </header>
  );
};

export default Header;
