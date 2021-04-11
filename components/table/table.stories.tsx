import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Table, { TableProps } from "./table";

export default {
  title: "Common/Table",
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const BigTable = Template.bind({});
BigTable.args = {
  idTitle: "ID",
  addressTitle: "Address",
  saleTitle: "Sale",
  tipTitle: "Trinkgeld",
  id: "1",
  address: "Ballindamm 9, 20099 Hamburg",
  sale: "16,70€",
  tip: "2,30€",
};
