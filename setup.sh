#!/bin/bash

# Create package.json
cat > package.json <<EOL
{
  "name": "lake-park-resort",
  "version": "1.0.0",
  "description": "",
  "homepage": "https://github.com/Muatasim-Aswad/lake-park-resort#readme",
  "bugs": {
    "url": "https://github.com/Muatasim-Aswad/lake-park-resort/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Muatasim-Aswad/lake-park-resort.git"
  },
  "license": "ISC",
  "author": "Muatasim",
  "type": "module",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint '**/*.{js,html}' && stylelint '**/*.css'",
    "format": "prettier --write '**/*.{js,html,css,json}'",
    "lint:fix": "eslint --fix '**/*.{js,html}' && stylelint --fix '**/*.css'"
  },
  "devDependencies": {
    "eslint": "^9.20.1",
    "globals": "^15.15.0",
    "prettier": "^3.5.1",
    "stylelint": "^16.14.1",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.3",
    "eslint-plugin-html": "^8.1.2",
    "stylelint-config-standard": "^37.0.0"
  }
}
EOL

# Create stylelint.config.js
cat > stylelint.config.js <<EOL
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen"
        ]
      }
    ]
  }
};
EOL

# Create prettier.config.js
cat > prettier.config.js <<EOL
export default {
  singleQuote: false,
};
EOL

# Create eslint.config.js
cat > eslint.config.js <<EOL
import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import htmlPlugin from "eslint-plugin-html";
import globals from "globals";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js", "**/*.html", "**/*.css"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    plugins: {
      prettier: prettierPlugin,
      html: htmlPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "no-console": "warn",
      "no-unused-vars": "warn",
      "max-len": "off"
    }
  }
];
EOL

# Install dependencies
npm install

echo "Setup complete! Linting and formatting configurations are ready."
