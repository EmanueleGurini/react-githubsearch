import React from "react";
import { useContext } from "react";

import styles from "./searchBar.module.css";
import IconLens from "../../assets/icons/icon-lens.svg";
import { ThemeContext } from "../../commons/context/context";

interface ISearchBar {
  handleInputChange: (value: string) => void;
  handleClickChange: () => void;
  inputChange: string;
  resultExist: boolean;
}

const SearchBar: React.FC<ISearchBar> = ({
  handleClickChange,
  handleInputChange,
  inputChange,
  resultExist,
}) => {
  const handleChange = (e: any) => {
    handleInputChange(e.target.value);
  };

  let messageAlert = (
    <div className={styles["search-bar__alert"]}>
      {" "}
      <h3>No result</h3>{" "}
    </div>
  );

  const { light } = useContext(ThemeContext);
  let theme = light ? "light" : "dark";

  return (
    <section
      className={`${styles["search-bar"]} ${styles[`search-bar--${theme}`]}`}
    >
      <div className={styles["search-bar__left"]}>
        <img src={IconLens} alt="Lens Icon" />
        <input
          value={inputChange}
          type="text"
          placeholder="Search GitHub user name..."
          onChange={handleChange}
          className={styles[`input--${theme}`]}
        />
        {!resultExist && messageAlert}
      </div>
      <button onClick={handleClickChange}>Search</button>
    </section>
  );
};

export default SearchBar;
