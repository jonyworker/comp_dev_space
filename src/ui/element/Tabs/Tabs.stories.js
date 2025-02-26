import Tabs from "@/ui/element/Tabs/Tabs.vue";
function formatDataSource(dataSource) {
    return `[
    ${dataSource.map(item => `{
        title: '${item.title}',
        content: '${item.content}',
    }`).join(',\n    ')}
  ]`;
}

export default {
    title: "Component/Tabs",
    component: Tabs,
    tags: ["Tabs"],
    argTypes: {
        themeColor: {
            description: "主題顏色",
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "neutral",
                "info",
                "success",
                "warning",
                "error",
            ],
            table: {
                type: {
                    summary: "primary | secondary | neutral | info | success | warning | error"
                }
            }
        },
        dataSource: {
            description: "資料來源",
            control: { type: "object" },
            table: {
                type: {
                    summary: "{ title: string; content: string; }[]",
                }
            }
        },
        activeIndex: {
            description: "活動頁籤索引",
            control: {
                type: "number",
                min:0,
                max:2,
                step: 1
            },
        },
        type: {
            description: "頁籤樣式",
            control: { type: "select" },
            options: [ "basic", "outline", "button"],
            table: {
                type: {
                    summary: "basic | outline | button "
                }
            }
        },
        prefix: {
            description: "前綴元素",
            control: {
                type: "select",
                labels: {
                    "": "none",
                    SvgArrowDown: "SvgArrowDown",
                }
            },
            options: [ "", "SvgArrowDown" ],
        },
        isDisabled: {
            description: "是否禁用",
            control: { type: "boolean" },
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
                component: "頁籤組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const DefaultTabs = {
    name: "預設項目",
    args: {
        themeColor: "primary",
        dataSource: [
            {
                "title": "Tab 1",
                "content": "Content 1",
            },
            {
                "title": "Tab 2",
                "content": "Content 2"
            },
            {
                "title": "Tab 3",
                "content": "Content 3",
            }
        ],
        activeIndex: 0,
        type: "basic",
        prefix: 'SvgArrowDown',
        isDisabled: false,
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
                :dataSource="args.dataSource"
                :activeIndex="args.activeIndex"
                :type="args.type"
                :prefix="args.prefix"
                :isDisabled="args.isDisabled"
                :className="args.className"
            ></Tabs>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import { Tabs } from "@ded-wds-vue/ui";`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Tabs',
                        `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
                        `    ${dataSourceString ? `:dataSource="${dataSourceString}"` : ""}`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 頁籤類型 ====//
export const TabsTypesStory = {
    name: "頁籤類型",
    args: {
        themeColor: "primary",
        dataSource: [
            {
                "title": "Tab 1",
                "content": "Content 1",
            },
            {
                "title": "Tab 2",
                "content": "Content 2"
            },
            {
                "title": "Tab 3",
                "content": "Content 3",
            }
        ],
        activeIndex: 0,
        // type: "default",
        prefix: 'SvgArrowDown',
        isDisabled: false,
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
            <div style="display:flex; flex-direction: column; gap:24px">
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="basic"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="outline"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    type="button"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: [ 'type' ]
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        `<script setup>`,
                        `import { Tabs } from "@ded-wds-vue/ui";`,
                        `const dataSource = [`,
                        `  {`,
                        `    title: 'Tab 1',`,
                        `    content: 'Content 1',`,
                        `  },`,
                        `  {`,
                        `    title: 'Tab 2',`,
                        `    content: 'Content 2',`,
                        `  },`,
                        `  {`,
                        `    title: 'Tab 3',`,
                        `    content: 'Content 3',`,
                        `  }`,
                        `];`,
                        ``,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Tabs',
                        `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    type="basic"`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    type="outline"`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    ${args.themeColor ? `themeColor="${args.themeColor}"` : ""}`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    type="button"`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 主題色彩 ====//
export const TabsColorStory = {
    name: "主題色彩",
    args: {
        // themeColor: "primary",
        dataSource: [
            {
                "title": "Tab 1",
                "content": "Content 1",
            },
            {
                "title": "Tab 2",
                "content": "Content 2"
            },
            {
                "title": "Tab 3",
                "content": "Content 3",
            }
        ],
        activeIndex: 0,
        type: "button",
        prefix: 'SvgArrowDown',
        isDisabled: false,
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
            <div style="display:flex; flex-direction: column; gap:16px">
                <Tabs
                    themeColor="primary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="secondary"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="neutral"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="info"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="success"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="warning"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
                <Tabs
                    themeColor="error"
                    :dataSource="args.dataSource"
                    :activeIndex="args.activeIndex"
                    :type="args.type"
                    :prefix="args.prefix"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                ></Tabs>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: [ 'themeColor' ]
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        `<script setup>`,
                        `import { Tabs } from "@ded-wds-vue/ui";`,
                        `const dataSource = [`,
                        `  {`,
                        `    title: 'Tab 1',`,
                        `    content: 'Content 1',`,
                        `  },`,
                        `  {`,
                        `    title: 'Tab 2',`,
                        `    content: 'Content 2',`,
                        `  },`,
                        `  {`,
                        `    title: 'Tab 3',`,
                        `    content: 'Content 3',`,
                        `  }`,
                        `];`,
                        ``,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Tabs',
                        `    themeColor="primary"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="secondary"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="neutral"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="info"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="success"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="warning"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '  <Tabs',
                        `    themeColor="error"`,
                        `    :dataSource="dataSource"`,
                        `    ${args.activeIndex !== undefined ? `:activeIndex="${args.activeIndex}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        '  ></Tabs>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

