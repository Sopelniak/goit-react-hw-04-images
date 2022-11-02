import PropTypes from 'prop-types';
import './Searchbar.scss';

function Searchbar({ onSubmit }) {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <input
            className="SearchForm-input"
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className="SearchForm-button" type="submit">
            <span className="SearchForm-button-label">Search</span>
          </button>
        </form>
      </header>
    </>
  );
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
