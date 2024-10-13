import Textarea from "./Textarea.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: '設定 Textarea 的標題文字',
            control: { type: 'text' },
        },
        placeholder: {
            description: '設定 Textarea 的輸入提示文字，指引用戶輸入內容',
            control: { type: 'text' },
        },
        limit: {
            description: '設定 Textarea 的最大字符數限制；設為 0 表示不限制字符數',
            control: { type: 'number' },
        },
        isDisabled: {
            description: '設定 Textarea 是否禁用，禁用後無法進行任何輸入',
            control: { type: 'boolean' },
        },
        hint: {
            description: '顯示在 Textarea 下方的提示訊息，提供額外指引',
            control: {
                type: 'object',
            },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Textarea",
            description: {
                component: "Textarea 組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== Textarea 基礎樣式 ====//
export const TextareaDefault = {
    name: "Textarea 基礎樣式",
    args: {
        label: "訂單備註",
        placeholder: "請輸入此筆訂單備註",
        limit: 50,
        isDisabled: false,
        hint: { error: '', description: '' },
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            const textareaModelValue =ref("");
            return {
                args,
                textareaModelValue
            };
        },
        template: `
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :isDisabled="args.isDisabled"
                :hint="args.hint"
                v-model="textareaModelValue"
            ></Textarea>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'customClass'],
        },
    },
};

//==== Textarea 驗證樣式 ====//
export const TextareaStatus = {
    name: "Textarea 驗證樣式",
    args: {
        label: "訂單備註",
        placeholder: "請輸入此筆訂單備註",
        limit: 50,
        isDisabled: false,
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const textareaModelValue01 =ref("");
            const textareaModelValue02 =ref("");
            const textareaModelValue03 =ref("");
            return {
                args,
                textareaModelValue01,
                textareaModelValue02,
                textareaModelValue03
            };
        },
        template: `
            <div style="display: flex; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '' }"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '請勿使用特殊符號', description: '' }"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :isDisabled="args.isDisabled"
                    :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'hint', 'customClass'],
        },
    },
};