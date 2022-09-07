import React from "react";

// react redux
import { useSelector } from "react-redux";

// component Movie in redux
import { getAllMovies, getAllSeries } from "../../redux/movies/MovieSlice";

// Componnts
import MovieCard from "../MovieCard/MovieCard";

//scss
import "./MovieList.scss";

// image
import Spiner from "../../images/Spinner.gif";

// raact slick
import Slider from "react-slick";

// common setting.js
import { Settings } from "../../common/settings";

const MovieList = () => {
  const movie = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  let renderMovies,
    renderSeries = "";
  renderMovies =
    movie.Response === "True" ? (
      movie.Search.map((item, index) => <MovieCard key={index} data={item} />)
    ) : (
      <div className="error-movie">
        <h3>{movie.Error}</h3>
      </div>
    );
  renderSeries =
    series.Response === "True" ? (
      series.Search.map((item, index) => <MovieCard key={index} data={item} />)
    ) : (
      <div className="error-movie">
        <h3>{series.Error}</h3>
      </div>
    );

  return (
    <>
      {Object.keys(movie, series).length === 0 ? (
        <img src={Spiner} alt="spiner" className="spiner-loading" />
      ) : (
        <div className="movie-wrapper">
          <div className="movie-list">
            <h1>Movies</h1>
            <div className="movie-container">
              <Slider {...Settings}>{renderMovies}</Slider>
            </div>
          </div>
          <div className="series-list">
            <h1>Series</h1>
            <div className="series-container">
              <Slider {...Settings}>{renderSeries}</Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
