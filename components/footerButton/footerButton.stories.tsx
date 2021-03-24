import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import FooterButton, { FooterButtonProps } from "./footerButton";

export default {
  title: "Common/FooterButton",
  component: FooterButton,
} as Meta;

const Template: Story<FooterButtonProps> = (args) => <FooterButton {...args} />;

export const HistoryButton = Template.bind({});
HistoryButton.args = {
  label: "History",
  imgSrc: "/History.svg",
  href: "#",
};
export const MapButton = Template.bind({});
MapButton.args = {
  label: "Map",
  imgSrc: "/route-map.svg",
  href: "#",
};
export const ProfileButton = Template.bind({});
ProfileButton.args = {
  label: "Profile",
  imgSrc: "Profile-picture.svg",
  href: "#",
};
export const WalletButton = Template.bind({});
WalletButton.args = {
  label: "Wallet",
  imgSrc: "wallet.svg",
  href: "#",
};
