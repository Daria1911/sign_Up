import { MovieSelectionWeb } from ".";

export default {
  title: "Components/MovieSelectionWeb",
  component: MovieSelectionWeb,
  argTypes: {
    status: {
      options: ["selected", "unselected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "selected",
    className: {},
  },
};
