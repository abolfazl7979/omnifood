import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <p>
        The page you are looking for seems absent on our servers, if you think
        otherwise, feel free to contact our support staff.
      </p>
      <Link to="/omnifood">Home</Link>
    </div>
  );
};

export default NotFoundPage;
