import type { StorybookConfig } from "@storybook/angular";

const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../src/stories'],

  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../node_modules/bootstrap/scss'),
    });

    return config;
  },
};

export default config;
