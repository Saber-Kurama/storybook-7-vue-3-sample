import { StorybookConfig } from "@storybook/vue3-vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/**/*.stories.@(js|ts|tsx)"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-backgrounds",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
  ],
  // docs: {
  //   autodocs: true,
  // },
  async viteFinal(config) {
    config?.plugins?.push(vueJsx());
    return config;
  },
};
export default config;
