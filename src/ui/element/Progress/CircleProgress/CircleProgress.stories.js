import CircleProgress from "./CircleProgress.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Component/Progress-Circle",
    component: CircleProgress,
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
            required: true,
            control: {
                type: "range",
                min: 0,
                max: 100,
                step: 1, },
            defaultValue: 66,
        },
        size: {
            description: "直徑",
            control: {
                type: "range",
                min: 24,
                max: 200,
                step: 1,
            },
            defaultValue: 50,
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
            title: "CircleProgress",
            description: {
                component: "圓形進度指示組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const DefaultCircleProgress = {
    name: "預設項目",
    args: {
        // themeColor: "primary",
        label: "Label",
        percent: 65,
        size: 100,
        strokeWidth: 10,
        className: '',
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
                :className="args.className"
            ></CircleProgress>
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
                        '<CircleProgress',
                        `  label="${args.label}"`,
                        `  :percent="${args.percent}"`,
                        `  :size="${args.size}"`,
                        `  :strokeWidth="${args.strokeWidth}"`,
                        `  className="${args.className}"`,
                        '></CircleProgress>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 顯示標籤 ====//
export const CircleProgressLabelStory = {
    name: "顯示標籤",
    args: {
        label: "Label",
        percent: 65,
        // size: 100,
        strokeWidth: 10,
        className: '',
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
            <div style="display:flex; align-items: center; gap: 24px">
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="70"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
                <CircleProgress
                    :label="args.label"
                    :percent="args.percent"
                    size="100"
                    :strokeWidth="args.strokeWidth"
                    :className="args.className"
                ></CircleProgress>
            </div>
            
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: [ 'size', 'label' ]
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<CircleProgress',
                        `  label="${args.label}"`,
                        `  :percent="${args.percent}"`,
                        `  :size="70"`,
                        `  :strokeWidth="${args.strokeWidth}"`,
                        `  className="${args.className}"`,
                        '></CircleProgress>',
                        '<CircleProgress',
                        `  label="${args.label}"`,
                        `  :percent="${args.percent}"`,
                        `  :size="100"`,
                        `  :strokeWidth="${args.strokeWidth}"`,
                        `  className="${args.className}"`,
                        '></CircleProgress>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 主題色彩 ====//
// export const CircleProgressColorStory = {
//     name: "主題色彩",
//     args: {
//         // themeColor: "primary",
//         label: "Label",
//         percent: 65,
//         size: 100,
//         strokeWidth: 10,
//         className: '',
//     },
//     render: (args) => ({
//         components: { CircleProgress },
//         setup() {
//             // Create a ref for modelValue to be used with v-model
//             return {
//                 args,
//             };
//         },
//         template: `
//             <div style="display:flex; align-items: center; flex-wrap: wrap; gap: 16px">
//                 <CircleProgress
//                     themeColor="primary"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="secondary"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="neutral"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="info"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="success"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="warning"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//                 <CircleProgress
//                     themeColor="error"
//                     :label="args.label"
//                     :percent="args.percent"
//                     :size="args.size"
//                     :strokeWidth="args.strokeWidth"
//                     :className="args.className"
//                 ></CircleProgress>
//             </div>
//
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             // include: ['themeColor', 'label', 'value', 'name' ],
//             exclude: [ 'themeColor' ]
//         },
//         docs: {
//             source: {
//                 transform: (src, storyContext) => {
//                     const { args } = storyContext;
//                     return [
//                         '<CircleProgress',
//                         `  themeColor="primary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="secondary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="tertiary"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="success"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="warning"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="error"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                         '<CircleProgress',
//                         `  themeColor="info"`,
//                         `  label="${args.label}"`,
//                         `  :percent="${args.percent}"`,
//                         `  :size="${args.size}"`,
//                         `  :strokeWidth="${args.strokeWidth}"`,
//                         `  className="${args.className}"`,
//                         '></CircleProgress>',
//                     ].join('\n').trim();
//                 }
//             }
//         }
//     },
// };
