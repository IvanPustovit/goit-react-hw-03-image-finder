import React, { useState } from "react";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = (e) => {
    setModal(!modal);
  };
  const closeModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    setModal(!modal);
  };

  const closeModalKey = () => {
    setModal(!modal);
  };

  return (
    <li className="image_gallery_item">
      {modal && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={closeModal}
          closeModalKey={closeModalKey}
        />
      )}

      <img
        src={webformatURL}
        alt={tags}
        className="image_gallery_item-image"
        onClick={toggleModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
