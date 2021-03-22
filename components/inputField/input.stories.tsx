import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Input, { InputProps } from "./usernameInput";

export default {
  title: "Common/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Username = Template.bind({});
Username.args = {
  placeholder: "Benutzername",
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Passwort",
  type: "password",
};
