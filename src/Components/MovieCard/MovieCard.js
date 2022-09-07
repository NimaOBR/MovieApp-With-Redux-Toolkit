import React from "react";

// scss
import "./MovieCard.scss";

// react router dom @6.3.0
import { Link } from "react-router-dom";


const MovieCard = ({ data }) => {
  return (
      <div className="card-item">
      <Link to={`/movie/:${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>
              {data.Year}{" "}
              <span>
                &nbsp;{data.Type.charAt(0).toUpperCase() + data.Type.slice(1)}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
