import Checkbox from "./Checkbox.vue";
import { ref } from "vue";
function formatDataSource(dataSource) {
    return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
        isDisabled: '${item.isDisabled}'
    }`).join(',\n    ')}
  ]`;
}

export default {
    title: "Component/Checkbox",
    component: Checkbox,
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
        //             summary: "primary | secondary | tertiary | success | warning | error | info"
        //         }
        //     }
        // },
        dataSource: {
            description: "資料來源",
            control: { type: "object" },
            table: {
                type: {
                    summary: "{ label: string; value: string; }[]",
                }
            }
        },
        initValue: {
            description: "選中的項目",
            control: { type: "object" },
            table: {
                type: {
                    summary: "string[]"
                }
            }
        },
        direction: {
            description: "排列方向",
            control: { type: "select" },
            options: ["row", "column"],
            table: {
                type: {
                    summary: "row | column"
                }
            }
        },
        size: {
            description: "尺寸",
            control: { type: "select" },
            options: ["small", "medium", "large"],
            table: {
                type: {
                    summary: "small | medium | large",
                }
            }
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Checkbox",
            description: {
                component: "Checkbox 組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const CheckboxMultiStory = {
    name: "預設項目",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option1",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option2",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option3",
                "isDisabled": true
            }
        ],
        initValue: ["option1", "option3"],
        direction: "row",
        size: "medium",
        className: "",
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checkedCheckboxOptions = ref([]);
            return {
                args,
                checkedCheckboxOptions,
            };
        },
        template: `
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        '<Checkbox',
                        `  themeColor="${args.themeColor}"`,
                        `  :dataSource="${dataSourceString}"`,
                        `  :initValue="[${args.initValue}]"`,
                        `  direction="${args.direction}"`,
                        `  size="${args.size}"`,
                        `  className="${args.className}"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 排列方向 ====//
export const CheckboxDirection = {
    name: "排列方向",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option4",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option5",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option6",
                "isDisabled": false
            }
        ],
        initValue: ["option4", "option6"],
        direction: "row",
        size: "medium",
        className: "",
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const checkedCheckboxOptions = ref([]);
            return {
                args,
                checkedCheckboxOptions,
            };
        },
        template: `
            <Checkbox
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        '<Checkbox',
                        `  themeColor="${args.themeColor}"`,
                        `  :dataSource="${dataSourceString}"`,
                        `  :initValue="[${args.initValue}]"`,
                        `  :direction="${args.direction}"`,
                        `  size="${args.size}"`,
                        `  className="${args.className}"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 主題色彩 ====//
// export const CheckboxColorStory = {
//     name: "主題色彩",
//     args: {
//         datasourcePrimary: [
//             { label: "Option1", value: "option01", "isDisabled": false },
//             { label: "Option2", value: "option02", "isDisabled": false },
//             { label: "Option3", value: "option03", "isDisabled": false },
//         ],
//         datasourceSecondary: [
//             { label: "Option1", value: "option4", "isDisabled": false },
//             { label: "Option2", value: "option5", "isDisabled": false },
//             { label: "Option3", value: "option6", "isDisabled": false },
//         ],
//         datasourceTertiary: [
//             { label: "Option1", value: "option7", "isDisabled": false },
//             { label: "Option2", value: "option8", "isDisabled": false },
//             { label: "Option3", value: "option9", "isDisabled": false },
//         ],
//         datasourceSuccess: [
//             { label: "Option1", value: "option10", "isDisabled": false },
//             { label: "Option2", value: "option11", "isDisabled": false },
//             { label: "Option3", value: "option12", "isDisabled": false },
//         ],
//         datasourceWarning: [
//             { label: "Option1", value: "option13", "isDisabled": false },
//             { label: "Option2", value: "option14", "isDisabled": false },
//             { label: "Option3", value: "option15", "isDisabled": false },
//         ],
//         datasourceError: [
//             { label: "Option1", value: "option16", "isDisabled": false },
//             { label: "Option2", value: "option17", "isDisabled": false },
//             { label: "Option3", value: "option18", "isDisabled": false },
//         ],
//         datasourceInfo: [
//             { label: "Option1", value: "option19", "isDisabled": false },
//             { label: "Option2", value: "option20", "isDisabled": false },
//             { label: "Option3", value: "option21", "isDisabled": false },
//         ],
//         initValue: ["option01","option4","option7","option10","option13","option16","option19"],
//         direction: "row",
//         className: "",
//     },
//     render: (args) => ({
//         components: { Checkbox },
//         setup() {
//             const checkedCheckboxOptions = ref([]);
//             return {
//                 args,
//                 checkedCheckboxOptions,
//             };
//         },
//         template: `
//             <div style="display: flex; flex-direction:column; gap: 16px;">
//                 <Checkbox
//                     themeColor="primary"
//                     :dataSource="args.datasourcePrimary"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//                 <Checkbox
//                     themeColor="secondary"
//                     :dataSource="args.datasourceSecondary"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//                 <Checkbox
//                     themeColor="neutral"
//                     :dataSource="args.datasourceTertiary"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//
//                 <Checkbox
//                     themeColor="info"
//                     :dataSource="args.datasourceInfo"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//
//                 <Checkbox
//                     themeColor="success"
//                     :dataSource="args.datasourceSuccess"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//
//                 <Checkbox
//                     themeColor="warning"
//                     :dataSource="args.datasourceWarning"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//
//                 <Checkbox
//                     themeColor="error"
//                     :dataSource="args.datasourceError"
//                     :initValue="args.initValue"
//                     :direction="args.direction"
//                     :className="args.className"
//                     v-model="checkedCheckboxOptions"></Checkbox>
//             </div>
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
//         },
//         docs: {
//             source: {
//                 transform: (src, storyContext) => {
//                     const { args } = storyContext;
//                     const datasourcePrimary = formatDataSource(args.datasourcePrimary);
//                     const datasourceSecondary = formatDataSource(args.datasourceSecondary);
//                     const datasourceTertiary = formatDataSource(args.datasourceTertiary);
//                     const datasourceSuccess = formatDataSource(args.datasourceSuccess);
//                     const datasourceWarning = formatDataSource(args.datasourceWarning);
//                     const datasourceError = formatDataSource(args.datasourceError);
//                     const datasourceInfo = formatDataSource(args.datasourceInfo);
//                     return [
//                         '<Checkbox',
//                         `  themeColor="primary"`,
//                         `  :dataSource="${datasourcePrimary}"`,
//                         `  :initValue="[${args.initValue[0]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//                         '<Checkbox',
//                         `  themeColor="secondary"`,
//                         `  :dataSource="${datasourceSecondary}"`,
//                         `  :initValue="[${args.initValue[1]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//                         '<Checkbox',
//                         `  themeColor="neutral"`,
//                         `  :dataSource="${datasourceTertiary}"`,
//                         `  :initValue="[${args.initValue[2]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//                         '<Checkbox',
//                         `  themeColor="info"`,
//                         `  :dataSource="${datasourceInfo}"`,
//                         `  :initValue="[${args.initValue[6]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//                         '<Checkbox',
//                         `  themeColor="success"`,
//                         `  :dataSource="${datasourceSuccess}"`,
//                         `  :initValue="[${args.initValue[3]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '<Checkbox',
//                         `  themeColor="warning"`,
//                         `  :dataSource="${datasourceWarning}"`,
//                         `  :initValue="[${args.initValue[4]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//                         '<Checkbox',
//                         `  themeColor="error"`,
//                         `  :dataSource="${datasourceError}"`,
//                         `  :initValue="[${args.initValue[5]}]"`,
//                         `  direction="${args.direction}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="vModelData">',
//                         '</Checkbox>',
//
//                     ].join('\n').trim();
//                 }
//             }
//         }
//     },
// };