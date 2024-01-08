/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      viteFinal: async (config, { configType }) => {
        // Customize the Vite config here
        const tailwindcss = require('tailwindcss');
        const autoprefixer = require('autoprefixer');
        config.css.postcss.plugins.push(tailwindcss, autoprefixer);
        return config;
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;