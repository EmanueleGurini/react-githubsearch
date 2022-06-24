import * as React from "react";
import styles from "./searchBar.module.css";
import IconLens from "../../assets/icons/icon-lens.svg";

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

  return (
    <section className={styles["search-bar"]}>
      <div className={styles["search-bar__left"]}>
        <img src={IconLens} />
        <input
          value={inputChange}
          type="text"
          placeholder="Search GitHub user name..."
          onChange={handleChange}
        />
        {!resultExist && messageAlert}
      </div>
      <button onClick={handleClickChange}>Search</button>
    </section>
  );
};

export default SearchBar;
