import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    plugins: { react, reactNative },
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: {
      parser: babelParser,
      globals: { "react-native/react-native": true },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
];
