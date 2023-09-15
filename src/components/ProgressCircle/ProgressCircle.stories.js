import { ProgressCircle } from ".";

export default {
  title: "Components/ProgressCircle",
  component: ProgressCircle,
  argTypes: {
    property1: {
      options: ["not-started", "done", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "not-started",
    className: {},
  },
};
