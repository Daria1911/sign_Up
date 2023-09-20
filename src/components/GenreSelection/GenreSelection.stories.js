import { GenreSelection } from ".";

export default {
  title: "Components/GenreSelection",
  component: GenreSelection,
  argTypes: {
    property1: {
      options: ["less", "more"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "less",
    className: {},
  },
};
