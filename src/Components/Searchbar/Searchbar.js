import React from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

const Searchbar = ({ onSubmit, inputChange, value }) => {
  return (
    <>
      <header className="searchbar">
        <form className="search_form">
          <button
            type="submit"
            className="search_form-button"
            onClick={onSubmit}
          >
            <span className="search_form-button-label">Search</span>
          </button>

          <input
            className="search_form-input"
            type="text"
            name="text"
            value={value}
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
