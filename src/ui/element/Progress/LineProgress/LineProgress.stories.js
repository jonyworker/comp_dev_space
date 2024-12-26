import LineProgress from "./LineProgress.vue";

export default {
    title: "Component/Progress-Line",
    component: LineProgress,
    tags: ["autodocs"],
    argTypes: {
        // themeColor: {
        //     description: "主題顏色",
        //     control: { type: "select" },
        //     options: [
        //         "primary",
        //         "secondary",
        //         "neutral",
        //         "info",
        //         "success",
        //         "warning",
        //         "error",
        //     ],
        //     table: {
        //         type: {
        //             summary: "primary | secondary | neutral | info | success | warning | error"
        //         }
        //     }
        // },
        label: {
            description: "進度指示標籤",
            control: { type: "text" },
        },
        percent: {
            description: "進度",
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
        },
        strokeWidth: {
            description: "線條寬度",
            control: {
                type: "range",
                min: 1,
                max: 20,
                step: 1,
            },
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
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
};

//==== 預設項目 ====//
export const DefaultLineProgress = {
    name: "預設項目",
    args: {
        label: "Label",
        percent: 65,
        strokeWidth: 10,
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
                :className="args.className"
            ></LineProgress>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<LineProgress',
                        `  :label="${args.label}"`,
                        `  :percent="${args.percent}"`,
                        `  :strokeWidth="${args.strokeWidth}"`,
                        `  :className="${args.className}"`,
                        '></LineProgress>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 顯示標籤 ====//
export const LineProgressLabelStory = {
    name: "顯示標籤",
    args: {
        label: "Label",
        percent: 65,
        strokeWidth: 10,
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
                :className="args.className"
            ></LineProgress>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<LineProgress',
                        `  :label="${args.label}"`,
                        `  :percent="${args.percent}"`,
                        `  :strokeWidth="${args.strokeWidth}"`,
                        `  :className="${args.className}"`,
                        '></LineProgress>',
                    ].join('\n').trim();

                }
            }
        }
    },
};

//==== 主題色彩 ====//
// export const LineProgressColorStory = {
//     name: "主題色彩",
//     args: {
//         label: "",
//         strokeWidth: 10,
//         className: '',
//     },
//     render: (args) => ({
//         components: { LineProgress },
//         setup() {
//             // Create a ref for modelValue to be used with v-model
//             return {
//                 args,
//             };
//         },
//         template: `
//             <div style="display:flex; flex-direction: column; gap:8px">
//                 <LineProgress
//                     themeColor="primary"
//                     :label="args.label"
//                     :percent=40
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="secondary"
//                     :label="args.label"
//                     :percent=50
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="neutral"
//                     :label="args.label"
//                     :percent=60
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="info"
//                     :label="args.label"
//                     :percent=70
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="success"
//                     :label="args.label"
//                     :percent=80
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="warning"
//                     :label="args.label"
//                     :percent=90
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//                 <LineProgress
//                     themeColor="error"
//                     :label="args.label"
//                     :percent=100
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></LineProgress>
//             </div>
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             exclude: ['themeColor', 'percent' ],
//         },
//         docs: {
//             source: {
//                 transform: (src, storyContext) => {
//                     const { args } = storyContext;
//                     return [
//                         '<LineProgress',
//                         `  themeColor="primary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="40"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="secondary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="50"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="tertiary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="60"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="success"`,
//                         `  label="${args.label}"`,
//                         `  :percent="70"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="warning"`,
//                         `  :percent="80"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  label="${args.label}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="error"`,
//                         `  label="${args.label}"`,
//                         `  :percent="90"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                         '<LineProgress',
//                         `  themeColor="info"`,
//                         `  label="${args.label}"`,
//                         `  :percent="100"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></LineProgress>',
//                     ].join('\n').trim();
//                 }
//             }
//         }
//     },
// };