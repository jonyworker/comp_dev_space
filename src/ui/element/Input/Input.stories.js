import Input from './Input.vue';
function formatDataSource(hint) {
    return `{
        error: '${hint.error || ""}',
        description: '${hint.description || ""}'
    }`;
}

export default {
    title: "Component/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: "標題",
            control: { type: "text" },
        },
        type: {
            description: "輸入類型",
            control: { type: "select" },
            options: ["number", "text", "password", "email"],
            table: {
                type: {
                    summary: "number | text | password | email "
                }
            }
        },
        hasClear: {
            description: "是否顯示清除按鈕",
            control: { type: "boolean" },
        },
        placeholder: {
            description: "輸入提示",
            control: { type: "text" },
        },
        prefix: {
            description: "前置元素",
            control: {
                type: "select",
                labels: {
                    "": "none",
                    SvgAccount: "SvgAccount",
                    SvgSearch: "SvgSearch",
                    SvgVisibility: "SvgVisibility",
                    SvgVisibilityOff: "SvgVisibilityOff",
                    SvgMail: "SvgMail",
                }
            },
            options: [ "", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff", "SvgMail"],
        },
        size: {
            description: "輸入框尺寸",
            control: { type: "select" },
            options: ["small", "medium", "large"],
            table: {
                type: {
                    summary: "small | medium | large "
                }
            }
        },
        maxLimit: {
            description: "最長輸入限制",
            control: { type: "number" },
        },
        hint: {
            description: "提示訊息",
            control: {
                type: "object",
            },
            table: {
                type: {
                    summary: "{ error: string; description: string; }",
                }
            }
        },
        isDisabled: {
            description: "是否禁用",
            control: { type: "boolean" },
        },
        isOpen: {
            description: "下拉控制",
            control: { type: "boolean" },
            table: { disable: true }
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },
        modelValue: {
            description: "輸入值",
            control: { type: 'text' },
            table: {
                type: { summary: 'string' },
                category: 'v-model',
                // defaultValue: { summary: '""' },
            }
        }
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Input",
            description: {
                component: "輸入框組件的呈現及說明。。",
            },
        },
    },
};

//==== 預設項目 ====//
export const InputDefault = {
    name: '預設項目',
    args: {
        label: 'Label',
        type: 'text',
        hasClear: true,
        placeholder:'Placeholder',
        prefix: 'SvgAccount',
        size: 'medium',
        maxLimit: 0,
        hint: { error: '', description: 'Prompt message' },
        isDisabled: false,
        className: '',
        modelValue:''
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <Input
                :label="args.label"
                :type="args.type"
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :maxLimit="args.maxLimit"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="args.modelValue"
            />
            `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'maxLimit', 'hint', 'isDisabled','className','modelValue'],
            exclude: ['input','clearDatePicker'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        `<script setup>`,
                        'import { ref } from "vue";',
                        `import Input from "@/ui/element/Input/Input.vue";`,
                        'const modelValue = ref("");',
                        `</script>`,
                        '',
                        '<template>',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 輸入類型 ====//
export const InputTypesStory = {
    name: "輸入類型",
    args: {
        // label: 'Account',
        // type: 'text',
        hasClear: true,
        placeholder:'Placeholder',
        // prefix: 'SvgAccount',
        size: 'medium',
        maxLimit: 0,
        hint: { error: '', description: 'Prompt message' },
        isDisabled: false,
        className: '',
        modelValue:''
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    label="Number"
                    type="number"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgSearch"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Text"
                    type="text"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgAccount"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    label="Email"
                    type="email"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgMail"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="args.hint"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
            exclude: ['label', 'type', 'prefix','input','clearDatePicker'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        `<script setup>`,
                        'import { ref } from "vue";',
                        `import Input from "@/ui/element/Input/Input.vue";`,
                        'const modelValue = ref("");',
                        `</script>`,
                        '',
                        '<template>',
                        '  <Input',
                        `    label="Number"`,
                        `    type="number"`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    prefix="SvgSearch"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '  <Input',
                        `    label="Text"`,
                        `    type="text"`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    prefix="SvgAccount"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '  <Input',
                        `    label="Password"`,
                        `    type="password"`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    prefix="SvgLock"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '  <Input',
                        `    label="Email"`,
                        `    type="email"`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    prefix="SvgMail"`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    ${dataSourceString ? `:hint="${dataSourceString}"` : ""}`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 提示訊息 ====//
export const InputHintTypeStory = {
    name: "提示訊息",
    args: {
        label: 'Account',
        type: 'text',
        hasClear: true,
        placeholder:'Placeholder',
        prefix: 'SvgAccount',
        size: 'medium',
        maxLimit: 0,
        isDisabled: false,
        className: '',
        modelValue:''
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
            exclude: ['hint', 'input', 'clearDatePicker'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        `<script setup>`,
                        'import { ref } from "vue";',
                        `import Input from "@/ui/element/Input/Input.vue";`,
                        'const modelValue = ref("");',
                        `</script>`,
                        '',
                        '<template>',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    :hint="{ error: '', description: 'Prompt message' }"`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    :hint="{ error: 'Error message', description: '' }"`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};

//==== 輸入框狀態 ====//
export const InputStatusStory = {
    name: "輸入框狀態",
    args: {
        label: 'Account',
        type: 'text',
        hasClear: true,
        placeholder:'Placeholder',
        prefix: 'SvgAccount',
        size: 'medium',
        maxLimit: 0,
        isDisabled: false,
        className: '',
        modelValue:''
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap:8px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                    v-model="args.modelValue"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="true"
                    :className="args.className"
                    v-model="args.modelValue"
                />
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['label', 'type', 'hasClear', 'placeholder', 'prefix', 'size', 'modelValue', 'maxLimit', 'className'],
            exclude: ['hint', 'input', 'clearDatePicker', 'isDisabled'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        `<script setup>`,
                        'import { ref } from "vue";',
                        `import Input from "@/ui/element/Input/Input.vue";`,
                        'const modelValue = ref("");',
                        `</script>`,
                        '',
                        '<template>',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    :hint="{ error: '', description: 'Prompt message' }"`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    :hint="{ error: 'Error message', description: '' }"`,
                        `    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '',
                        '  <Input',
                        `    ${args.label ? `label="${args.label}"` : ""}`,
                        `    ${args.type ? `type="${args.type}"` : ""}`,
                        `    ${args.hasClear !== undefined ? `:hasClear="${args.hasClear}"` : ""}`,
                        `    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
                        `    ${args.prefix ? `prefix="${args.prefix}"` : ""}`,
                        `    ${args.size ? `size="${args.size}"` : ""}`,
                        `    ${args.maxLimit ? `maxLimit="${args.maxLimit}"` : ""}`,
                        `    :hint="{ error: '', description: 'Prompt message' }"`,
                        `    :isDisabled="true"`,
                        `    ${args.className ? `className="${args.className}"` : ""}`,
                        `    v-model="modelValue"`,
                        '  />',
                        '</template>',
                    ].filter(Boolean).join('\n').trim();
                }
            }
        }
    },
};