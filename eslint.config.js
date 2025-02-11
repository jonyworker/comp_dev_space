import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  // ...pluginVue.configs["flat/recommended"],  // ✅ 修正為正確的 Vue 3 recommended 設定
  {
    rules: {
      "vue/multi-word-component-names": "off", // ✅ 關閉 Vue 3 的多單字名稱規則
    },
  },
];