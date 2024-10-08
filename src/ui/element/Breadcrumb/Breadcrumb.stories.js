import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Breadcrumb",
    component: Breadcrumb,
    subcomponents: { BreadcrumbItem },
    tags: ["autodocs"],
    argTypes: {
        items: {
            description: "用於顯示的 Breadcrumb 項目，應包含路徑及其名稱的對應關係",
            control: { type: "object" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Breadcrumb",
            description: {
                component: "Breadcrumb 組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== Breadcrumb 基礎樣式 ====//
export const BreadcrumbDefault = {
    name: "Breadcrumb 基礎樣式",
    args: {
        items: [
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
                :items="args.items"
            ></Breadcrumb>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: ['items' ],
        },
    },
};

//==== Breadcrumb 多層次樣式 ====//
export const BreadcrumbMany = {
    name: "Breadcrumb 多層次樣式",
    args: {
        items: [
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
                label: "第四層",
                href: "/4th",
            },
            {
                label: "第五層",
                href: "/5th",
            },
            {
                label: "第六層",
                href: "/6th",
            },
            {
                label: "第七層",
                href: "/7th",
            },
            {
                label: "第八層",
                href: "/8th",
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
                :items="args.items"
            ></Breadcrumb>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            include: ['items' ],
        },
    },
};
