import React from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

const Searchbar = ({ onSubmit, inputChange }) => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={onSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={inputChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Searchbar;
