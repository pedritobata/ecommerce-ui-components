import { RuleSet, css } from "styled-components";
import { Style } from "@/theme/types/common";
import { BoxProperties, SeparatorEffect } from "@/theme/types/theme";
import { TabThemeProperties } from "@/theme/types/widgets/tabs";

export function getThemeStylesPrioritized<T>(
  fromTheme: T,
  fromProps: T | undefined
): T {
  if (!fromProps) return fromTheme;

  const styles = {} as T;
  for (const key in fromProps) {
    styles![key] = fromProps[key] || fromTheme![key];
  }

  return styles;
}

export function getCSSRulesFromJS(sx: Style | undefined): RuleSet<object> {
  let result = ``;
  if (sx) {
    for (const key in sx) {
      //@ts-expect-error key is guaranted to be a key of sx
      result += key + ": " + sx[key] + ";";
    }
  }

  return css`
    ${result}
  `;
}

export function getCSSRulesFromBoxProperties(
  themeStyles: BoxProperties
): RuleSet<object> {
  const { backgroundColor, paddingV, paddingH, marginV, marginH, maxWidth } =
    themeStyles;
  let border: RuleSet<object>;
  if (!themeStyles.isOutlined) {
    border = css`
      border: none;
    `;
  } else {
    border = css`
      border: ${themeStyles.borderWidth}px solid ${themeStyles.borderColor};
      border-radius: ${themeStyles.borderRadius};
    `;
  }

  return css`
    background-color: ${backgroundColor};
    padding: ${paddingV + " " + paddingH};
    margin: ${marginV + " " + marginH};
    max-width: ${maxWidth};
    ${border}
  `;
}

export function getCSSRulesFromSeparatorProperties(
  themeStyles: TabThemeProperties
): RuleSet<object> {
  const {
    separatorIsHorizontal,
    separatorBorderColor,
    separatorBorderWidth,
    separatorSize,
    hasSeparator,
  } = themeStyles;
  if (!hasSeparator) return css``;

  let separator: RuleSet<object>;
  if (separatorIsHorizontal) {
    separator = css`
      border-bottom: ${separatorBorderWidth} solid ${separatorBorderColor};
      border-bottom-width: ${separatorSize};
    `;
  } else {
    separator = css`
      border-right: ${separatorBorderWidth} solid ${separatorBorderColor};
    `;
  }

  return separator;
}
// TODO implemet this method!!
export function getCSSRulesFromSeparatorEffect(
  themeStyles: SeparatorEffect
): RuleSet<object> {
  themeStyles; // just to satisfy ts linter
  return css``;
}
