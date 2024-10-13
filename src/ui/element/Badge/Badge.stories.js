import Badge from "./Badge.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Badge",
	component: Badge,
	components: {Icon},
	tags: ["autodocs"],
	argTypes: {
		isDot: {
			description: "啟用點狀 Badge，無文字內容，僅顯示圓點",
			control: { type: "boolean" },
		},
		value: {
			description: "Badge 上顯示的文字內容，啟用點狀時無法作用",
			control: { type: "range",
				min:0,
				max:1000,
				step: 1 },
		},
		maxValue: {
			description: "Badge 的最大顯示值，超過此值時，Badge 右側顯示加號（+），啟用點狀時無法作用",
			control: { type: "range",
				min:0,
				max:999,
				step: 1 },
		},
		withIcon: {
			description: "當啟用時，調整圖標接近 Badge 旁邊的顯示位置",
			control: { type: "boolean" },
		},
		position: {
			description: "選擇 Badge 的位置顯示方式",
			control: { type: "radio" },
			options: ["default", "top-right"],
		},
		themeColor: {
			description: "設定 Badge 主題顏色",
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Badge",
			description: {
				component: "Badge 組件的呈現及說明。",
			},
		},
		slots: {
			default: {
				description: '用於插入 Badge 內容，例如：圖標或文字',
				template: `{{ args.default }}`,
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Badge 基礎樣式 ====//
export const BadgeDefault = {
	name: "Badge 基礎樣式",
	args: {
		isDot: true,
		value: 100,
		maxValue: 99,
		withIcon: true,
		position: "top-right",
		themeColor: "error",
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap:24px;">
				<Badge 
					:isDot="args.isDot"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon" 
					:position="args.position" 
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'value', 'value', 'name' ],
		},
	},
};

//==== Badge 類型選擇 ====//
export const BadgeStyle = {
	name: "Badge 類型選擇",
	args: {
		// isDot: true,
		value: 999,
		maxValue: 99,
		withIcon: true,
		position: "top-right",
		themeColor: "error",
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap:24px;">
				<Badge
					:isDot="true"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'value', 'value', 'name' ],
			exclude: ['isDot']
		},
	},
};

//==== Badge 顯示位置 ====//
export const BadgePosition = {
	name: "Badge 顯示位置",
	args: {
		value: 100,
		maxValue: 99,
		withIcon: true,
		themeColor: "error",
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap:60px; margin-bottom: 24px;">
				<Badge 
					:isDot="true"
					:withIcon="args.withIcon" 
					position="top-right"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					position="top-right"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
			<div style="display:flex; gap:24px">
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					position="default"
					:themeColor="args.themeColor"
				>
					<p>value</p>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					position="default"
					:themeColor="args.themeColor"
				>
					<p>value</p>
				</Badge>
				
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: [ 'value', 'maxValue', 'withIcon', 'themeColor' ],
		},
	},
};

//==== Badge 最大值設定 ====//
export const BadgeMaxValue = {
	name: "Badge 最大值設定",
	args: {
		isDot: false,
		value: 100,
		maxValue: 99,
		withIcon: true,
		position: "top-right",
		themeColor: "error",
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap:60px; margin-bottom: 24px;">
				<Badge
					:isDot="args.isDot"
					:value="args.value"
					:withIcon="args.withIcon"
					:position="args.position"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="args.isDot"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					:themeColor="args.themeColor"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'value', 'value', 'name' ],
		},
	},
};

//==== Badge 顏色設定 ====//
export const BadgeThemeColor = {
	name: "Badge 顏色設定",
	args: {
		isDot: false,
		value: 100,
		maxValue: 99,
		withIcon: true,
		position: "top-right",
		// themeColor: "error",
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap:56px; margin-bottom: 24px;">
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="primary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="secondary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="tertiary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="success"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="warning"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="error"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="true"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="info"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
			<div style="display:flex; gap:56px">
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="primary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="secondary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="tertiary"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="success"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="warning"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="error"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:isDot="false"
					:value="args.value"
					:maxValue="args.maxValue"
					:withIcon="args.withIcon"
					:position="args.position"
					themeColor="info"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'value', 'value', 'name' ],
			exclude: ['isDot', 'themeColor']
		},
	},
};