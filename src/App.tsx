import { useState, useEffect } from 'react';
import { animateScroll } from 'react-scroll';
import Loader from 'react-loader-spinner';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Container from './components/Container';
import fetchImages from './services/apiService';
import IImage from './interfaces/App.interfaces';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<IImage[]>([]);
  const [largeImage, setLargeImage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    fetchData();
  }, [searchQuery]);

  const onChangeQuery = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const fetchData = () => {
    setIsLoading(true);
    fetchImages(searchQuery, currentPage)
      .then(response => {
        setImages(prev => [...prev, ...response.hits]);
        setCurrentPage(prev => (prev += 1));
      })
      .finally(() => setIsLoading(false));
  };

  const handleClick = () => {
    fetchData();
    scrollToBottom();
  };

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  const updateData = (largeImage: string) => {
    setLargeImage(largeImage);
  };

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'endView',
    });
  };

  return (
    <div className="App">
      <SearchBar onSubmit={onChangeQuery} />
      <ImageGallery
        images={images}
        onClick={toggleModal}
        updateData={updateData}
      />
      <Container>
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#3f51b5"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
      </Container>
      {images.length > 0 && <Button onClick={handleClick} id="endView" />}

      {isOpen && <Modal onClose={toggleModal} largeImage={largeImage} />}
    </div>
  );
}
