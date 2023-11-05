import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Test-button",
    className: "bg-slate-800 text-white p-4",
  },
};

export const Secondary: Story = {
  args: {
    children: "Test-button",
    className: "bg-orange-300 p-4",
  },
};
