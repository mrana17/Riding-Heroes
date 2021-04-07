import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import SubHeader, { SubHeaderProps } from "./subHeader";
import styles from "./subHeader.module.css";

export default {
  title: "Common/SubHeader",
  component: SubHeader,
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story<SubHeaderProps> = (args) => <SubHeader {...args} />;

export const ProfilePageHeader = Template.bind({});
ProfilePageHeader.args = {
  infoOne: "Fahrten",
  infoOneNumber: "10",
  infoTwo: "Verdienst",
  infoTwoNumber: "123,45€",
  infoThree: "Trinkgeld",
  infoThreeNumber: "16,78€",
  className: styles.subHeader,
};
