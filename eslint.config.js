// eslint.config.js
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import htmlPlugin from "eslint-plugin-html";
import json from "eslint-plugin-json";
import htmlEslintPlugin from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js", "**/*.html", "**/*.json"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      html: htmlPlugin,
      json: json,
      "@html-eslint": htmlEslintPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "max-len": "off",
    },
  },
  {
    files: ["**/*.json"],
    ...json.configs["recommended"],
  },
  {
    files: ["**/*.html"],
    plugins: {
      html: htmlPlugin,
    },
    languageOptions: {
      parser: htmlParser,
    },
  },
  {
    ignores: [".netlify", ".vscode", "node_modules", "package-lock.json"],
  },
];
