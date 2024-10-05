/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@whitespace/storybook-addon-html", // 👈 story 中程式碼檢視功能
    'storybook-addon-vue-slots', // 👈 處理 vue slot
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
