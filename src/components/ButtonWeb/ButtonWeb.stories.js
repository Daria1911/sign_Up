import { ButtonWeb } from ".";

export default {
  title: "Components/ButtonWeb",
  component: ButtonWeb,
  argTypes: {
    type: {
      options: ["primary", "social", "secondary", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    className: {},
    text: "Next",
  },
};
