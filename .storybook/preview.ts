import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Cerebri Sans Pro",sans-serif;
  }
`;

export const decorators = [
  withThemeFromJSXProvider({
    themes: theme,
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
