import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={s.error}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
