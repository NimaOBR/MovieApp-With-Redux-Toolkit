// @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// MoviesSlice
import movieReducer from "./movies/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    series: movieReducer,
    seriesourMovie: movieReducer,
  },
});
