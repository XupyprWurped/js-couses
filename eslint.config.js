import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": ["warn"],
      "no-unused-vars": "warn",
      "no-debugger": "warn",
      "no-var": "warn",
      "prefer-const": "warn",
      "prefer-template": "warn",
    },
  },
];
