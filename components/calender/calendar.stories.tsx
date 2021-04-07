import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default {
  title: "Common/Calendar",
  component: Calendar,
} as Meta;

const Template: Story = () => <Calendar />;

export const Schedule = Template.bind({});
Schedule.args = {};
