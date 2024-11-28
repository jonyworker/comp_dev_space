import Textarea from "./Textarea.vue";
import { ref } from "vue";
function formatDataSource(hint) {
    return `{
        error: '${hint.error || ""}',
        description: '${hint.description || ""}'
    }`;
}


export default {
    title: "Component/Textarea",
    component: Textarea,
    tags: ["autodocs"],
    argTypes: {
        label: {
            description: '標題',
            control: { type: 'text' },
        },
        placeholder: {
            description: '輸入提示',
            control: { type: 'text' },
        },
        limit: {
            description: '字數限制',
            control: { type: 'number' },
        },
        initValue: {
            description: "輸入值",
            control: { type: "text" },
        },
        hint: {
            description: '提示訊息',
            control: {
                type: 'object',
            },
            table: {
                type: {
                    summary: '{ error: string; description: string; }[]',
                }
            }
        },
        isDisabled: {
            description: '是否禁用',
            control: { type: 'boolean' },
        },
        className: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Textarea",
            description: {
                component: "Textarea 組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const TextareaDefault = {
    name: "預設項目",
    args: {
        label: "Label",
        placeholder: "Placeholder...",
        limit: 500,
        initValue: "Type something...",
        hint: { error: "", description: "Prompt message" },
        isDisabled: false,
        className: ""
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            const textareaModelValue =ref("");
            return {
                args,
                textareaModelValue
            };
        },
        template: `
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'customClass'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="${dataSourceString}"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        `  v-model="textareaModelValue"`,
                        '></Textarea>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 顯示標籤 ====//
export const TextareaLabelDefault = {
    name: "顯示標籤",
    args: {
        label: "Label",
        placeholder: "Type something...",
        limit: 50,
        initValue: "",
        hint: { error: '', description: '' },
        isDisabled: false,
        className: ''
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            const textareaModelValue =ref("");
            return {
                args,
                textareaModelValue
            };
        },
        template: `
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'customClass'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="${dataSourceString}"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        `  v-model="textareaModelValue"`,
                        '></Textarea>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 字數限制 ====//
export const TextareaLimit = {
    name: "字數限制",
    args: {
        label: "Label",
        placeholder: "Type something...",
        limit: 50,
        initValue: "",
        hint: { error: '', description: '' },
        isDisabled: false,
        className: ''
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            const textareaModelValue =ref("Hello World");
            return {
                args,
                textareaModelValue
            };
        },
        template: `
            <Textarea
                :label="args.label"
                :placeholder="args.placeholder"
                :limit="args.limit"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
                v-model="textareaModelValue"
            ></Textarea>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'customClass'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="${dataSourceString}"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        `  v-model="textareaModelValue"`,
                        '></Textarea>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 輸入框狀態 ====//
export const TextareaStatus = {
    name: "輸入框狀態",
    args: {
        label: "Label",
        placeholder: "Type something...",
        initValue: "",
        limit: 50,
        isDisabled: false,
    },
    render: (args) => ({
        components: { Textarea },
        setup() {
            // Create a ref for modelValue to be used with v-model
            const textareaModelValue01 =ref("");
            const textareaModelValue02 =ref("");
            const textareaModelValue03 =ref("");
            return {
                args,
                textareaModelValue01,
                textareaModelValue02,
                textareaModelValue03
            };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap:16px">
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue01"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue02"
                ></Textarea>
                
                <Textarea
                    :label="args.label"
                    :placeholder="args.placeholder"
                    :limit="args.limit"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    v-model="textareaModelValue03"
                ></Textarea>
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ['modelValue', 'hint', 'customClass'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  v-model="textareaModelValue01"`,
                        '></Textarea>',
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="{ error: 'Error message', description: '' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  v-model="textareaModelValue02"`,
                        '></Textarea>',
                        '<Textarea',
                        `  label="${args.label}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  :limit="${args.limit}"`,
                        `  :initValue="${args.initValue}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  v-model="textareaModelValue03"`,
                        '></Textarea>',
                    ].join('\n').trim();
                }
            }
        }
    },
};