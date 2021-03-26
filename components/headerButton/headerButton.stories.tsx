import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import HeaderButton, { HeaderButtonProps } from "./headerButton";

export default {
  title: "Common/HeaderButton",
  component: HeaderButton,
} as Meta;

const Template: Story<HeaderButtonProps> = (args) => <HeaderButton {...args} />;

export const NotificationsButton = Template.bind({});
NotificationsButton.args = {
  imgSrc: "/bell.svg",
  href: "#",
};
export const MoreButton = Template.bind({});
MoreButton.args = {
  imgSrc: "/more.svg",
  href: "#",
};
