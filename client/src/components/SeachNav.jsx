import React, { useState } from "react";
import "../scss/components/SearchNav.scss";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function SeachNav() {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/items?search=${value}`);
  };
  return (
    <div className="search-container">
      {/*TODO: agregar link home */}
      <Link to="/">
        <img className="nav-logo" src="/assets/Logo_ML.png" alt="logo" />
      </Link>
      <form className="nav-search-form" onSubmit={handleSubmit}>
        <input
          className="search-box-input"
          placeholder="Nunca dejes de buscar"
          type="text"
          value={value}
          onChange={handleChange}
        />

        <button className="nav-search-btn" type="submit" value="Submit">
          <div className="nav-icon-search">
            <img src="/assets/ic_Search.png" alt="logo" />
          </div>
        </button>
      </form>
      {/*       
      <input
        className="search-box-input"
        type="text"
        placeholder="Nunca dejes de buscar"
        onChange={handleChange}
      ></input>
      <button className="nav-search-btn" onClick={handleSubmit}>
        <div className="nav-icon-search">
          <img src="/assets/ic_Search.png" alt="logo" />
        </div>
      </button> */}
    </div>
  );
}
