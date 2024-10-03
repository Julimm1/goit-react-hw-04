import s from "./ImageCard.module.css";
const ImageCard = ({ smallImage, altDescription }) => {
  return (
    <div className={s.card}>
      <img src={smallImage} alt={altDescription} className={s.img} />
    </div>
  );
};

export default ImageCard;
