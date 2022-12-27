import React from "react";
import businessInsider from "../../resources/imgs/logos/business-insider.png";
import forbes from "../../resources/imgs/logos/forbes.png";
import techcrunch from "../../resources/imgs/logos/techcrunch.png";
import theNewYorkTimes from "../../resources/imgs/logos/the-new-york-times.png";
import usaToday from "../../resources/imgs/logos/usa-today.png";

const Companies = () => {
  return (
    <section className="companies-section">
      <div className="companies">
        <p className="companies-section__subtitle center-text">
          As featured in
        </p>
        <div className="companies-section__images-container">
          <img
            className="comapanies-section__img"
            alt="Techcrunch logo"
            src={techcrunch}
          />
          <img
            className="comapanies-section__img"
            alt="Business Insider logo"
            src={businessInsider}
          />
          <img
            className="comapanies-section__img"
            alt="The New York Times logo"
            src={theNewYorkTimes}
          />
          <img className="comapanies-section__img" alt="Forbes logo" src={forbes} />
          <img
            className="comapanies-section__img"
            alt="Usa Todaylogo"
            src={usaToday}
          />
        </div>
      </div>
    </section>
  );
};

export default Companies;
