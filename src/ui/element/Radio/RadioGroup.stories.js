import RadioGroup from "./RadioGroup.vue";
import RadioItem from "./RadioItem.vue";
import { ref } from "vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Radio",
    component: RadioGroup,
    subcomponents: { RadioItem },
    tags: ["autodocs"],
    argTypes: {
        direction: {
            description: "RadioGroup 方向",
            control: { type: "select" },
            options: ["row", "column"],
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "RadioGroup",
            description: {
                component: "RadioGroup 組件的呈現及說明。",
            },
        },
        slots: {
            default: {
                description: '包覆 RadioItems 的包裝層',
                template: `{{ args.default }}`,
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== RadioGroup 基礎樣式 ====//
export const RadioGroupDefault = {
    name: "RadioGroup 基礎樣式",
    args: {
        direction: "row",
    },
    render: (args) => ({
        components: { RadioGroup, RadioItem },
        setup() {
            const radioList = [
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
            ];
            const isRadioPicked = ref("");
            return {
                args,
                isRadioPicked,
                radioList
            };
        },
        template: `
            <RadioGroup :direction="args.direction">
                <RadioItem   v-for="(item) in radioList"
                             :inputId="item.inputId"
                             :label="item.label"
                             :value="item.value"
                             :name="item.name"
                             :themeColor="args.themeColor"
                             v-model="isRadioPicked">
                </RadioItem>
            </RadioGroup>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            expanded: true,
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

