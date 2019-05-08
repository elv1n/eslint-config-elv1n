module.exports = {
  extends: ["airbnb"],
  plugins: ["prettier", "react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "indent": "off",
    "import/prefer-default-export": "off",
    "implicit-arrow-linebreak": "off", // Incompatible with prettier
    "react/jsx-filename-extension": "off",
    "no-nested-ternary": "off",
    "no-shadow": "off", // incompatible using redux, if there will be options disable only for imports I would definitely use it
    "no-implicit-coercion": "error",
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true
      }
    ],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } }
    ],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "object-curly-newline": ["error", { consistent: true }],
    "function-paren-newline": "off",
    "react/no-unused-state": "warn",
    "react/prefer-stateless-function": ["warn", { ignorePureComponents: true }],
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent": "off",
    "react/prop-types": [
      "warn",
      {
        ignore: ["children", "classes"],
        customValidators: [],
        skipUndeclared: false
      }
    ],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "react/forbid-prop-types": ["error", {
      forbid: ["any", "array"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-sort-props": ["warn", {
      ignoreCase: true
    }],
    "react/jsx-sort-default-props": ["warn", {
      ignoreCase: true
    }],
    "react/sort-prop-types": ["warn", {
      ignoreCase: true
    }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
