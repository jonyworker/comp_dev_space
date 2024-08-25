import Tabs from "./Tabs.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Tabs",
    component: Tabs,
    tags: ["Tabs"],
    argTypes: {
        themeColor: {
            description: "頁籤主題顏色",
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
        type: {
            description: "頁籤樣式",
            control: { type: "radio" },
            options: ["default", "card",],
        },
        customClass: {
            description: "客製化頁籤樣式",
            control: { type: "text" },
        },
        activeIndex: {
            description: '活動頁籤索引',
            control: {type: 'number',},
        },
        isDisabled: {
            description: "頁籤是否禁用",
            control: { type: "Boolean" },
        },
        tabsData: {
            description: "頁籤對應資料",
            control: { type: "Object" },
        },

    },
    parameters: {
        // 自動文件
        docs: {
            title: "頁籤",
            description: {
                component: "頁籤組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== Tabs 基礎頁籤 ====//
export const DefaultTabs = {
    name: "基礎頁籤",
    args: {
        themeColor: "primary",
        type: "default",
        isDisabled: false,
        activeIndex: 0,
    },
    render: (args) => ({
        components: { Tabs },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const tabsData = ref([
                {
                    "title": "頁籤 1",
                    "content": "內容一"
                },
                {
                    "title": "頁籤 2",
                    "content": "內容二"
                },
                {
                    "title": "頁籤 3",
                    "content": "內容三"
                }
            ]);
            return {
                args,
                tabsData,
            };
        },
        template: `
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="tabsData"
            ></Tabs>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};