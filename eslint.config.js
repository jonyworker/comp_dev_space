import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,vue,ts,tsx}"], // ✅ 加入 TypeScript 檔案支援
    languageOptions: {
      globals: globals.browser,
      parser: parserTs, // ✅ 設定 TypeScript 解析器
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json", // ✅ 確保 ESLint 參考 TypeScript 設定
      },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...pluginTs.configs["recommended"], // ✅ 啟用 TypeScript 推薦規則
  {
    rules: {
      "vue/multi-word-component-names": "off", // ✅ 關閉 Vue 3 規則
    },
  },
];
