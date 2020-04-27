import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ currentPage }) => {
  return (
    <button className="Button" onClick={currentPage}>
      Show more
    </button>
  );
};

Button.propTypes = {
  currentPage: PropTypes.func.isRequired,
};

export default Button;
