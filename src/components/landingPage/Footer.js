import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import omnifoodLogo from "../../resources/imgs/omnifood-logo.png";
import facebookLogo from "../../resources/imgs/svgIcons/logo-facebook.svg";
import instagramLogo from "../../resources/imgs/svgIcons/logo-instagram.svg";
import twitterLogo from "../../resources/imgs/svgIcons/logo-twitter.svg";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <nav className="footer-section__nav">
          <div className="footer-section-nav__brand-content">
            <figure className="footer-section__logo-container">
              <LinkS
                activeClass="active"
                to="landing-page-hero"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {" "}
                <img
                  className="footer-section__logo"
                  alt="Omnifood logo"
                  src={omnifoodLogo}
                />
              </LinkS>
            </figure>
            <article className="footer-section__icons">
              <Link className="footer-section__icon-link" to="#">
                <img
                  className="footer-section__icon"
                  alt="facebook icon"
                  src={facebookLogo}
                />
              </Link>
              <Link className="footer-section__icon-link" to="#">
                <img
                  className="footer-section__icon"
                  alt="insagram icon"
                  src={instagramLogo}
                />
              </Link>
              <Link className="footer-section__icon-link" to="#">
                <img
                  className="footer-section__icon"
                  alt="twiiter icon"
                  src={twitterLogo}
                />
              </Link>
            </article>
            <p className="footer-section__copy-right">
              Copyright © 2027 by Omnifood, Inc. All rights reserved.
            </p>
          </div>
          <ul className="footer-section-nav__list">
            <li className="footer-section-nav__list-title">contact us</li>
            <li className="footer-section-nav__list-address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </li>
            <li className="footer-section__list-item list-item--no-margin-bottom">
              <Link className="footer-section__nav-link" to="tel:415-201-6370">
                415-201-6370
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link
                className="footer-section__nav-link"
                to="mailto:hello@omnifood.com"
              >
                hello@omnifood.com
              </Link>
            </li>
          </ul>
          <ul className="footer-section-nav__list">
            <li className="footer-section-nav__list-title">account</li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Create account
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Sign in
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                iOS app
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Android app
              </Link>
            </li>
          </ul>
          <ul className="footer-section-nav__list">
            <li className="footer-section-nav__list-title">company</li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                About Omnifood
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                For Business
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Cooking partners
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Careers
              </Link>
            </li>
          </ul>
          <ul className="footer-section-nav__list">
            <li className="footer-section-nav__list-title">Resources</li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Recipe directory
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Help center
              </Link>
            </li>
            <li className="footer-section__list-item">
              <Link className="footer-section__nav-link" to="#">
                Privacy & terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
