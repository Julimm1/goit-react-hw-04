import { useEffect, useState } from "react";
import { fetchImages } from "./services/api";
import s from "./components/App.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Для збереження вибраного зображення
  const [isModalOpen, setIsModalOpen] = useState(false); // Для керування станом модального вікна
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    } // Якщо немає запиту, не робимо запит до API
    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(null); // Скидаємо попередню помилку перед новим запитом

        const data = await fetchImages(page, query);
        setImages((prevImages) => [...prevImages, ...data.results]); // Додаємо нові зображення до попередніх
        setTotalPages(data.total_pages); // Встановлюємо загальну кількість сторінок
      } catch (error) {
        setIsError(error.message || "Failed to load images."); // Встановлюємо помилку
        toast.error(error.message || "Failed to load images.");
      } finally {
        setIsLoading(false); // Завершуємо індикатор завантаження
      }
    };
    getData();
  }, [query, page]);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setImages([]); // Очищаємо попередні зображення
    setPage(1); // Повертаємось на першу сторінку
    // setIsLoading(true);
    setIsError(null); // Скидаємо попередню помилку
  };
  const handleImageClick = (image) => {
    setSelectedImage(image); // Встановлюємо вибране зображення для модального вікна
    setIsModalOpen(true); // Відкриваємо модальне вікно
  };
  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1); // Збільшуємо номер сторінки
  };

  const closeModal = () => {
    setSelectedImage(null); // Очищаємо вибране зображення
    setIsModalOpen(false); // Закриваємо модальне вікно
  };

  return (
    <div className={s.conteiner}>
      <SearchBar onSubmit={handleSearch}></SearchBar>
      <div className={s.content}>
        <Toaster />
        {isError && <ErrorMessage message={isError} />}
        <ImageGallery images={images} onImageClick={handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && page < totalPages && !isLoading && (
          <LoadMoreBtn onClick={handleChangePage} />
        )}
      </div>
      {isModalOpen && selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
