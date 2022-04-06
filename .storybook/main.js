module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: [
    '@storybook/addon-knobs',
    'storybook-css-modules-preset',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/
    });

    return config;
  }
};
