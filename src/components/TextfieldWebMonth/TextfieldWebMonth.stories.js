import { TextfieldWebMonth } from ".";

export default {
  title: "Components/TextfieldWebMonth",
  component: TextfieldWebMonth,
  argTypes: {
    month: {
      options: ["month", "year", "day"],
      control: { type: "select" },
    },
    unfilled: {
      options: ["filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    month: "month",
    unfilled: "filled",
  },
};
