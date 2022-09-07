import React, { useEffect } from "react";

// react redux
import { useDispatch, useSelector } from "react-redux";

// react router dom @6.3.0
import { useParams } from "react-router-dom";

// redux components
import {
  featchAcyncSeriesOurMovieDetail,
  getSeriesOurMovieDetail,
  removeSeriesOurMovieDetail,
} from "../../redux/movies/MovieSlice";

// scss
import "./MovieDetails.scss";

// react icons
import { RiStarFill } from "react-icons/ri";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsFilm } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

// image
import Spiner from '../../images/Spinner.gif'

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSeriesOurMovieDetail);
  useEffect(() => {
    dispatch(featchAcyncSeriesOurMovieDetail(imdbID));
    return () => {
      dispatch(removeSeriesOurMovieDetail());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <img src={Spiner} alt='spiner'/>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating : &nbsp;
                <RiStarFill color="#ff9c00" />
                &nbsp;
                {data.imdbRating}
              </span>
              <span>
                IMDB Votes : &nbsp;
                <BsHandThumbsUp color="red" />
                &nbsp;
                {data.imdbVotes}
              </span>
              <span>
                Runtime : &nbsp;
                <BsFilm color="pink" /> &nbsp;
                {data.Runtime}
              </span>
              <span>
                Year : &nbsp;
                <AiOutlineCalendar color="#fafa" /> &nbsp;
                {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>language</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
