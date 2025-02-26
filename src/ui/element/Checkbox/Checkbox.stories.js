import Checkbox from "@/ui/element/Checkbox/Checkbox.vue";
function formatDataSource(dataSource) {
    return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
        isDisabled: ${item.isDisabled}
    }`).join(',\n    ')}
  ]`;
}

export default {
    title: "Component/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        // themeColor: {
        //     description: "主題顏色",
        //     control: { type: "select" },
        //     options: [
        //         "primary",
        //         "secondary",
        //         "neutral",
        //         "info",
        //         "success",
        //         "warning",
        //         "error",
        //     ],
        //     table: {
        //         type: {
        //             summary: "primary | secondary | tertiary | success | warning | error | info"
        //         }
        //     }
        // },
        dataSource: {
            description: "資料來源",
            control: { type: "object" },
            table: {
                type: {
                    summary: "{ label: string; value: string; isDisabled: boolean; }[]",
                }
            }
        },
        direction: {
            description: "排列方向",
            control: { type: "select" },
            options: ["row", "column"],
            table: {
                type: {
                    summary: "row | column"
                }
            }
        },
        size: {
            description: "尺寸",
            control: { type: "select" },
            options: ["small", "medium", "large"],
            table: {
                type: {
                    summary: "small | medium | large",
                }
            }
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },
        modelValue: {
            description: "選中的項目",
            control: { type: 'object' },
            table: {
                type: { summary: 'string[]' },
                category: 'v-model',
                // defaultValue: { summary: 'string[]' },
            }
        }
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Checkbox",
            description: {
                component: "複選框組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const CheckboxMultiStory = {
    name: "預設項目",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option1",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option2",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option3",
                "isDisabled": true
            }
        ],
        direction: "row",
        size: "medium",
        className: "",
        modelValue: ["option1", "option3"],
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Checkbox
                :dataSource="args.dataSource"
                :direction="args.direction"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import { ref } from "vue";`,
                        `import { Checkbox } from "@ded-wds-vue/ui";`,
                        `const modelValue = ref(["option1", "option3"]);`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    ${args.direction ? `direction="${args.direction}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 垂直排列 ====//
export const CheckboxColumnDirection = {
    name: "垂直排列",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option4",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option5",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option6",
                "isDisabled": false
            }
        ],
        // direction: "column",
        size: "medium",
        className: "",
        modelValue: ["option4", "option6"],
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Checkbox
                :dataSource="args.dataSource"
                direction="column"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
            exclude: ["direction"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import { ref } from "vue";`,
                        `import { Checkbox } from "@ded-wds-vue/ui";`,
                        `const modelValue = ref(["option4", "option6"]);`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    direction="column"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 水平排列 ====//
export const CheckboxRowDirection = {
    name: "水平排列",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option7",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option8",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option9",
                "isDisabled": false
            }
        ],
        // direction: "column",
        size: "medium",
        className: "",
        modelValue: ["option7", "option9"],
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Checkbox
                :dataSource="args.dataSource"
                direction="row"
                :size="args.size"
                :className="args.className"
                v-model="args.modelValue"
            ></Checkbox>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
            exclude: ["direction"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import { ref } from "vue";`,
                        `import { Checkbox } from "@ded-wds-vue/ui";`,
                        `const modelValue = ref(["option7", "option9"]);`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    direction="row"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 元件尺寸 ====//
export const CheckboxSizeStory = {
    name: "元件尺寸",
    args: {
        dataSource: [
            {
                "label": "Option1",
                "value": "option10",
                "isDisabled": false
            },
            {
                "label": "Option2",
                "value": "option11",
                "isDisabled": false
            },
            {
                "label": "Option3",
                "value": "option12",
                "isDisabled": false
            }
        ],
        direction: "row",
        size: "medium",
        className: "",
        modelValue: ["option10", "option12"],
    },
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return {
                args,
            };
        },
        template: `
            <div style="display:flex; flex-direction: column; gap: 24px">
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="large"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="medium"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
                <Checkbox
                    :themeColor="args.themeColor"
                    :dataSource="args.dataSource"
                    :direction="args.direction"
                    size="small"
                    :className="args.className"
                    v-model="args.modelValue"
                ></Checkbox>
            </div>
            
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: [ 'label', 'id', 'name', 'themeColor', 'className','datasource'],
            exclude: ["size"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.dataSource);
                    return [
                        `<script setup>`,
                        `import { ref } from "vue";`,
                        `import { Checkbox } from "@ded-wds-vue/ui";`,
                        `const modelValue = ref(["option10", "option12"]);`,
                        `</script>`,
                        '',
                        '<template>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    ${args.direction ? `direction="${args.direction}"` : ""}`,
                        `    size="large"`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    ${args.direction ? `direction="${args.direction}"` : ""}`,
                        `    size="medium"`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '  <Checkbox',
                        `    :dataSource="${dataSourceString}"`,
                        `    ${args.direction ? `direction="${args.direction}"` : ""}`,
                        `    size="small"`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  ></Checkbox>',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};