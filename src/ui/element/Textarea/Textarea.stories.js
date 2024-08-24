import Textarea from "./Textarea.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: '設定 Textarea 標題',
            control: { type: 'text' },
        },
        placeholder: {
            description: '設定 Textarea 輸入提示',
            control: { type: 'text' },
        },
        total: {
            description: '設定 Textarea 標題',
            control: { type: 'number' },
            default: 10,
        },
        hint: {
            description: 'Textarea 提示訊息',
            control: {
                type: 'object',
            },
        },
        isDisable: {
            description: '是否禁用',
            control: { type: 'boolean' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "多行文字輸入框",
            description: {
                component: "多行文字輸入框組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 基礎多行文字輸入框 ====//
export const DefaultTextarea = {
    name: "基礎多行文字輸入框",
    args: {
        label: "訂單備註",
        placeholder: "請輸入此筆訂單備註",
        total: 50,
        hint: { error: '', description: '' },
        isDisabled: false,
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            // Create a ref for modelValue to be used with v-model
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
              :total="args.total"
              :hint="args.hint"
              v-model="textareaModelValue"
              :isDisabled="args.isDisabled"
            ></Textarea>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== 多行文字輸入框驗證狀態 ====//
export const TextareaStatus = {
    name: "多行文字輸入框驗證狀態",
    args: {
        label: "訂單備註",
        placeholder: "請輸入此筆訂單備註",
        total: 50,
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
                :total="args.total"
                :hint="{ error: '', description: '' }"
                v-model="textareaModelValue01"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '請勿使用特殊符號', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue02"
                :isDisabled="args.isDisabled"
            ></Textarea>
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :total="args.total"
                :hint="{ error: '', description: '請簡述本筆訂單的使用回饋' }"
                v-model="textareaModelValue03"
                :isDisabled="args.isDisabled"
            ></Textarea>
          </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};