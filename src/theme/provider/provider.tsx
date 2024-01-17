import {
  type PropsWithChildren,
  useState,
  createContext,
  useCallback,
  useMemo,
} from "react";
import { ThemeProvider as Provider } from "styled-components";
import { theme } from "@/theme/theme";
import { type ThemesType } from "../types/theme";

interface ThemeContextState {
  themeType: ThemesType;
  theme: typeof theme.light;
  // palette: Palette;
}

type ThemeContextType = ThemeContextState & {
  toggleTheme: (themeType: ThemesType) => void;
};

const defaultThemeContext: ThemeContextType = {
  themeType: "light",
  theme: theme.light,
  // palette: defaultPalette,
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultThemeContext);

interface Props {
  themeType?: ThemesType;
  themeMap?: typeof theme;
}

export default function ThemeProvider({
  children,
  themeType: themeTypeProp = defaultThemeContext.themeType,
  themeMap: themeMapProp = theme,
}: Props & PropsWithChildren) {
  const [themeState, setThemeState] = useState<ThemeContextState>({
    ...defaultThemeContext,
    themeType: themeTypeProp,
    theme: themeMapProp[themeTypeProp],
  });

  const toggleTheme = useCallback(
    (themeType: ThemesType) => {
      setThemeState({
        ...themeState,
        themeType,
        theme: themeMapProp[themeType],
      });
    },
    [themeState, setThemeState, themeMapProp]
  );

  const providerValue: ThemeContextType = useMemo(
    () => ({
      ...themeState,
      toggleTheme,
    }),
    [themeState, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      <Provider theme={themeState.theme}>{children}</Provider>
    </ThemeContext.Provider>
  );
}
