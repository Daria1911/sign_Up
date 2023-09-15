import { TextfieldWeb } from ".";

export default {
  title: "Components/TextfieldWeb",
  component: TextfieldWeb,
  argTypes: {
    property1: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
  },
};
