import { SearchBar } from ".";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    property1: {
      options: ["selection", "selection-selected", "nav"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "selection",
  },
};
