import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js"; // Already imports ESLint's recommended rules
import pluginReact from "eslint-plugin-react";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Target JavaScript & JSX files
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest", // Allow modern JS
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      ...js.configs.recommended.rules, // JavaScript best practices
      ...pluginReact.configs.recommended.rules, // React best practices
    },
  },
]);
