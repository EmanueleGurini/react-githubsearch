import { createContext } from "react";

export const ThemeContext = createContext({
	light: true,
	setLight: (value: boolean) => {},
});
