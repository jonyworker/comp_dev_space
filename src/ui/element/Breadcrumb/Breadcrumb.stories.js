import { ref } from "vue";
import Breadcrumb from "./Breadcrumb.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Breadcrumb",
    component: Breadcrumb,
    tags: ["autodocs"],
    argTypes: {
        breadcrumbData: {
            description: "Breadcrumb資料接口",
            control: { type: "text" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Breadcrumb",
            description: {
                component: "Breadcrumb組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== Breadcrumb 基礎樣式 ====//
export const BreadcrumbDefault = {
    name: "Breadcrumb基礎樣式",
    args: {
        breadcrumbData: [
            {
                label: "首頁",
                href: "/",
            },
            {
                label: "第一層",
                href: "/1st",
            },
            {
                label: "當前頁",
            },
        ],
    },
    render: (args) => ({
        components: { Breadcrumb },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Breadcrumb
							:breadcrumbData="args.breadcrumbData"
						></Breadcrumb>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== Breadcrumb 基礎樣式 ====//
export const BreadcrumbMany = {
    name: "Breadcrumb多資料層表示",
    args: {
        breadcrumbData: [
            {
                label: "首頁",
                href: "/",
            },
            {
                label: "第一層",
                href: "/1st",
            },
            {
                label: "第二層",
                href: "/2nd",
            },
            {
                label: "第三層",
                href: "/3rd",
            },
            {
                label: "第n層",
                href: "/nPages",
            },
            {
                label: "當前頁",
            },
        ],
    },
    render: (args) => ({
        components: { Breadcrumb },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Breadcrumb
							:breadcrumbData="args.breadcrumbData"
						></Breadcrumb>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};
