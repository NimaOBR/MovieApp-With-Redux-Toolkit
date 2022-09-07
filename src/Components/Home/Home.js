import React, { useEffect } from "react";

//scss
import "./Home.scss";

// Components
import MovieList from "../MovieList/MovieList";

// common api movie
import movieApi from "../../common/apis/movieApi";
// ApiKey
import { ApiKey } from "../../common/apis/movieApiKey";

// react redux
import { useDispatch } from "react-redux";

// Component Movie in Redux
import { featchAcyncMovies, featchAcyncSeries } from "../../redux/movies/MovieSlice";


const Home = () => {
    const dispatch= useDispatch()
    const MovieText = 'the n'
    const SeriesText = 'game of '
  useEffect(() => {
    dispatch(featchAcyncSeries(MovieText))
    dispatch(featchAcyncMovies(SeriesText))
    
  }, [dispatch]);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieList />
    </div>
  );
};

export default Home;
