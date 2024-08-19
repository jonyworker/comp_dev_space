import Input from './Input.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Design System/Input',
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        type: {
            description: '設定 input 類型',
            control: { type: 'select' },
            options: ['text', 'number', 'password', 'email'],
        },
        placeholder: {
            description: '設定 input 輸入提示',
            control: { type: 'text' },
        },
        label: {
            description: '設定 input 標題',
            control: { type: 'text' },
        },
        size: {
            description: '設定 input 標題',
            control: { type: 'select' },
            options: ['small', 'medium', 'large']
        },
        prefix: {
            description: '設定位於 input 前方的 icon',
            control: { type: 'select' },
            options: ['None', 'home', 'folder', 'academi', 'arrow-forward', 'finger-print', 'account_circle'],
            mapping: {
                None: null,
            },
        },
        suffix: {
            description: '設定位於 input 後方的 icon',
            control: { type: 'select' },
            options: ['None', 'home', 'folder', 'academi', 'arrow-forward', 'finger-print', 'account_circle'],
            mapping: {
                None: null,
            },
        },
        customClass: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
        hint: {
            description: '提示訊息',
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
            title: '輸入框',
            description: {
                component: '輸入框組件的呈現及說明。。',
            },
        },
    },
};

export const InputDefault = {
    name: '輸入框 jony',
    args: {
        type: 'text',
        placeholder:'example@mail.com',
        label: '輸入框標題',
        size: 'medium',
        prefix: 'account_circle',
        hint: { error: '', description: 'Please enter a Guide description' },
    },
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
            exclude: ['modelValue' ],
        },
    },
};

export const InputWithStatus = {
    name: '輸入框狀態',
    args: {
        type: 'text',
        placeholder:'example@mail.com',
        label: '輸入框標題',
        size: 'medium',
        prefix: 'account_circle',
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template:
            `<div style="display:flex; gap: 16px">
                <Input v-bind="args" />
                <Input v-bind="args" :hint="{ error: 'Error Message', description: '' }" />
                <Input v-bind="args" :hint="{ error: '', description: 'Something Description' }"/>
            </div>
            `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
            exclude: ['modelValue' ],
        },
    },
};