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
                }
            },
            options: [ "", "SvgAccount", "SvgSearch", "SvgVisibility", "SvgVisibilityOff"],
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
        placeholder:'Placeholder...',
        prefix: 'SvgAccount',
        size: 'medium',
        initValue: '',
        maxLimit: Infinity,
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
                :hasClear="args.hasClear"
                :placeholder="args.placeholder"
                :prefix="args.prefix"
                :size="args.size"
                :initValue="args.initValue"
                :maxLimit="args.maxLimit"
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
                        `  hasClear="${args.hasClear}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  maxLimit="${args.maxLimit}"`,
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
        hasClear: true,
        placeholder:'Placeholder...',
        prefix: 'SvgAccount',
        size: 'medium',
        initValue: '',
        maxLimit: Infinity,
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
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    label="Password"
                    type="password"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    prefix="SvgLock"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: '', description: 'Prompt message' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
                    :hint="{ error: 'Error message', description: '' }"
                    :isDisabled="args.isDisabled"
                    :className="args.className"
                />
                <Input
                    :label="args.label"
                    :type="args.type"
                    :hasClear="args.hasClear"
                    :placeholder="args.placeholder"
                    :prefix="args.prefix"
                    :size="args.size"
                    :initValue="args.initValue"
                    :maxLimit="args.maxLimit"
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
                        `  hasClear="${args.hasClear}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  maxLimit="${args.maxLimit}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="密碼"`,
                        `  type="password"`,
                        `  hasClear="${args.hasClear}"`,
                        `  placeholder="請輸入密碼"`,
                        `  prefix="lock"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  maxLimit="${args.maxLimit}"`,
                        `  :hint="{ error: '', description: 'Prompt message' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  hasClear="${args.hasClear}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  maxLimit="${args.maxLimit}"`,
                        `  :hint="{ error: 'Error message', description: '' }"`,
                        `  :isDisabled="${args.isDisabled}"`,
                        `  className="${args.className}"`,
                        '/>',
                        '<Input',
                        `  label="${args.label}"`,
                        `  type="${args.type}"`,
                        `  hasClear="${args.hasClear}"`,
                        `  placeholder="${args.placeholder}"`,
                        `  prefix="${args.prefix}"`,
                        `  size="${args.size}"`,
                        `  initValue="${args.initValue}"`,
                        `  maxLimit="${args.maxLimit}"`,
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