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
      "prettier/prettier": ["error"],
      "no-unused-vars": "error",
    },
  },
];
