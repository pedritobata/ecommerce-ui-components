import type { Meta, StoryObj } from "@storybook/react";
import { TabContainer } from "./index";

const meta = {
  title: "Components/Tabs/TabContainer",
  component: TabContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TabContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Normal / regular state of tab container
 */
export const Normal: Story = {
  /* args: {
    children: <h1>Container</h1>
  }, */
  render: () => <TabContainer><h1>This is the tab container</h1></TabContainer>
};
