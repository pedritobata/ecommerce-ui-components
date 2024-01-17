import { styled } from "styled-components";
import { StyledWidgetProps } from "@/theme/types/common";
import { ContainerVariants } from "@/theme/types/widgets/tabs";
import {
  getCSSRulesFromBoxProperties,
  getCSSRulesFromJS,
  getThemeStylesPrioritized,
} from "@/utils/themeUtils";

interface Props extends StyledWidgetProps<ContainerVariants> {}

export const StyledTabContainer = styled.div<Props>`
  ${(props) =>
    getCSSRulesFromBoxProperties(
      getThemeStylesPrioritized(
        props.theme.widget["tabs_container"].variant[props.$variant],
        props.$themeStyles
      )
    )}
  ${(props) => getCSSRulesFromJS(props.$sx)}
`;
