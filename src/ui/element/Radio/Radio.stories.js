import Radio from "./Radio.vue";
import RadioGroup from "./RadioGroup.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Radio",
    component: Radio,
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
        label: {
            description: "Radio選項文字",
            control: { type: "text" },
        },
        value: {
            description: "Radio選項值",
            control: { type: "text" },
        },
        name: {
            description: "Radio表單用name",
            control: { type: "text" },
        },
        modelValue: {
            description: "Radio的綁定值",
            control: { type: "Object" },
        },
        direction: {
            description: "Radio群組方向",
            control: { type: "select" },
            options: ["row", "column"],
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "單選框",
            description: {
                component: "單選框組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export const DefaultRadio = {
    name: "標準 Radio Button",
    args: {
        label: "DefaultRadio",
        name: "DefaultRadio",
        value: "DefaultRadio",
        themeColor: "primary",
    },
    render: (args) => ({
        components: { Radio },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const isRadioPicked = ref("");
            return {
                args,
                isRadioPicked
            };
        },
        template: `
            <Radio
                :label="args.label"
                :value="args.value"
                :name="args.name"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></Radio>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

export const MultipleRadio = {
    name: "Radio Button Group",
    args: {
        themeColor: "primary",
        radioList: [
            {
                inputId: "meals01",
                name: "Meals",
                value: "Pak Nasser's Nasi Lemak",
                label: "帕南薩馬來椰漿飯",
            },
            {
                inputId: "meals02",
                name: "Meals",
                value: "Hyderabadi Vegetable Biryani",
                label: "海德拉巴素食印度香飯",
            },
            {
                inputId: "meals03",
                name: "Meals",
                value: "Uncle Chin's Chicken Rice",
                label: "秦叔叔海南雞飯",
            },
        ],
        direction: "row",
    },
    render: (args) => ({
        components: { Radio, RadioGroup },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const isRadioPicked = ref("");
            return {
                args,
                isRadioPicked
            };
        },
        template: `
        <RadioGroup :direction="args.direction">
            <Radio   v-for="(item) in args.radioList"
                        :inputId="item.inputId"
                        :name="item.name"
                        :value="item.value"
                        :label="item.label"
                        v-model="isRadioPicked">
            </Radio>
        </RadioGroup>
        <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};
