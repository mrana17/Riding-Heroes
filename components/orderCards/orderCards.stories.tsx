import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import OrderCard, { OrderCardProps } from "./orderCards";

export default {
  title: "Common/OrderCard",
  component: OrderCard,
} as Meta;

const Template: Story<OrderCardProps> = (args) => <OrderCard {...args} />;

export const orderCard = Template.bind({});
orderCard.args = {
  imgSrc: "/Card-Placeholder.png",
  imgSrcStart: "/Start.svg",
  imgSrcEnd: "/Target.svg",
  name: "Max",
  surname: "Mustermann",
  startAddress: "Mönckebergstrasse 7, 20099 Hamburg",
  address: "Ballindamm 9, 20099 Hamburg",
};
