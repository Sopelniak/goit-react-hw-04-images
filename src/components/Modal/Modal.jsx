import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Modal.scss';

function Modal({ imgToModal, onCloseModal }) {
  useEffect(() => {
    const onKeyUp = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [onCloseModal]);

  const onClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={imgToModal.largeImageURL} alt={imgToModal.id} />
      </div>
    </div>
  );
}

export { Modal };

Modal.propTypes = {
  imgToModal: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
  onCloseModal: PropTypes.func.isRequired,
};
