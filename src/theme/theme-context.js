import { createContext, useContext } from "react";

// Kept out of ThemeContext.jsx so that file only exports a component,
// which is what React Fast Refresh requires.
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
