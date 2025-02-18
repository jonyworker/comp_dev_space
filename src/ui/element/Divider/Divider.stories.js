import Divider from "./Divider.vue";

export default {
	title: "Component/Divider",
	component: Divider,
	tags: ["autodocs"],
	argTypes: {
		width: {
			description: "線條寬度",
			control: {
				type: "select",
			},
			options: ["1px", "2px", "3px", "4px", "5px"],
			table: {
				type: {
					summary: "1px | 2px | 3px | 4px | 5px"
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
		width:"1px",
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
			<Divider
				:width="args.width"
				:type="args.type"
				:direction="args.direction"
				:align="args.align"
				:className="args.className"
			>{{args.default}}</Divider>
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
		width:"1px",
		type: "solid",
		direction: "horizontal",
		// align: "center",
		// default: "Divider",
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
			<div style="display: flex; gap: 16px;"
			     :style="{ 
				    flexDirection: args.direction === 'horizontal' ? 'column' : 'row',
				    height: '100px'
					}">
				<Divider
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					align="start"
					:className="args.className"
				>Start</Divider>
				<Divider
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					align="center"
					:className="args.className"
				>Center</Divider>
				<Divider
					:width="args.width"
					:type="args.type"
					:direction="args.direction"
					align="end"
					:className="args.className"
				>End</Divider>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ["align"],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="start"`,
						`  className="${args.className}"`,
						'>Start</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="center"`,
						`  className="${args.className}"`,
						'>Center</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="end"`,
						`  className="${args.className}"`,
						'>End</Divider>',
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
		// width:"1px",
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
					width="1px"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>1px</Divider>
				<Divider
					width="2px"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>2px</Divider>
				<Divider
					width="3px"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>3px</Divider>
				<Divider
					width="4px"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
				>4px</Divider>
				<Divider
					width="5px"
					:type="args.type"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>5px</Divider>
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
						`  width="xsmall"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>xsmall / 1px</Divider>',
						'<Divider',
						`  width="small"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>small / 2px</Divider>',
						'<Divider',
						`  width="medium"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>medium / 4px</Divider>',
						'<Divider',
						`  width="large"`,
						`  type="${args.type}"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>large / 6px</Divider>',
						'<Divider',
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
		width:"1px",
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
					:width="args.width"
					type="solid"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>Solid</Divider>
				<Divider
					:width="args.width"
					type="dashed"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>Dashed</Divider>
				<Divider
					:width="args.width"
					type="dotted"
					:direction="args.direction"
					:align="args.align"
					:className="args.className"
				>Dotted</Divider>
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
						`  width="${args.width}"`,
						`  type="solid"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>Solid</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="dashed"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>Dashed</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="dotted"`,
						`  direction="${args.direction}"`,
						`  align="${args.align}"`,
						`  className="${args.className}"`,
						'>Dotted</Divider>',
					].join('\n').trim();

				}
			}
		}
	},
};

//==== 線條方向-垂直 ====//
export const DividerColumnDirection = {
	name: "線條方向-垂直",
	args: {
		width:"1px",
		type: "solid",
		// direction: "horizontal",
		// align: "center",
		// default: "vertical",
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
			<div style="display:flex; height: 100px">
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="start"
					:className="args.className"
				>Start</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="center"
					:className="args.className"
				>Center</Divider>
				<Divider
					:themeColor="args.themeColor"
					:width="args.width"
					:type="args.type"
					direction="vertical"
					align="end"
					:className="args.className"
				>End</Divider>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ["direction", "align", "default"],
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
						'>Start</Divider>',
						'<Divider',
						`  themeColor="${args.themeColor}"`,
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="vertical"`,
						`  align="center"`,
						`  className="${args.className}"`,
						'>Center</Divider>',
						'<Divider',
						`  themeColor="${args.themeColor}"`,
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="vertical"`,
						`  align="end"`,
						`  className="${args.className}"`,
						'>End</Divider>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 線條方向-水平 ====//
export const DividerRowDirection = {
	name: "線條方向-水平",
	args: {
		width:"1px",
		type: "solid",
		// direction: "horizontal",
		// align: "center",
		// default: "horizontal",
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
			<div style="display: flex; flex-direction: column; height: 100px;">
				<Divider
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="start"
					:className="args.className"
				>Start</Divider>
				<Divider
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="center"
					:className="args.className"
				>Center</Divider>
				<Divider
					:width="args.width"
					:type="args.type"
					direction="horizontal"
					align="end"
					:className="args.className"
				>End</Divider>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ["direction", "align", "default"],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="horizontal"`,
						`  align="start"`,
						`  className="${args.className}"`,
						'>Start</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="horizontal"`,
						`  align="center"`,
						`  className="${args.className}"`,
						'>Center</Divider>',
						'<Divider',
						`  width="${args.width}"`,
						`  type="${args.type}"`,
						`  direction="horizontal"`,
						`  align="end"`,
						`  className="${args.className}"`,
						'>End</Divider>',
					].join('\n').trim();
				}
			}
		}
	},
};