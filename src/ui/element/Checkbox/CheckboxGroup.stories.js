import Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/CheckboxGroup",
    component: Checkbox,
    excludeStories: /.*Data$/,
    tags: ["autodocs"],
    argTypes: {
        direction: {
            description: "方向",
            control: { type: "select" },
            options: ["row", "column"],
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
        options: {
            description: "選項",
            control: { type: "array" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "複選框",
            description: {
                component: "複選框組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== checkbox 複選樣式 ====//
export const MultiCheckbox = {
    name: "checkbox 複選樣式",
    args: {
        direction: "row",
        themeColor: "primary",
        options: [
            { label: "HTML", id: "html", value: "HTML", name: "skills" },
            { label: "Sass", id: "sass", value: "Sass", name: "skills" },
            { label: "Tailwind CSS", id: "tailwind css", value: "Tailwind CSS", name: "skills" },
            { label: "JavaScript", id: "javascript", value: "JavaScript", name: "skills" },
            { label: "TypeScript", id: "typescript", value: "TypeScript", name: "skills" },
            { label: "Vue", id: "vue", value: "Vue", name: "skills" },
            { label: "React", id: "react", value: "React", name: "skills" },
            { label: "Angular", id: "angular", value: "Angular", name: "skills" },
        ],
    },
    render: (args) => ({
        components: { Checkbox, CheckboxGroup },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const checkedCheckboxOptions = ref([]);
            return {
                args,
                checkedCheckboxOptions
            };
        },
        template: `
            <CheckboxGroup :direction="args.direction">
                <Checkbox v-for="(item, index) in args.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                    :name="item.name"
                    :id="item.id"
                    :themeColor="args.themeColor"
                    v-model="checkedCheckboxOptions"
                >{{item.value}}</Checkbox>
            </CheckboxGroup>
            <p style="font-weight: 700;">Tell me what skills you have (v-model):</p>
            <ul style="list-style: none">
                <li v-for="(item) in checkedCheckboxOptions">
                    <span>-</span>
                    {{item}}
                </li>
            </ul>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: ['themeColor', 'direction', 'options'],
        },
    },
};



//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
//     title: "Design System/CheckboxGroup",
//     component: Checkbox,
//     excludeStories: /.*Data$/,
//     tags: ["autodocs"],
//     argTypes: {
//         direction: {
//             description: "Checkbox 複選樣式群組的排列方向，選擇橫向或縱向",
//             control: { type: "select" },
//             options: ["row", "column"],
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
// //==== checkbox 複選樣式 ====//
// export const MultiCheckbox = {
//     name: "checkbox 複選樣式",
//     args: {
//         direction: "row",
//         themeColor: "primary",
//         checkboxOptions: [
//             { label: "HTML", id: "html", value: "HTML", name: "skills" },
//             { label: "Sass", id: "sass", value: "Sass", name: "skills" },
//             { label: "Tailwind CSS", id: "tailwind css", value: "Tailwind CSS", name: "skills" },
//             { label: "JavaScript", id: "javascript", value: "JavaScript", name: "skills" },
//             { label: "TypeScript", id: "typescript", value: "TypeScript", name: "skills" },
//             { label: "Vue", id: "vue", value: "Vue", name: "skills" },
//             { label: "React", id: "react", value: "React", name: "skills" },
//             { label: "Angular", id: "angular", value: "Angular", name: "skills" },
//         ],
//     },
//     render: (args) => ({
//         components: { Checkbox, CheckboxGroup },
//         setup() {
//             // Create a ref for modelValue to be used with v-model
//             const checkedCheckboxOptions = ref([]);
//             return {
//                 args,
//                 checkedCheckboxOptions
//             };
//         },
//         template: `
//             <CheckboxGroup :direction="args.direction">
//                 <Checkbox v-for="(item, index) in args.checkboxOptions"
//                     :key="index"
//                     :label="item.label"
//                     :value="item.value"
//                     :name="item.name"
//                     :id="item.id"
//                     :themeColor="args.themeColor"
//                     v-model="checkedCheckboxOptions"
//                 >{{item.value}}</Checkbox>
//             </CheckboxGroup>
//             <p style="font-weight: 700;">Tell me what skills you have (v-model):</p>
//             <ul style="list-style: none">
//                 <li v-for="(item) in checkedCheckboxOptions">
//                     <span>-</span>
//                     {{item}}
//                 </li>
//             </ul>
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             include: ['themeColor', 'direction', 'checkboxOptions'],
//         },
//     },
// };

//--- JONY VERSION END ---//