import { useContext } from "react";
import { ThemeContext } from "./provider";

export function useTheme() {
  const providerContext = useContext(ThemeContext);
  return { ...providerContext };
}
