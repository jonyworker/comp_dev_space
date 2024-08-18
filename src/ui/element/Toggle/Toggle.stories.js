import Toggle from './Toggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Design System/Toggle',
    component: Toggle,
    tags: ["autodocs"],
    argTypes: {
        themeColor: {
            description: '主題顏色',
            control: { type: 'select' },
            options: [
                'primary',
                'secondary',
                'tertiary',
                'success',
                'warning',
                'error',
                'info',
            ],
        },
        checkChildren: {
            description: '開啟文字',
            control: { type: 'text' },
        },
        unCheckChildren: {
            description: '關閉文字',
            control: { type: 'text' },
        },
        isChecked: {
            description: '帶入外部參數，控制開關是否開啟',
            control: { type: 'boolean' },
        },
        isDisable: {
            description: '是否禁用',
            control: { type: 'boolean' },
        },
        customClass: {
            description: '客製化樣式',
            control: { type: 'text' },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: '開關按鈕',
            description: {
                component: '開關按鈕組件的呈現及說明。',
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

export const ToggleDefault = {
    name: '開關按鈕',
    args: {
        checkChildren: 'on',
        unCheckChildren: 'off',
        themeColor: 'primary',
        isDisable: false,
        isChecked: true
    },
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            exclude: ['toggleIsChecked'],
        },
    },
};

export const MultipleButton = {
    name: '多個開關按鈕',
    args: {
        checkChildren: 'on',
        unCheckChildren: 'off',
        themeColor: 'primary',
        isDisable: false,
        isChecked: true
    },
    render: (args) => ({
        components: { Toggle },
        setup() {
            return {
                args,
            };
        },
        template:
            `<div style="display:flex; gap: 16px">
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="primary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="secondary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="tertiary"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="success"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="warning"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="error"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
                  <Toggle
                      :checkChildren="args.checkChildren"
                      :unCheckChildren="args.unCheckChildren"
                      themeColor="info"
                      :isDisable="args.isDisable"
                      :isChecked="args.isChecked">
                  </Toggle>
           </div>
            `,
    }),
};


