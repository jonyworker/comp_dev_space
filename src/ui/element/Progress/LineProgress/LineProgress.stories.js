import LineProgress from "./LineProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Progress/LineProgress",
    component: LineProgress,
    tags: ["autodocs"],
    argTypes: {
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
        label: {
            description: "線形進度條標題",
            control: { type: 'text' },
        },
        percent: {
            description: "線形進度條進度",
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
            defaultValue: 66,
        },
        strokeWidth: {
            description: '線形進度條寬度',
            control: {
                type: 'range',
                min: 1,
                max: 20,
                step: 1,
            },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "線形進度條",
            description: {
                component: "線形進度條組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 線形進度條 ====//
export const DefaultLineProgress = {
    name: "線形進度條",
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

