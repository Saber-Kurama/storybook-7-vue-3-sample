import MyButtonTsx from "../components/MyButtonTsx";
import type { Meta, StoryObj } from "@storybook/vue3";
// import { action } from "@storybook/addon-actions";

type Story = StoryObj<typeof MyButtonTsx>;

const meta: Meta<typeof MyButtonTsx> = {
  title: "MyButtonTsx",
  component: MyButtonTsx,
  render: (args: any) => ({
    components: { MyButtonTsx },
    setup() {
      return { args };
    },
    template: "<MyButtonTsx v-bind='args' />",
  }),
  args: {
    label: "按钮",
    variant: "primary",
    size: "medium",
  },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: ["primary", "secondary"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

export const Basic: Story = {
  name: "基本例子",
  args: {
    label: "按钮",
  },
};

export const Login: Story = {
  name: "登录的例子",
  args: {
    label: "登录",
  },
};

export default meta;
