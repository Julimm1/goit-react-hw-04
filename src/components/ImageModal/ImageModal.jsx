import s from "./ImageModal.module.css";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root"); // Для кращої доступності
const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null; // Перевірка, чи передані дані зображення
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      overlayClassName={s.overlay}
      className={s.modal}
    >
      <div className={s.modal}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.imageModal}
        />
        <p className={s.text}>
          {image.description ||
            image.alt_description ||
            "No description available"}
        </p>

        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
