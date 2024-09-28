import Badge from "./Badge.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Badge",
	component: Badge,
	components: {Icon},
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "徽章主題顏色",
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
		badgeLabel: {
			description: "顯示在徽章上的文字內容",
			control: { type: "text" },
		},
		maxValue: {
			description: "徽章的最大顯示值，超過該值時將顯示加號（+）",
			control: { type: "number" },
		},
		isDot: {
			description: "啟用點狀顯示，無文字內容的徽章",
			control: { type: "boolean" },
		},
		isIcon: {
			description: "設定徽章與Icon的顯示位置",
			control: { type: "boolean" },
		},
		position: {
			description: "指定徽章的位置",
			control: { type: "radio" },
			options: ["default", "top-right"],
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Badge",
			description: {
				component: "徽章組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Badge 樣式 ====//
export const BadgeStyle = {
	name: "徽章樣式",
	args: {
		position: "top-right",
		isIcon: true,
		isDot: true,
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
				<Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
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

//==== Badge 位置 ====//
export const BadgePosition = {
	name: "徽章位置",
	args: {
		position: "top-right",
		isIcon: true,
		isDot: true,
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
				<Badge :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge badgeLabel="9" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge badgeLabel="99" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>

			<div style="display:flex; gap:24px">
				<Badge :isDot="args.isDot">
					<p>Label</p>
				</Badge>
				<Badge badgeLabel="9">
					<p>Label</p>
				</Badge>
				<Badge badgeLabel="99">
					<p>Label</p>
				</Badge>
				<Badge badgeLabel="999">
					<p>Label</p>
				</Badge>
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

//==== Badge 最大值設定 ====//
export const BadgeMaxValue = {
	name: "徽章最大值",
	args: {
		position: "top-right",
		badgeLabel: 1000,
		maxValue: 96,
		isIcon: true,
		isDot: true,
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
				<Badge :badgeLabel="args.badgeLabel"  :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge :badgeLabel="args.badgeLabel" :maxValue="args.maxValue" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
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

//==== Badge 顏色 ====//
export const BadgeThemeColor = {
	name: "徽章顏色",
	args: {
		position: "top-right",
		badgeLabel: 1000,
		maxValue: 99,
		isIcon: true,
		isDot: true,
		themeColor: "primary",
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
				<Badge themeColor="primary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="secondary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="tertiary" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="success" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="warning" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="error" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="info" :position="args.position" :isIcon="args.isIcon" :isDot="args.isDot">
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
			<div style="display:flex; gap:56px">
				<Badge themeColor="primary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="secondary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="tertiary"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="success"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="warning"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="error"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge themeColor="info"  badgeLabel="999" :position="args.position" :isIcon="args.isIcon">
					<Icon name="notification" size="26"></Icon>
				</Badge>
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