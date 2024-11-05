import Checkbox from "./Checkbox.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Checkbox*",
    component: Checkbox,
    excludeStories: /.*Data$/,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "文字標籤",
            control: { type: "text" },
        },
        id: {
            description:"對應 label 的 for",
            control: { type: "text" },
        },
        value: {
            description: "",
            control: { type: "text" },
        },
        name: {
            description: "",
            control: { type: "text" },
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
            description: "客製化樣式",
            control: { type: "text" },
        },
        isChecked: {
            description:'是否選擇',
            control: { type: "boolean" },
        },
        isMultiple: {
            description: "是否複選框",
            control: { type: "boolean" },
        }
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

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 預設項目(內容待確認)1 ====//
export const CheckboxDefaultStory = {
    name: "預設項目(內容待確認)1",
    args: {
        label: "我已閱讀並同意相關服務條款",
        id: "acceptTerms",
        name: "terms",
        themeColor: "primary",
        className: "",
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const isCheckboxChecked = ref(false);
            return {
                args,
                isCheckboxChecked
            };
        },
        template: `
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                :className="args.className"
                v-model="isCheckboxChecked"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'value', 'name', 'themeColor', 'className'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Checkbox',
                        `  label="${args.label}"`,
                        `  id="${args.id}"`,
                        `  value="${args.value}"`,
                        `  name="${args.name}"`,
                        `  themeColor="${args.themeColor}"`,
                        `  className="${args.className}"`,
                        '  v-model="isCheckboxChecked"',
                        '>',
                        `  ${args.label}`,
                        '</Checkbox>'
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 預設項目(內容待確認)2 ====//
export const CheckboxMultiStory = {
    name: "預設項目(內容待確認)2",
    args: {
        themeColor: "primary",
        className: "",
        datasource: [
            { label: "選項ㄧ", id: "option1", value: "option1", name: "options",checked: true },
            { label: "選項二", id: "option2", value: "option2", name: "options" },
            { label: "選項三", id: "option3", value: "option3", name: "options" },
        ],
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
            <div style="display: inline-flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasource"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    :isChecked="item.checked"
                    v-model="checkedCheckboxOptions"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <p>已選項目: {{checkedCheckboxOptions}}</p>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        // docs: {
        //     source: {
        //         transform: (src, storyContext) => {
        //             const { args } = storyContext;
        //             return [
        //                 '<Checkbox',
        //                 `  label="${args.datasource[0].label}"`,
        //                 `  value="${args.datasource[0].value}"`,
        //                 `  name="${args.datasource[0].name}"`,
        //                 `  id="${args.datasource[0].id}"`,
        //                 `  themeColor="${args.themeColor}"`,
        //                 `  className="${args.className}"`,
        //                 '>',
        //                 `  ${args.datasource[0].label}`,
        //                 '</Checkbox>'
        //             ].join('\n').trim();
        //         }
        //     }
        // }
    },
};

//==== 主題色彩 ====//
export const CheckboxColorStory = {
    name: "主題色彩",
    args: {
        themeColor: "primary",
        className: "",
        datasourcePrimary: [
            { label: "選項ㄧ", id: "option1", value: "option1", name: "primary",checked: true },
            { label: "選項二", id: "option2", value: "option2", name: "primary" },
            { label: "選項三", id: "option3", value: "option3", name: "primary" },
        ],
        datasourceSecondary: [
            { label: "選項ㄧ", id: "option4", value: "option4", name: "secondary",checked: true },
            { label: "選項二", id: "option5", value: "option5", name: "secondary" },
            { label: "選項三", id: "option6", value: "option6", name: "secondary" },
        ],
        datasourceTertiary: [
            { label: "選項ㄧ", id: "option7", value: "option7", name: "tertiary",checked: true },
            { label: "選項二", id: "option8", value: "option8", name: "tertiary" },
            { label: "選項三", id: "option9", value: "option9", name: "tertiary" },
        ],
        datasourceSuccess: [
            { label: "選項ㄧ", id: "option10", value: "option10", name: "success",checked: true },
            { label: "選項二", id: "option11", value: "option11", name: "success" },
            { label: "選項三", id: "option12", value: "option12", name: "success" },
        ],
        datasourceWarning: [
            { label: "選項ㄧ", id: "option13", value: "option13", name: "warning",checked: true },
            { label: "選項二", id: "option14", value: "option14", name: "warning" },
            { label: "選項三", id: "option15", value: "option15", name: "warning" },
        ],
        datasourceError: [
            { label: "選項ㄧ", id: "option16", value: "option16", name: "error",checked: true },
            { label: "選項二", id: "option17", value: "option17", name: "error" },
            { label: "選項三", id: "option18", value: "option18", name: "error" },
        ],
        datasourceInfo: [
            { label: "選項ㄧ", id: "option19", value: "option19", name: "info",checked: true },
            { label: "選項二", id: "option20", value: "option20", name: "info" },
            { label: "選項三", id: "option21", value: "option21", name: "info" },
        ],
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
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourcePrimary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="primary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSecondary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="secondary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceTertiary"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="tertiary"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceSuccess"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="success"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceWarning"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="warning"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceError"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="error"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
                <Checkbox
                    v-for="(item, index) in args.datasourceInfo"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    themeColor="info"
                    :isChecked="item.checked"
                    isMultiple
                >{{item.value}}</Checkbox>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        // docs: {
        //     source: {
        //         transform: (src, storyContext) => {
        //             const { args } = storyContext;
        //             return [
        //                 '<Checkbox',
        //                 `  label="${args.datasource[0].label}"`,
        //                 `  value="${args.datasource[0].value}"`,
        //                 `  name="${args.datasource[0].name}"`,
        //                 `  id="${args.datasource[0].id}"`,
        //                 `  themeColor="${args.themeColor}"`,
        //                 `  className="${args.className}"`,
        //                 '>',
        //                 `  ${args.datasource[0].label}`,
        //                 '</Checkbox>'
        //             ].join('\n').trim();
        //         }
        //     }
        // }
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

//--- JONY VERSION END ---//