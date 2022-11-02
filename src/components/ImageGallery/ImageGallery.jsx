import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.scss';

function ImageGallery({ imgs, onClickItem }) {
  return (
    <ul onClick={onClickItem} id="ImageGallery" className="ImageGallery">
      {imgs.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            id={img.id}
            webformatURL={img.webformatURL}
            largeImageURL={img.largeImageURL}
          />
        );
      })}
    </ul>
  );
}

export { ImageGallery };

ImageGallery.propTypes = {
  imgs: PropTypes.array.isRequired,
  onClickItem: PropTypes.func.isRequired,
};
