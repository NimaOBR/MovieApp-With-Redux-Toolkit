// redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// movieApi & ApiKey  component
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";


export const featchAcyncMovies = createAsyncThunk(
  "movies/featchAcyncMovies",
  async (search) => {
    const response = await movieApi.get(
      `?apikey=${ApiKey}&s=${search}&type=movie`
    );
    return response.data;
  }
);

export const featchAcyncSeries = createAsyncThunk(
  "movies/featchAcyncSeries",
  async (search) => {
    const response = await movieApi.get(
      `?apikey=${ApiKey}&s=${search}&type=series`
    );
    return response.data;
  }
);
export const featchAcyncSeriesOurMovieDetail = createAsyncThunk(
  "movies/featchAcyncSeriesOurMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${ApiKey}&i=${id.slice(1)}&Plot=full`);
    console.log(response);
    return response.data;
  }
  );


const initialState = {
  movies: {},
  series: {},
  selectSeriesOurMovie: {},
};
export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSeriesOurMovieDetail:(state)=>{
      state.selectSeriesOurMovie = {}
    }
  },
  extraReducers: {
    [featchAcyncMovies.pending]: () => {
      console.log("panding ...");
    },
    [featchAcyncMovies.fulfilled]: (state, { payload }) => {
      console.log("SuccessFully in get data");
      return { ...state, movies: payload };
    },
    [featchAcyncMovies.rejected]: (state) => {
      console.log("rejected");
    },
    [featchAcyncSeries.pending]: (state) => {
      console.log("panding ...");
    },
    [featchAcyncSeries.fulfilled]: (state, { payload }) => {
      console.log("SuccessFully in get data");
      return { ...state, series: payload };
    },
    [featchAcyncSeries.rejected]: (state) => {
      console.log("rejected");
    },
    [featchAcyncSeriesOurMovieDetail.fulfilled]: (state, { payload }) => {
      console.log("SuccessFully in get data");
      return { ...state, selectSeriesOurMovie: payload };
    },
  },
});

export const { removeSeriesOurMovieDetail } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.series.series;
export const getSeriesOurMovieDetail = (state) => state.seriesourMovie.selectSeriesOurMovie;
export default MovieSlice.reducer;
