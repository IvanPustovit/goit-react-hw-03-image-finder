import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

import "./ImageGallery.css";

const ImageGallery = ({ images, toggleModal }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(img => (
          <ImageGalleryItem {...img} key={img.id} toggleModal={toggleModal} />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  toggleModal: PropTypes.func,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default ImageGallery;
