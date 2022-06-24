import React from "react";
import { useContext } from "react";

import styles from "./btnTheme.module.css";
import { ThemeContext } from "../../commons/context/context";
import IconSun from "../../assets/icons/icon-sun.svg";
import IconMoon from "../../assets/icons/icon-moon.svg";

const Button = () => {
  const { light, setLight } = useContext(ThemeContext);

  const setBtnColor = () => {
    let value = light ? false : true;
    setLight(value);
  };

  let themeIcon = light ? IconMoon : IconSun;
  let btnTheme = light ? "dark" : "light";

  return (
    <button
      className={`${styles.btn} ${styles[btnTheme]}`}
      onClick={setBtnColor}
    >
      <h4>{light ? "dark" : "light"}</h4>
      <img src={themeIcon} alt="Theme Mode Icon" />
    </button>
  );
};

export default Button;
