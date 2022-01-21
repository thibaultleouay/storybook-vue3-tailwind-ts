const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(ts|js|mdx)'],
  addons: [
    // {
    //   name: '@storybook/addon-essentials',
    //   options: { actions: false }
    // },
    // '@storybook/addon-links',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-postcss', // addon postcss added
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  // framework: "@storybook/vue3",

  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')

    return config
  },
}
