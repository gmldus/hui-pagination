module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    _: false,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
};
