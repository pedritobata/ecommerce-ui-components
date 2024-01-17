import type * as CSS from "csstype";
import { ThemesType } from "./theme";

export interface Style extends /* CSS.Properties,  */ CSS.PropertiesHyphen {}

export interface CustomizableStyles {
  sx?: Style;
}

export interface ExtraTagProperties {
  [key: string]: string;
}

export interface WidgetProps<T> {
  variant?: keyof T;
  themeStyles?: T[keyof T];
  extraProperties?: ExtraTagProperties;
}

export interface StyledWidgetProps<T> {
  $variant: keyof T;
  $themeStyles?: T[keyof T];
  $extraProperties?: ExtraTagProperties;
  $sx?: Style;
  $themeType: ThemesType;
  // theme: Theme<WidgetsStyles>[ThemesType];
}
