import MyButton from "../components/MyButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
  title: "MyButton",
  component: MyButton,
};

export const Basic: Story = {
  render: () => ({
    components: { MyButton },
    template: "<MyButton label='按钮' />",
  }),
};

export default meta;
