import React from "react";

// react router dom @6.3.0
import { Route, Routes } from "react-router-dom";

// scss
import "./App.scss";

// Componets
import Home from "./Components/Home/Home";
import MovieDetails from "./Components/MovieDetals/MovieDetails";
import PageNotFound from "./Components/PageNotFound404/PageNotFound";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
