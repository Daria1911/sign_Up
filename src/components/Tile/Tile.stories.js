import { Tile } from ".";

export default {
  title: "Components/Tile",
  component: Tile,
  argTypes: {
    status: {
      options: ["status-2", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    status: "status-2",
    text: "Get started",
    checkboxClassName: {},
    divClassName: {},
  },
};
