/** @type {import("eslint").Linter.Config} */
export default {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17+
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
