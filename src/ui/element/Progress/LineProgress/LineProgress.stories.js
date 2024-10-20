import LineProgress from "./LineProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Progress-Line",
    component: LineProgress,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "進度指示標籤",
            control: { type: 'text' },
        },
        percent: {
            description: "進度",
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
            defaultValue: 66,
        },
        strokeWidth: {
            description: '線條寬度',
            control: {
                type: 'range',
                min: 1,
                max: 20,
                step: 1,
            },
        },
        themeColor: {
            description: "主題顏色",
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "info",
            ],
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "LineProgress",
            description: {
                component: "LineProgress 組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 主要項目 ====//
export const DefaultLineProgress = {
    name: "主要項目",
    args: {
        label: "Complete",
        percent: 66,
        strokeWidth: 10,
        themeColor: "primary",
        className: '',
    },
    render: (args) => ({
        components: { LineProgress },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
            <LineProgress 
                :label="args.label"
                :percent="args.percent"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
                :className="args.className"
            ></LineProgress>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

