import React from "react";
import customer1 from "../../../resources/imgs/customers/customer-1.jpg";
import customer2 from "../../../resources/imgs/customers/customer-2.jpg";
import customer3 from "../../../resources/imgs/customers/customer-3.jpg";
import customer4 from "../../../resources/imgs/customers/customer-4.jpg";
import customer5 from "../../../resources/imgs/customers/customer-5.jpg";
import customer6 from "../../../resources/imgs/customers/customer-6.jpg";

const Delivered = () => {
  return (
    <div className="delivered-section">
      <div className="delivered-section__images">
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer1}
        />
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer2}
        />
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer3}
        />
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer4}
        />
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer5}
        />
        <img
          className="delivered-images__image"
          alt="customer photo"
          src={customer6}
        />
      </div>
      <p className="delivered-section__paragraph">
        <span className="delivered__primary-color">250,000+</span> meals
        delivered last year!{" "}
      </p>
    </div>
  );
};

export default Delivered;
