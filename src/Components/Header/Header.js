import React, { useEffect, useState } from "react";

// scss
import "./Header.scss";

// react router dom @6.3.0
import { Link } from "react-router-dom";

// image
import imageuser from "../../images/imageuser.png";

// react icons
import { AiOutlineSearch } from "react-icons/ai";

// react-redux
import { useDispatch } from "react-redux";
import { featchAcyncMovies, featchAcyncSeries} from "../../redux/movies/MovieSlice";

// redux components

const Header = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch()
  const SubmitHandeler = (e)=>{
    e.preventDefault()
    if(search === '') return alert('Please fill in the search field')
    dispatch(featchAcyncMovies(search))
    dispatch(featchAcyncSeries(search))
    setSearch('')
  }

  
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-input">
        <form onSubmit={(e)=>SubmitHandeler(e)}>
        <input
          type="text"
          value={search}
          placeholder="Search ..."
          onChange={(e) => setSearch(e.target.value)}
          />
        <button type='submit'>
          <AiOutlineSearch />
        </button>
          </form>
      </div>
      <div className="imgage-user">
        <img src={imageuser} alt="user" />
      </div>
    </div>
  );
};

export default Header;
