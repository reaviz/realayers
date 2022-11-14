module.exports = {
  stories: [
    '../docs/**/*.story.@(tsx|mdx)',
    '../src/**/*.story.@(tsx|mdx)',
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config ) => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/
    });

    return config;
  }
};
