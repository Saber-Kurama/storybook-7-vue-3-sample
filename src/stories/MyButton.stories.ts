import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
// import { action } from "@storybook/addon-actions";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
};

export const Basic: Story = {
  name: "基本例子",
  render: () => ({
    components: { MyButton },
    template: "<MyButton label='按钮' />",
  }),
};

export const Login: Story = {
  name: "登录的例子",
  render: (args: any) => ({
    components: { MyButton },
    setup() {
      return { args };
    },
    template: "<MyButton v-bind='args' />",
  }),
  args: {
    label: "登录",
  },
};

export default meta;
