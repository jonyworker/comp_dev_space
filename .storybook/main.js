/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    'storybook-addon-deep-controls'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
