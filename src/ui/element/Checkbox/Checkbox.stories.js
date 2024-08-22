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
                :value="args.value"
                :label="args.label"
                :name="args.name"
                :themeColor="args.themeColor"
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

export const MultipleCheckbox = {
    name: "複選樣式",
    args: {
        themeColor: "primary",
        checkboxOptions: [
            { label: "選項一", value: "option1", name: "option" },
            { label: "選項二", value: "option2", name: "option" },
            { label: "選項三", value: "option3", name: "option" },
        ],
        direction: "row",
    },
    render: (args) => ({
        components: { Checkbox, CheckboxGroup },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const modelValue = ref(args.modelValue);
            return {
                args,
                modelValue,
            };
        },
        template: `
        <CheckboxGroup :direction="args.direction">
            <Checkbox   v-for="(item, index) in args.checkOptions"
                        :key="index"
                        :value="item.value"
                        :label="item.label"
                        :name="item.name"
                        v-model="modelValue"></Checkbox>
        </CheckboxGroup>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};
