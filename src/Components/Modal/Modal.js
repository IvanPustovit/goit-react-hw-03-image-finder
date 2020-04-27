import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ largeImageURL, tags, closeModal, closeModalKey }) => {
  const closeModalWithKey = useCallback(
    e => {
      if (e.key === "Escape") {
        closeModalKey();
      }
    },
    [closeModalKey],
  );
  useEffect(() => {
    window.addEventListener("keydown", closeModalWithKey);
  }, [closeModalWithKey]);

  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", closeModalWithKey);
    };
  }, [closeModalWithKey]);

  return (
    <div className="Overlay" onClick={closeModal}>
      <div className="Modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  closeModalKey: PropTypes.func.isRequired,
};
export default Modal;
