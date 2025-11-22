module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript', 'plugin:storybook/recommended', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  },
  plugins: ['unicorn']
};
