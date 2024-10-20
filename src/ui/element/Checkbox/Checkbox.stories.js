import Checkbox from "./Checkbox.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Checkbox",
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

//==== checkbox 單選樣式 ====//
export const SingleCheckbox = {
    name: "checkbox 單選樣式",
    args: {
        label: "我已閱讀並同意相關服務條款",
        id: "acceptTerms",
        name: "terms",
        themeColor: "primary",
        className: ""
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            const isCheckboxChecked = ref(false);
            return {
                args,
                isCheckboxChecked,
            };
        },
        template: `
            <Checkbox
                :label="args.label"
                :id="args.id"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isCheckboxChecked"
                :className="args.className"
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'name', 'themeColor', 'className'],
        },
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