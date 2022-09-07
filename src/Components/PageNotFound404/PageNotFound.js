import React from "react";

//scss
import "./PageNotFound.scss";

// Link react router dom
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-notfound">
      <h1>
        <span>4</span>04
      </h1>
      <br />
      <p>
        Page Not Found ... back to &nbsp;<Link to="/"> Home</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
