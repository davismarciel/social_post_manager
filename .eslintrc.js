module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/button-has-type': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    camelcase: 0,
    'no-unused-vars': 0,
    'react/jsx-filename-extension': 0,
    'no-alert': 0,
    'import/no-extraneous-dependencies': 0,
    'max-len': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-param-reassign': 0,
  },
};
