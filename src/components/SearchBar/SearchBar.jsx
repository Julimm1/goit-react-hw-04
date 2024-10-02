import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { GrSearch } from "react-icons/gr";
const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(inputValue); // Викликаємо функцію handleFormSubmit, передану через пропс
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleFormSubmit} className={s.form}>
        <input
          type="text"
          value={inputValue}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setInputValue(e.target.value)}
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          <GrSearch className={s.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
