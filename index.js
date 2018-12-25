module.exports = {
  extends: ["airbnb"],
  plugins: ["prettier"],
  rules: {
    "indent": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "no-nested-ternary": "off",
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
    "jsx-a11y/label-has-associated-control": "off"
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  }
}
