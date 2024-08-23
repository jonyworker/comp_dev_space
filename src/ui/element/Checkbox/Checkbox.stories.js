import Checkbox from "./Checkbox.vue";
import CheckboxGroup from "./CheckboxGroup.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        //以下參數不刪
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
        customClass: {
            description: "客製化樣式",
            control: { type: "text" },
        },
        label: {
            description: "Checkbox選項文字",
            control: { type: "text" },
        },
        value: {
            description: "Checkbox選項值",
            control: { type: "Object" },
        },
        name: {
            description: "Checkbox表單用name",
            control: { type: "text" },
        },
        modelValue: {
            description: "Checkbox的綁定值",
            control: { type: "Object" },
        },
        direction: {
            description: "Checkbox群組方向",
            control: { type: "select" },
            options: ["row", "column"],
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
    name: "單選樣式",
    args: {
        label: "我已閱讀並同意",
        name: "agreeStatement",
        value: false,
        themeColor: "primary",
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const modelValue = ref(args.modelValue);
            return {
                args,
                modelValue,
            };
        },
        template: `
            <Checkbox
                :themeColor="args.themeColor"
                :label="args.label"
                :value="args.value"
                :name="args.name"
                v-model="modelValue"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== checkbox     name: "複選樣式", ====//
export const MultipleCheckbox = {
    name: "複選樣式",
    args: {
        themeColor: "primary",
        checkboxOptions: [
            { label: "HTML", value: "HTML", name: "skills" },
            { label: "Sass", value: "Sass", name: "skills" },
            { label: "Tailwind CSS", value: "Tailwind CSS", name: "skills" },
            { label: "JavaScript", value: "JavaScript", name: "skills" },
            { label: "TypeScript", value: "TypeScript", name: "skills" },
            { label: "Vue", value: "Vue", name: "skills" },
            { label: "React", value: "React", name: "skills" },
            { label: "Angular", value: "Angular", name: "skills" },
        ],
        direction: "row",
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
            <Checkbox   v-for="(item, index) in args.checkboxOptions"
                        :key="index"
                        :themeColor="args.themeColor"
                        :label="item.label"
                        :value="item.value"
                        :name="item.name"
                        v-model="checkedCheckboxOptions">{{item.value}}</Checkbox>
        </CheckboxGroup>
        <p>Tell me what skills you have:{{checkedCheckboxOptions}}</p>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};
