import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return <p>No images found</p>; // Показуємо повідомлення, якщо зображень немає
  }

  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li key={image.id} onClick={() => onImageClick(image)}>
          <ImageCard
            smallImage={image.urls.small}
            altDescription={image.alt_description}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
