import CircleProgress from "./CircleProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Progress/CircleProgress",
    component: CircleProgress,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "顯示在 CircleProgress 上的標題文字",
            control: { type: 'text' },
        },
        percent: {
            description: "設置 CircleProgress 的進度百分比（0-100）",
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
            defaultValue: 66,
        },
        size: {
            description: 'CircleProgress 的直徑大小（單位：像素）',
            control: {
                type: 'range',
                min: 24,
                max: 200,
                step: 1,
            },
            defaultValue: 50,
        },
        strokeWidth: {
            description: 'CircleProgress 的線條寬度（單位：像素）',
            control: {
                type: 'range',
                min: 1,
                max: 20,
                step: 1,
            },
        },
        themeColor: {
            description: "CircleProgress 主題顏色",
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
            title: "CircleProgress",
            description: {
                component: "CircleProgress 組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== CircleProgress 基礎樣式 ====//
export const DefaultCircleProgress = {
    name: "CircleProgress 基礎樣式",
    args: {
        label: "Saving",
        percent: 66,
        size: 120,
        strokeWidth: 10,
        themeColor: "primary",
    },
    render: (args) => ({
        components: { CircleProgress },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
            <CircleProgress 
                :label="args.label"
                :percent="args.percent"
                :size="args.size"
                :strokeWidth="args.strokeWidth"
                :themeColor="args.themeColor"
            ></CircleProgress>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

