module.exports = {
  extends: [
    'eslint-config-airbnb',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'prettier',
    // "react-hooks"
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-use-before-define': 'off',
        'no-shadow': 'off',
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.ts', '.tsx'] }],
    'no-implicit-coercion': 'error',
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        arrowParens: 'avoid',
      },
    ],
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } },
    ],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    // use ts
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],

    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/sort-prop-types': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/state-in-constructor': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'warn',
    // don't like it anymore
    'react/destructuring-assignment': 'off',

    // "react-hooks/rules-of-hooks": "error",
    // "react-hooks/exhaustive-deps": "warn"

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
