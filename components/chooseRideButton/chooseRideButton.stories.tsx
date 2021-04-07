import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ChooseRideButton, { ChooseRideButtonProps } from "./chooseRideButton";
import styles from "./chooseRideButton.module.css";

export default {
  title: "Common/chooseRideButton",
  component: ChooseRideButton,
} as Meta;

const Template: Story<ChooseRideButtonProps> = (args) => (
  <ChooseRideButton {...args} />
);

export const CarButton = Template.bind({});
CarButton.args = {
  imgSrc: "/car.svg",
  label: "Auto",
  className: styles.chooseRideButton,
};
export const CycleButton = Template.bind({});
CycleButton.args = {
  imgSrc: "/bike.svg",
  label: "Fahrrad",
  className: styles.chooseRideButton,
};
export const ScooterButton = Template.bind({});
ScooterButton.args = {
  imgSrc: "/scooter.svg",
  label: "Scooter",
  className: styles.chooseRideButton,
};
export const RollerButton = Template.bind({});
RollerButton.args = {
  imgSrc: "/Roller.svg",
  label: "Roller",
  className: styles.chooseRideButton,
};
