import { ProgressBar } from ".";

export default {
  title: "Components/ProgressBar",
  component: ProgressBar,
  argTypes: {
    property1: {
      options: ["two", "three", "four", "one", "five", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "two",
    className: {},
  },
};
