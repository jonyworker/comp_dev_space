import Divider from "./Divider.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: "Design System/Divider",
    component: Divider,
    tags: ["autodocs"],
    argTypes: {
        //以下參數不刪
        layout: {
            description: "Divider分隔線方向",
            control: { type: "radio" },
            defaultValue: "horizontal",
            options: ["horizontal", "vertical"],
        },
        type: {
            description: "Divider分隔線種類",
            control: { type: "select" },
            defaultValue: "solid",
            options: ["solid", "dashed", "dotted"],
        },
        themeColor: {
            description: "主題顏色",
            control: { type: "select" },
            options: [
                "default",
                "primary",
                "secondary",
                "tertiary",
                "success",
                "warning",
                "error",
                "info",
            ],
        },
        width: {
            description: "Divider分隔線寬度",
            control: { type: "select" },
            options: ["xsmall / 1px", "small / 2px", "medium / 4px", "large / 6px", "xlarge / 8px"],
        },
        align: {
            description: "Divider分隔線上文字位置",
            control: { type: "radio" },
            options: ["start", "center", "end"],
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "分隔線",
            description: {
                component: "分隔線組件的呈現及說明。",
            },
        },
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
};

//==== 分隔線種類 ====//
export const DividerTypes = {
    name: "分隔線種類",
    args: {
        layout: "horizontal",
        themeColor: "Default",
        width: "small",
    },
    render: (args) => ({
        components: { Divider },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
              <div :style="{ flexDirection: args.layout === 'horizontal' ? 'column' : 'row' }" 
                   style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        :layout="args.layout"
                        type="solid"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dashed"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
                    <Divider
                        :layout="args.layout"
                        type="dotted"
                        :themeColor="args.themeColor"
                        :width="args.width"
                    ></Divider>
              </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== 分隔線粗細 ====//
export const DividerWidth = {
    name: "分隔線粗細",
    args: {
        layout: "horizontal",
        themeColor: "Default",
        type: "solid",
    },
    render: (args) => ({
        components: { Divider },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xsmall"
                        align="start"
                    >xsmall / 1px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="small"
                        align="start"
                    >small / 2px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="medium"
                        align="start"
                    >medium / 4px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="large"
                        align="start"
                    >large / 6px</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        width="xlarge"
                        align="start"
                    >xlarge / 8px</Divider>
              </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== 分隔線文字位置 ====//
export const DividerContent = {
    name: "分隔線文字位置",
    args: {
        width: "small",
        type: "solid",
        themeColor: "Default",
    },
    render: (args) => ({
        components: { Divider },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="horizontal"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
              </div>

              <div style="display:flex; justify-content: center; gap: 16px; height: 200px">
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="start"
                    >start</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="center"
                    >center</Divider>
                    <Divider
                        layout="vertical"
                        :type="args.type"
                        :themeColor="args.themeColor"
                        :width="args.width"
                        align="end"
                    >end</Divider>
                  </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};

//==== 分隔線顏色 ====//
export const DividerColors = {
    name: "分隔線顏色",
    args: {
        layout: "horizontal",
        width: "small",
        type: "solid",
        align: "start",
    },
    render: (args) => ({
        components: { Divider },
        setup() {
            // Create a ref for modelValue to be used with v-model
            return {
                args,
            };
        },
        template: `
              <div style="display:flex; flex-direction: column; gap: 16px">
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        :width="args.width"
                        :align="args.align"
                    >default</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="primary"
                        :width="args.width"
                        :align="args.align"
                    >primary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="secondary"
                        :width="args.width"
                        :align="args.align"
                    >secondary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="tertiary"
                        :width="args.width"
                        :align="args.align"
                    >tertiary</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="success"
                        :width="args.width"
                        :align="args.align"
                    >success</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="warning"
                        :width="args.width"
                        :align="args.align"
                    >warning</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="error"
                        :width="args.width"
                        :align="args.align"
                    >error</Divider>
                    <Divider
                        :layout="args.layout"
                        :type="args.type"
                        themeColor="info"
                        :width="args.width"
                        :align="args.align"
                    >info</Divider>
              </div>
        `,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
        },
    },
};