import Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Checkbox",
    component: Checkbox,
    excludeStories: /.*Data$/,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "Checkbox 旁邊顯示的文字標籤",
            control: { type: "text" },
        },
        id: {
            description:"Checkbox 的唯一識別碼",
            control: { type: "text" },
        },
        value: {
            description: "Checkbox 複選樣式選項的值",
            control: { type: "text" },
        },
        name: {
            description: "Checkbox 複選樣式選項的名稱",
            control: { type: "text" },
        },
        direction: {
            description: "Checkbox 複選樣式群組的排列方向，選擇橫向或縱向",
            control: { type: "select" },
            options: ["row", "column"],
        },
        themeColor: {
            description: "Checkbox 主題顏色選擇",
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
        customClass: {
            description: "客製化樣式",
            control: { type: "text" },
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

//==== checkbox 單選樣式 ====//
export const SingleCheckbox = {
    name: "checkbox 單選樣式",
    args: {
        label: "我已閱讀並同意相關服務條款",
        id: "checkbox",
        name: "agreeStatement",
        themeColor: "primary",
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
            ></Checkbox>
            <br/>
            v-model value: {{isCheckboxChecked}}
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: [ 'label', 'id', 'name', 'themeColor'],
        },
    },
};

//==== checkbox 複選樣式 ====//
export const MultiCheckbox = {
    name: "checkbox 複選樣式",
    args: {
        direction: "row",
        themeColor: "primary",
        checkboxOptions: [
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
                <Checkbox v-for="(item, index) in args.checkboxOptions"
                    :key="index"
                    :label="item.label"
                    :id="item.id"
                    :value="item.value"
                    :name="item.name"
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
            include: ['themeColor', 'direction', 'checkboxOptions'],
        },
    },
};
