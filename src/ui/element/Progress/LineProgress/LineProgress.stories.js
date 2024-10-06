import LineProgress from "./LineProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Progress/LineProgress",
    component: LineProgress,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "顯示在 LineProgress 上的標題文字",
            control: { type: 'text' },
        },
        percent: {
            description: "設置 LineProgress 的進度百分比（0-100）",
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
            defaultValue: 66,
        },
        strokeWidth: {
            description: 'LineProgress 的直徑大小（單位：像素）',
            control: {
                type: 'range',
                min: 1,
                max: 20,
                step: 1,
            },
        },
        themeColor: {
            description: "LineProgress 的主題顏色",
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

//==== LineProgress 基礎樣式 ====//
export const DefaultLineProgress = {
    name: "LineProgress 基礎樣式",
    args: {
        label: "Complete",
        percent: 66,
        strokeWidth: 10,
        themeColor: "primary",
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

