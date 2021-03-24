import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Header from "./header";

export default {
  title: "Common/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story = () => <Header />;

export const MainHeader = Template.bind({});
