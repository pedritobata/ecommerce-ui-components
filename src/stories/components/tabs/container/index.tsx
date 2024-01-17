import { PropsWithChildren } from "react";
import { useTheme } from "@/theme/provider/hooks";
import { StyledTabContainer } from "./styled";
import { CustomizableStyles, WidgetProps } from "@/theme/types/common";
import { TabContextProvider } from "../context";
import { ContainerVariants } from "@/theme/types/widgets/tabs";

interface Props extends WidgetProps<ContainerVariants>, CustomizableStyles {}

export function TabContainer({
  variant = "horizontal",
  themeStyles,
  children,
  sx,
  extraProperties,
}: PropsWithChildren & Props) {
  const { themeType } = useTheme();

  return (
    <TabContextProvider>
      <StyledTabContainer
        $variant={variant}
        $themeStyles={themeStyles}
        $themeType={themeType}
        $sx={sx}
        $extraProperties={extraProperties}
        //theme={theme}
      >
        {children}
      </StyledTabContainer>
    </TabContextProvider>
  );
}
