import PropTypes from 'prop-types';
import './ImageGalleryItem.scss';

function ImageGalleryItem({ id, webformatURL }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt={id}
        id={id}
      />
    </li>
  );
}

export { ImageGalleryItem };

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
