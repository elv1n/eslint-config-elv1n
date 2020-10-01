module.exports = {
  extends: ['eslint-config-airbnb', 'plugin:@typescript-eslint/recommended'],
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
  rules: {
    indent: 'off',
    // both are find https://eslint.org/docs/rules/arrow-body-style#top
    'arrow-body-style': 'off',
    // Incompatible with prettier
    'implicit-arrow-linebreak': 'off',
    // leave it for prettier
    'comma-dangle': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.ts', '.tsx'] }],
    'no-nested-ternary': 'off',
    // incompatible using redux, if there will be options disable only for imports
    // I would definitely use it
    'no-shadow': 'off',
    'no-implicit-coercion': 'error',
    // prettier
    'no-confusing-arrow': 'off',
    'template-curly-spacing': 'error',
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
    'object-curly-newline': ['error', { consistent: true }],
    'function-paren-newline': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    // prettier conflict
    'react/jsx-curly-newline': 'off',
    // prettier conflict
    'space-before-function-paren': 'off',
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
    // prettier
    '@typescript-eslint/indent': 'off',
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
