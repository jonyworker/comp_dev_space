import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: parserTs,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  pluginJs.configs.recommended, // ✅ 正確：作為單個物件放入陣列
  pluginVue.configs["flat/essential"], // ✅ 正確：不展開
  pluginTs.configs.recommended, // ✅ 正確：不展開
];
