import React, { useState } from 'react';
import Modal from 'components/Modal/Modal';

export const ImageGalleryItem = props => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={props.webformatURL}
        onClick={toggleModal}
        alt=""
      />
      {showModal && (
        <Modal
          alt={props.alt}
          modalImg={props.largeImageURL}
          closeModal={toggleModal}
        />
      )}
    </li>
  );
};
