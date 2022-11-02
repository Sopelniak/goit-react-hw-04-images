import PropTypes from 'prop-types';
import './Button.scss';

function Button({ onBtnClick }) {
  return (
    <button className="Button" type="button" onClick={onBtnClick}>
      Load more
    </button>
  );
}

export { Button };

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
