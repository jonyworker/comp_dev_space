import Checkbox from "./Checkbox.vue";
import { ref } from "vue";
function formatDataSource(dataSource) {
    return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

export default {
    title: "Design System/Checkbox",
    component: Checkbox,
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
            table: {
                type: {
                    summary: "primary | secondary | tertiary | success | warning | error | info"
                }
            }
        },
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
        themeColor: "primary",
        dataSource: [
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
            { label: "Option3", value: "option3" },
        ],
        initValue: ["option1", "option3"],
        direction: "row",
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
                v-model="checkedCheckboxOptions"></Checkbox>
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
                        `  themeColor="'${args.themeColor}'"`,
                        `  :dataSource="${dataSourceString}"`,
                        `  :initValue="[${args.initValue}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 主題色彩 ====//
export const CheckboxColorStory = {
    name: "主題色彩",
    args: {
        datasourcePrimary: [
            { label: "選項ㄧ", value: "option01" },
            { label: "選項二", value: "option02" },
            { label: "選項三", value: "option03" },
        ],
        datasourceSecondary: [
            { label: "選項ㄧ", value: "option4" },
            { label: "選項二", value: "option5" },
            { label: "選項三", value: "option6" },
        ],
        datasourceTertiary: [
            { label: "選項ㄧ", value: "option7" },
            { label: "選項二", value: "option8" },
            { label: "選項三", value: "option9" },
        ],
        datasourceSuccess: [
            { label: "選項ㄧ", value: "option10" },
            { label: "選項二", value: "option11" },
            { label: "選項三", value: "option12" },
        ],
        datasourceWarning: [
            { label: "選項ㄧ", value: "option13" },
            { label: "選項二", value: "option14" },
            { label: "選項三", value: "option15" },
        ],
        datasourceError: [
            { label: "選項ㄧ", value: "option16" },
            { label: "選項二", value: "option17" },
            { label: "選項三", value: "option18" },
        ],
        datasourceInfo: [
            { label: "選項ㄧ", value: "option19" },
            { label: "選項二", value: "option20" },
            { label: "選項三", value: "option21" },
        ],
        initValue: ["option01","option4","option7","option10","option13","option16","option19"],
        direction: "row",
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
            <div style="display: flex; flex-direction:column; gap: 16px;">
                <Checkbox
                    themeColor="primary"
                    :dataSource="args.datasourcePrimary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="secondary"
                    :dataSource="args.datasourceSecondary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                <Checkbox
                    themeColor="tertiary"
                    :dataSource="args.datasourceTertiary"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="success"
                    :dataSource="args.datasourceSuccess"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="warning"
                    :dataSource="args.datasourceWarning"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>

                <Checkbox
                    themeColor="error"
                    :dataSource="args.datasourceError"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
                
                <Checkbox
                    themeColor="info"
                    :dataSource="args.datasourceInfo"
                    :initValue="args.initValue"
                    :direction="args.direction"
                    v-model="checkedCheckboxOptions"></Checkbox>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const datasourcePrimary = formatDataSource(args.datasourcePrimary);
                    const datasourceSecondary = formatDataSource(args.datasourceSecondary);
                    const datasourceTertiary = formatDataSource(args.datasourceTertiary);
                    const datasourceSuccess = formatDataSource(args.datasourceSuccess);
                    const datasourceWarning = formatDataSource(args.datasourceWarning);
                    const datasourceError = formatDataSource(args.datasourceError);
                    const datasourceInfo = formatDataSource(args.datasourceInfo);
                    return [
                        '<Checkbox',
                        `  themeColor="primary"`,
                        `  :dataSource="${datasourcePrimary}"`,
                        `  :initValue="[${args.initValue[0]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                        '<Checkbox',
                        `  themeColor="secondary"`,
                        `  :dataSource="${datasourceSecondary}"`,
                        `  :initValue="[${args.initValue[1]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                        '<Checkbox',
                        `  themeColor="tertiary"`,
                        `  :dataSource="${datasourceTertiary}"`,
                        `  :initValue="[${args.initValue[2]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                        '<Checkbox',
                        `  themeColor="success"`,
                        `  :dataSource="${datasourceSuccess}"`,
                        `  :initValue="[${args.initValue[3]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '<Checkbox',
                        `  themeColor="warning"`,
                        `  :dataSource="${datasourceWarning}"`,
                        `  :initValue="[${args.initValue[4]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                        '<Checkbox',
                        `  themeColor="error"`,
                        `  :dataSource="${datasourceError}"`,
                        `  :initValue="[${args.initValue[5]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                        '<Checkbox',
                        `  themeColor="info"`,
                        `  :dataSource="${datasourceInfo}"`,
                        `  :initValue="[${args.initValue[6]}]"`,
                        `  direction="'${args.direction}'"`,
                        '  v-model="vModelData">',
                        '</Checkbox>',
                    ].join('\n').trim();
                }
            }
        }
    },
};









//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
//     title: "Design System/Checkbox",
//     component: Checkbox,
//     excludeStories: /.*Data$/,
//     tags: ["autodocs"],
//     argTypes: {
//         label: {
//             description: "Checkbox 旁邊顯示的文字標籤",
//             control: { type: "text" },
//         },
//         id: {
//             description:"Checkbox 的唯一識別碼，並且與 label 的 for 屬性相連接",
//             control: { type: "text" },
//         },
//         value: {
//             description: "Checkbox 複選樣式選項的值",
//             control: { type: "text" },
//         },
//         name: {
//             description: "Checkbox 複選樣式選項的名稱",
//             control: { type: "text" },
//         },
//         themeColor: {
//             description: "Checkbox 主題顏色選擇",
//             control: { type: "select" },
//             options: [
//                 "primary",
//                 "secondary",
//                 "tertiary",
//                 "success",
//                 "warning",
//                 "error",
//                 "info",
//             ],
//         },
//         customClass: {
//             description: "客製化樣式",
//             control: { type: "text" },
//         },
//     },
//     parameters: {
//         // 自動文件
//         docs: {
//             title: "複選框",
//             description: {
//                 component: "複選框組件的呈現及說明。",
//             },
//         },
//     },
//
//     // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//     // args: { onClick: fn() },
// };
//
// //==== checkbox 單選樣式 ====//
// export const SingleCheckbox = {
//     name: "checkbox 單選樣式",
//     args: {
//         label: "我已閱讀並同意相關服務條款",
//         id: "acceptTerms",
//         name: "terms",
//         themeColor: "primary",
//     },
//     render: (args) => ({
//         components: { Checkbox },
//         setup() {
//             const isCheckboxChecked = ref(false);
//             return {
//                 args,
//                 isCheckboxChecked,
//             };
//         },
//         template: `
//             <Checkbox
//                 :label="args.label"
//                 :id="args.id"
//                 :name="args.name"
//                 :themeColor="args.themeColor"
//                 v-model="isCheckboxChecked"
//             ></Checkbox>
//             <br/>
//             v-model value: {{isCheckboxChecked}}
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             include: [ 'label', 'id', 'name', 'themeColor'],
//         },
//     },
// };

//==== 預設項目(內容待確認)1 ====//
// export const CheckboxDefaultStory = {
//     name: "預設項目(內容待確認)1",
//     args: {
//         label: "我已閱讀並同意相關服務條款",
//         id: "acceptTerms",
//         name: "terms",
//         themeColor: "primary",
//         className: "",
//         isChecked: true,
//     },
//     render: (args) => ({
//         components: { Checkbox },
//         setup() {
//             const isCheckboxChecked = ref(false);
//             return {
//                 args,
//                 isCheckboxChecked
//             };
//         },
//         template: `
//             <Checkbox
//                 :label="args.label"
//                 :id="args.id"
//                 :name="args.name"
//                 :themeColor="args.themeColor"
//                 :className="args.className"
//                 v-model="isCheckboxChecked"
//                 :isChecked="args.isChecked"
//             ></Checkbox>
//             <br/>
//             v-model value: {{isCheckboxChecked}}
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             include: [ 'label', 'id', 'value', 'name', 'themeColor', 'className', 'isChecked' ],
//         },
//         docs: {
//             source: {
//                 transform: (src, storyContext) => {
//                     const { args } = storyContext;
//                     return [
//                         '<Checkbox',
//                         `  label="${args.label}"`,
//                         `  id="${args.id}"`,
//                         `  value="${args.value}"`,
//                         `  name="${args.name}"`,
//                         `  themeColor="${args.themeColor}"`,
//                         `  className="${args.className}"`,
//                         '  v-model="isCheckboxChecked"',
//                         '>',
//                         `  ${args.label}`,
//                         '</Checkbox>'
//                     ].join('\n').trim();
//                 }
//             }
//         }
//     },
// };


//--- JONY VERSION END ---//