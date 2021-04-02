const { execSync } = require('child_process');
const allowList = `${execSync('./print-allowed-dir.sh')}`
  .replace(/\n$/, '')
  .split('\n');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript', // eslint-plugin-import の設定を読み込む
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'], // eslint-plugin-import を読み込む
  rules: {
    'import/no-internal-modules': [
      'error',
      {
        allow: allowList,
      },
    ],
  },
};
