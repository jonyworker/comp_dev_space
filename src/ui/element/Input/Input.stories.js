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
        placeholder: {
            description: "輸入提示",
            control: { type: "text" },
        },
        prefix: {
            description: "前置元素",
            control: {
                type: "select",
                labels: {
                    "": "None",
                    home: "home",
                    folder: "folder",
                    lock: "lock",
                    "arrow-forward": "arrow-forward",
                    "finger-print": "finger-print",
                    "account_circle": "account_circle",
                }
            },
            options: ["", "home", "folder", "lock", "arrow-forward", "finger-print", "account_circle"],
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
        initValue: {
            description: "初始值",
            control: { type: "text" },
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
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Input",
            description: {
                component: "Input 組件的呈現及說明。。",
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
        placeholder:'Placeholder...',
        prefix: 'account_circle',
        size: 'medium',
        initValue: '',
        hint: { error: '', description: 'Prompt message' },
        isDisabled: false,
        className: ''
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
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
                :hint="args.hint"
                :isDisabled="args.isDisabled"
                :className="args.className"
            />
            `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['variant', 'content', 'themeColor', 'isDisable', 'prefix'],
            exclude: ['modelValue' ],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    const dataSourceString = formatDataSource(args.hint);
                    return [
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  :hint="${dataSourceString}"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 輸入框狀態 ====//
export const InputStatus = {
    name: "輸入框狀態",
    args: {
        label: 'Account',
        type: 'text',
        placeholder:'Placeholder...',
        prefix: 'account_circle',
        size: 'medium',
        initValue: '',
        isDisabled: false,
        className: ''
    },
    render: (args) => ({
        components: { Input },
        setup() {
            return {
                args,
            };
        },
        template: `
            <div style="display: flex; flex-direction: column; gap:16px">
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    label="Password"
                    type="password"
                    :placeholder="args.placeholder"
                    prefix="lock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
            </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            // exclude: ['modelValue', 'hint'],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="密碼"`,
                        `  type="password"`,
                        `  placeholder="請輸入密碼"`,
                        `  prefix="lock"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  :hint="{ error: 'Error message', description: '' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                    ].join('\n').trim();
                }
            }
        }
    },
};