import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { imgsRequest } from 'services/api';
import Loader from './Loader/Loader';
import '../index.css';

function App() {
  const [imgs, setImgs] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ imgToModal: null, isModalOpen: false });

  useEffect(() => {
    const fetchImgs = async () => {
      try {
        setIsLoading(true);
        setError('');

        const imgsData = await imgsRequest(searchValue, page);
        if (imgsData.hits.length === 0) {
          alert('There are no offers for your request!');
        } else if (page === 1) {
          setImgs(imgsData.hits);
        } else {
          setImgs([...imgs, ...imgsData.hits]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (page === 1 && searchValue === '') return;

    fetchImgs();
  }, [searchValue, page]);

  const onSubmit = e => {
    const { value } = e.target.elements.search;
    e.preventDefault();
    setSearchValue(value);
    setPage(1);
  };

  const onClickItem = e => {
    if (e.target.id === 'ImageGallery') {
      return;
    }
    const selectedImg = imgs.find(img => img.id === Number(e.target.id));
    setModal({ isModalOpen: true, imgToModal: selectedImg });
  };

  const onCloseModal = () => {
    setModal({ isModalOpen: false, imgToModal: null });
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const isShownBtnLoadMore = imgs.length > 0;
  return (
    <div className="App">
      {!!error && <p>{error}</p>}
      {isLoading && <Loader />}
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery imgs={imgs} onClickItem={onClickItem} />
      {isShownBtnLoadMore && <Button onBtnClick={onLoadMore} />}
      {modal.isModalOpen && (
        <Modal imgToModal={modal.imgToModal} onCloseModal={onCloseModal} />
      )}
    </div>
  );
}
export { App };
