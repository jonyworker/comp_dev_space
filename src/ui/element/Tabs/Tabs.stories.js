import Tabs from "./Tabs.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Tabs",
    component: Tabs,
    tags: ["Tabs"],
    argTypes: {
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
        type: {
            description: "頁籤樣式",
            control: { type: "radio" },
            options: ["default", "card",],
        },
        activeIndex: {
            description: '活動頁籤索引',
            control: {type: 'number',},
        },
        isDisabled: {
            description: "是否禁用",
            control: { type: "boolean" },
        },
        tabsData: {
            description: "頁籤列表",
            control: { type: "array" },
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },

    },
    parameters: {
        // 自動文件
        docs: {
            title: "Tabs",
            description: {
                component: "Tabs 組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 主要項目 ====//
export const DefaultTabs = {
    name: "主要項目",
    args: {
        themeColor: "primary",
        type: "default",
        isDisabled: false,
        activeIndex: 0,
        tabsData: [
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
                "content": "內容三",
            }],
        className: ''
    },
    render: (args) => ({
        components: { Tabs },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
                :className="args.className"
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

//==== 卡片式頁籤 ====//
export const CardTabs = {
    name: "卡片式頁籤",
    args: {
        themeColor: "primary",
        type: "card",
        isDisabled: false,
        activeIndex: 0,
        tabsData: [
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
                "content": "內容三",
            }],
        className: ''
    },
    render: (args) => ({
        components: { Tabs },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Tabs
                :themeColor="args.themeColor"
                :type="args.type"
                :activeIndex="args.activeIndex"
                :isDisabled="args.isDisabled"
                :tabsData="args.tabsData"
                :className="args.className"
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





//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
//     title: "Design System/Tabs",
//     component: Tabs,
//     tags: ["Tabs"],
//     argTypes: {
//         themeColor: {
//             description: "選擇 Tabs 的主題顏色",
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
//         type: {
//             description: "選擇 Tabs 的樣式類型",
//             control: { type: "radio" },
//             options: ["default", "card",],
//         },
//         activeIndex: {
//             description: '指定當前活動的 Tabs 索引',
//             control: {type: 'number',},
//         },
//         isDisabled: {
//             description: "設定 Tabs 是否禁用，禁用後無法互動",
//             control: { type: "boolean" },
//         },
//         tabsData: {
//             description: "Tabs 對應的資料陣列，每個項目表示一個頁籤",
//             control: { type: "array" },
//         },
//         customClass: {
//             description: "提供自訂的 CSS 類名以覆蓋預設樣式",
//             control: { type: "text" },
//         },
//
//     },
//     parameters: {
//         // 自動文件
//         docs: {
//             title: "Tabs",
//             description: {
//                 component: "Tabs 組件的呈現及說明。",
//             },
//         },
//     },
//
//     // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//     // args: { onClick: fn() },
// };
//
// //==== Tabs 基礎樣式 ====//
// export const DefaultTabs = {
//     name: "Tabs 基礎樣式",
//     args: {
//         themeColor: "primary",
//         type: "default",
//         isDisabled: false,
//         activeIndex: 0,
//         tabsData: [
//             {
//                 "title": "頁籤 1",
//                 "content": "內容一"
//             },
//             {
//                 "title": "頁籤 2",
//                 "content": "內容二"
//             },
//             {
//                 "title": "頁籤 3",
//                 "content": "內容三",
//             }]
//     },
//     render: (args) => ({
//         components: { Tabs },
//         setup() {
//             return {
//                 args,
//             };
//         },
//         template: `
//             <Tabs
//                 :themeColor="args.themeColor"
//                 :type="args.type"
//                 :activeIndex="args.activeIndex"
//                 :isDisabled="args.isDisabled"
//                 :tabsData="args.tabsData"
//             ></Tabs>
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             // include: ['themeColor', 'label', 'value', 'name' ],
//         },
//     },
// };
//
// //==== Tabs 單獨禁用樣式 ====//
// export const TabsSingleDisabled = {
//     name: "Tabs 單獨禁用樣式",
//     args: {
//         themeColor: "primary",
//         type: "default",
//         isDisabled: false,
//         activeIndex: 0,
//         tabsData: [
//             {
//                 "title": "頁籤 1",
//                 "content": "內容一"
//             },
//             {
//                 "title": "頁籤 2",
//                 "content": "內容二",
//                 "isDisabled": true,
//             },
//             {
//                 "title": "頁籤 3",
//                 "content": "內容三",
//             }]
//     },
//     render: (args) => ({
//         components: { Tabs },
//         setup() {
//             return {
//                 args,
//             };
//         },
//         template: `
//             <Tabs
//                 :themeColor="args.themeColor"
//                 :type="args.type"
//                 :activeIndex="args.activeIndex"
//                 :isDisabled="args.isDisabled"
//                 :tabsData="args.tabsData"
//             ></Tabs>
//         `,
//     }),
//     // 控制 controls 中能控制的參數
//     parameters: {
//         controls: {
//             // include: ['themeColor', 'label', 'value', 'name' ],
//         },
//     },
// };

//--- JONY VERSION END ---//