import "styled-components";
import { Palette, WidgetsStyles } from "./src/theme/types/theme";

declare module "styled-components" {
  export interface DefaultTheme {
    widget: WidgetsStyles;
    palette: Palette;
  }
}
