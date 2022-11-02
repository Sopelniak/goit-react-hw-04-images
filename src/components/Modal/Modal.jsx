import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import './Modal.scss';

function Modal({ imgToModal, onCloseModal }) {
  const [loaded, setLoaded] = useState(false);
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

  const onLoad = () => {
    setLoaded(true);
  };

  const classImg = loaded ? null : 'notShown';

  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img
          className={classImg}
          src={imgToModal.largeImageURL}
          alt={imgToModal.id}
          onLoad={onLoad}
        />
        {!loaded && <Loader />}
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
