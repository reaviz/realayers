module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: true
        }
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-storysource'
  ]
};
