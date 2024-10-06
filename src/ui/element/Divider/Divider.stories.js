import Divider from "./Divider.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Divider",
	component: Divider,
	tags: ["autodocs"],
	argTypes: {
		//以下參數不刪
		layout: {
			description: "設定 Divider  方向",
			control: { type: "radio" },
			defaultValue: "horizontal",
			options: ["horizontal", "vertical"],
		},
		width: {
			description: "設定 Divider  寬度",
			control: { type: "select" },
			options: ["xsmall (1px)", "small (2px)", "medium (4px)", "large (6px)", "xlarge (8px)"],
			mapping: {
				'xsmall (1px)': 'xsmall',
				'small (2px)': 'xsmall',
				'medium (4px)': 'medium',
				'large (6px)': 'large',
				'xlarge (8px)': 'xlarge',
			},
		},
		type: {
			description: "設定 Divider  種類",
			control: { type: "select" },
			defaultValue: "solid",
			options: ["solid", "dashed", "dotted"],
		},
		themeColor: {
			description: "設定 Divider 主題顏色",
			control: { type: "select" },
			options: [
				"None",
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
			mapping: {
				'None': null
			},
		},
		align: {
			description: "設定 Divider 上文字位置",
			control: { type: "radio" },
			options: ["start", "center", "end"],
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
		slots: {
			default: {
				description: '接收 Divider 文字',
				template: `{{ args.default }}`,
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Divider 基礎樣式 ====//
export const DividerDefault = {
	name: "Divider 基礎樣式",
	args: {
		default: 'Divider Text',
		layout: "horizontal",
		width: 'small',
		type: 'solid',
		themeColor: "None",
		align: 'start'
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
			<div style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 200px">
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
				>{{args.default}}</Divider>
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

//==== Divider 種類 ====//
export const DividerTypes = {
	name: "Divider 種類",
	args: {
		layout: "horizontal",
		width: 'small',
		themeColor: "None",
		align: 'start',
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
					:width="args.width"
					type="solid"
					:themeColor="args.themeColor"
					:align="args.align"
				>solid</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					type="dashed"
					:themeColor="args.themeColor"
					:align="args.align"
				>dashed</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					type="dotted"
					:themeColor="args.themeColor"
					:align="args.align"
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
	},
};

//==== Divider 粗細 ====//
export const DividerWidth = {
	name: "Divider 粗細",
	args: {
		layout: "horizontal",
		width: 'small',
		type: 'solid',
		themeColor: "None",
		align: 'start'
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
			     style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 400px">
				<Divider
					:layout="args.layout"
					width="xsmall"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
				>xsmall / 1px</Divider>
				<Divider
					:layout="args.layout"
					width="small"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
				>small / 2px</Divider>
				<Divider
					:layout="args.layout"
					width="medium"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
				>medium / 4px</Divider>
				<Divider
					:layout="args.layout"
					width="large"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
				>large / 6px</Divider>
				<Divider
					:layout="args.layout"
					width="xlarge"
					:type="args.type"
					:themeColor="args.themeColor"
					:align="args.align"
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
	},
};

//==== Divider 文字位置 ====//
export const DividerContent = {
	name: "Divider 文字位置",
	args: {
		width: 'small',
		type: 'solid',
		themeColor: "None",
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
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="start"
				>start</Divider>
				<Divider
					layout="horizontal"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="center"
				>center</Divider>
				<Divider
					layout="horizontal"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="end"
				>end</Divider>
			</div>

			<div style="display:flex; justify-content: center; gap: 16px; height: 200px">
				<Divider
					layout="vertical"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="start"
				>start</Divider>
				<Divider
					layout="vertical"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="center"
				>center</Divider>
				<Divider
					layout="vertical"
					:width="args.width"
					:type="args.type"
					:themeColor="args.themeColor"
					align="end"
				>end</Divider>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ["layout", "align"],
		},
	},
};

//==== Divider 顏色 ====//
export const DividerColors = {
	name: "Divider 顏色",
	args: {
		layout: "horizontal",
		width: 'small',
		type: 'solid',
		themeColor: "None",
		align: 'start'
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
			     style="display:flex; align-items:center; justify-content: center; gap: 16px; height: 600px">
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					:align="args.align"
				>None</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="primary"
					:align="args.align"
				>primary</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="secondary"
					:align="args.align"
				>secondary</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="tertiary"
					:align="args.align"
				>tertiary</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="success"
					:align="args.align"
				>success</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="warning"
					:align="args.align"
				>warning</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="error"
					:align="args.align"
				>error</Divider>
				<Divider
					:layout="args.layout"
					:width="args.width"
					:type="args.type"
					themeColor="info"
					:align="args.align"
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
	},
};