import Divider from "./Divider.vue";

export default {
    title: "Component/Divider",
    component: Divider,
    tags: ["autodocs"],
    argTypes: {
        themeColor: {
            description: "主題顏色",
            control: {
                type: "select",
                labels: {
                    "": "None",
                    primary: "primary",
                    secondary: "secondary",
                    tertiary: "tertiary",
                    success: "success",
                    warning: "warning",
                    error: "error",
                    info: "info",
                }
            },
            options: ["", "primary", "secondary", "tertiary", "success", "warning", "error", "info",],
            table: {
                type: {
                    summary: "primary | secondary | tertiary | success | warning | error | info"
                }
            }
        },
        width: {
            description: "線條寬度",
            control: {
                type: "select",
            },
            options: [
                "xsmall",
                "small",
                "medium",
                "large",
                "xlarge",
            ],
            table: {
                type: {
                    summary: "xsmall | small | medium | large | xlarge"
                }
            }
        },
        type: {
            description: "線條樣式",
            control: { type: "select" },
            defaultValue: "solid",
            options: ["solid", "dashed", "dotted"],
            table: {
                type: {
                    summary: "solid | dashed | dotted",
                }
            }
        },
        direction: {
            description: "線條方向",
            control: { type: "select" },
            defaultValue: "horizontal",
            options: ["horizontal", "vertical"],
            table: {
                type: {
                    summary: "horizontal | vertical"
                }
            }
        },
        align: {
            description: "文字位置",
            control: { type: "select" },
            options: ["start", "center", "end"],
            table: {
                type: {
                    summary: "start | center | end",
                }
            }
        },
        className: {
            description: "客製化樣式",
            control: { type: "text" },
        },
        default: {
            description: "分隔線內容",
            control: { type: "text" },
        },
    },
    parameters: {
        // 自動文件
        docs: {
            title: "Divider",
            description: {
                component: "Divider 組件的呈現及說明。",
            },
        },
    },
};

//==== 預設項目 ====//
export const DividerDefault = {
    name: "預設項目",
    args: {
        themeColor: "",
        width: "small",
        type: "solid",
        direction: "horizontal",
        align: "center",
        default: "Divider",
        className: "",
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
			<div style="display:flex;  justify-content:center; gap: 16px; height: 200px"
                :style="args.direction === 'horizontal'? 'flex-direction: column;': ''">
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>{{args.default}}</Divider>
			</div>
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
                    return [
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>',
                        `  ${args.default}`,
                        '</Divider>'
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 文字對齊 ====//
export const DividerContent = {
    name: "文字對齊",
    args: {
        themeColor: "",
        width: "small",
        type: "solid",
        className: ""
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
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="start"
                    :className="args.className"
				>start</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="center"
                    :className="args.className"
				>center</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="end"
                    :className="args.className"
				>end</Divider>
			</div>
		`,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ["direction", "align"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Divider',
                        `  direction="horizontal"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  themeColor="${args.themeColor}"`,
                        `  align="start"`,
                        `  className="${args.className}"`,
                        '>start</Divider>',
                        '<Divider',
                        `  direction="horizontal"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  themeColor="${args.themeColor}"`,
                        `  align="center"`,
                        `  className="${args.className}"`,
                        '>center</Divider>',
                        '<Divider',
                        `  direction="horizontal"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  themeColor="${args.themeColor}"`,
                        `  align="end"`,
                        `  className="${args.className}"`,
                        '>end</Divider>',
                    ].join('\n').trim();

                }
            }
        }
    },
};

//==== 線條粗細 ====//
export const DividerWidth = {
    name: "線條粗細",
    args: {
        themeColor: "",
        width: "small",
        type: "solid",
        direction: "horizontal",
        align: "center",
        className: "",
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
			<div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
					style="display:flex; gap: 16px; height: 400px">
				<Divider
					:themeColor="args.themeColor"
					width="xsmall"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>xsmall / 1px</Divider>
				<Divider
					:themeColor="args.themeColor"
					width="small"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>small / 2px</Divider>
				<Divider
					:themeColor="args.themeColor"
					width="medium"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>medium / 4px</Divider>
				<Divider
					:themeColor="args.themeColor"
					width="large"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
				>large / 6px</Divider>
				<Divider
					:themeColor="args.themeColor"
					width="xlarge"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>xlarge / 8px</Divider>
			</div>
		`,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ["width"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="xsmall"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>xsmall / 1px</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="small"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>small / 2px</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="medium"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>medium / 4px</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="large"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>large / 6px</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="xlarge"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>xlarge / 8px</Divider>',
                    ].join('\n').trim();

                }
            }
        }
    },
};

//==== 線條類型 ====//
export const DividerTypes = {
    name: "線條類型",
    args: {
        themeColor: "",
        width: "small",
        direction: "horizontal",
        align: "center",
        className: "",
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
			<div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
			     style="display:flex; gap: 16px; height: 200px">
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					type="solid"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>solid</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					type="dashed"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>dashed</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					type="dotted"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>dotted</Divider>
			</div>
		`,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ["type"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="solid"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>solid</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="dashed"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>dashed</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="dotted"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>dotted</Divider>',
                    ].join('\n').trim();

                }
            }
        }
    },
};

//==== 線條方向 ====//
export const DividerDirection = {
    name: "線條方向",
    args: {
        themeColor: "",
        width: "small",
        type: "solid",
        className: "",
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
			<div style="display:flex; justify-content: center; gap: 16px; height: 200px">
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="start"
                    :className="args.className"
				>start</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="center"
                    :className="args.className"
				>center</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="end"
                    :className="args.className"
				>end</Divider>
			</div>
		`,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ["direction", "align"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="vertical"`,
                        `  align="start"`,
                        `  className="${args.className}"`,
                        '>start</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="vertical"`,
                        `  align="center"`,
                        `  className="${args.className}"`,
                        '>center</Divider>',
                        '<Divider',
                        `  themeColor="${args.themeColor}"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="vertical"`,
                        `  align="end"`,
                        `  className="${args.className}"`,
                        '>end</Divider>',
                    ].join('\n').trim();
                }
            }
        }
    },
};

//==== 線條顏色 ====//
export const DividerColors = {
    name: "線條顏色",
    args: {
        width: "small",
        type: "solid",
        direction: "horizontal",
        align: "center",
        className: "",
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
			<div :style="{ flexDirection: args.direction === 'horizontal' ? 'column' : 'row' }"
			     style="display:flex; gap: 16px; height: 400px">
				<Divider
                    themeColor=""
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className=args.className
				>None</Divider>
				<Divider
					themeColor="primary"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>primary</Divider>
				<Divider
					themeColor="secondary"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>secondary</Divider>
				<Divider
					themeColor="tertiary"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>tertiary</Divider>
				<Divider
					themeColor="success"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>success</Divider>
				<Divider
					themeColor="warning"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>warning</Divider>
				<Divider
					themeColor="error"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>error</Divider>
				<Divider
					themeColor="info"
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
                    :className="args.className"
				>info</Divider>
			</div>
		`,
    }),
    // 控制 controls 中能控制的參數
    parameters: {
        controls: {
            // include: ['themeColor', 'label', 'value', 'name' ],
            exclude: ["themeColor"],
        },
        docs: {
            source: {
                transform: (src, storyContext) => {
                    const { args } = storyContext;
                    return [
                        '<Divider',
                        `  themeColor=""`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>None</Divider>',
                        '<Divider',
                        `  themeColor="primary"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>primary</Divider>',
                        '<Divider',
                        `  themeColor="secondary"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>secondary</Divider>',
                        '<Divider',
                        `  themeColor="tertiary"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>tertiary</Divider>',
                        '<Divider',
                        `  themeColor="success"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>success</Divider>',
                        '<Divider',
                        `  themeColor="warning"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>warning</Divider>',
                        '<Divider',
                        `  themeColor="error"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>error</Divider>',
                        '<Divider',
                        `  themeColor="info"`,
                        `  width="${args.width}"`,
                        `  type="${args.type}"`,
                        `  direction="${args.direction}"`,
                        `  align="${args.align}"`,
                        `  className="${args.className}"`,
                        '>info</Divider>',
                    ].join('\n').trim();
                }
            }
        }
    },
};