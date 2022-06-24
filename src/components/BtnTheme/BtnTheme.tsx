import React from "react";
import { useContext } from "react";

import styles from "./button.module.css";
import { ThemeContext } from "../../commons/context/context";

const Button = () => {
  const { light, setLight } = useContext(ThemeContext);

  let btnTheme = light ? "light" : "dark";

  const setBtnColor = () => {
    let value = light ? false : true;
    setLight(value);
  };

  return <button onClick={setBtnColor}>Light</button>;
};

export default Button;
