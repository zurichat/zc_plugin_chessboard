const path = require('path');

module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: 'false',
    babelOptions: { configFile: path.join(__dirname, '.babelrc') },
  },
  rules: {
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'linebreak-style': 'off',
    camelcase: 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    eqeqeq: 'off',
  },
};
