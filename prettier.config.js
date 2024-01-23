/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  overrides: [
    {
      files: ['*.css'],
      options: {
        proseWrap: 'never',
      },
    },
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
