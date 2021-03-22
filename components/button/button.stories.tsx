import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { ButtonProps } from "./loginButton";

export default {
  title: "Common/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const LoginButton = Template.bind({});
LoginButton.args = {
  label: "Button",
};
