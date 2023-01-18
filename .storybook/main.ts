import { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.stories.@(js|ts)"],
  // docs: {
  //   autodocs: true,
  // },
};
export default config;
