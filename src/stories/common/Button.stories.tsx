import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "@common/button";

export default {
  title: "components/common/button",
  component: Button,
  argTypes: {
    colorType: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "error"],
      table: {
        defaultValue: { summary: "primary" },
        type: { summary: "버튼 테마 색상" },
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: "버튼 사이즈" },
      },
    },
    opposite: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "버튼 배경 색상" },
      },
    },
    full: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "버튼 넓이 최대로" },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "비활성화" },
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  colorType: "primary",
  size: "md",
  opposite: false,
  full: false,
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  colorType: "success",
  size: "md",
  opposite: false,
  full: false,
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  colorType: "error",
  size: "md",
  opposite: false,
  full: false,
  disabled: false,
};
