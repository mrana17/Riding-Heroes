import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Logo, { LogoProps } from "./logo";

export default {
  title: "Common/Logo",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const TextLogo = Template.bind({});
TextLogo.args = {
  src: "/text-logo.svg",
};

export const FahrerLogo = Template.bind({});
FahrerLogo.args = {
  src: "/fahrer-logo.svg",
};

export const FullLogo = Template.bind({});
FullLogo.args = {
  src: "/full-logo.svg",
};
