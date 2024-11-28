import Badge from "./Badge.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

export default {
	title: "Component/Badge",
	component: Badge,
	components: {Icon},
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
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
			table: {
				type: {
					summary: "primary | secondary | tertiary | success | warning | error | info"
				}
			}
		},
		type: {
			description: "顯示方式",
			control: { type: "select" },
			options: [ "dot", "number" ],
			table: {
				type: {
					summary: "dot | number "
				}
			}
		},
		value: {
			description: "數值",
			control: { type: "number" },
		},
		limit: {
			description: "數值上限",
			control: { type: "number" },
		},
		default: {
			description: '圖標插槽',
			table: {
				type: {
					summary: "Vue Component | HTML"
				}
			},
			control: false,
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Badge",
			description: {
				component: "Badge 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const BadgeDefault = {
	name: "預設項目",
	args: {
		themeColor: "error",
		type: "number",
		value: 100,
		limit: 99,
	},
	render: (args) => ({
		components: { Badge, Icon },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Badge 
				:themeColor="args.themeColor"
				:type="args.type"
				:value="args.value"
				:limit="args.limit"
			>
				<Icon name="notification" size="26"></Icon>
			</Badge>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'value', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Badge',
						`  themeColor="${args.themeColor}"`,
						`  type="${args.type}"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 類型選擇 ====//
export const BadgeStyle = {
	name: "類型選擇",
	args: {
		themeColor: "error",
		type: "number",
		value: 999,
		limit: 99,
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
					:themeColor="args.themeColor"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:themeColor="args.themeColor"
					type="number"
					:value="args.value"
					:limit="args.limit"
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
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Badge',
						`  themeColor="${args.themeColor}"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="${args.themeColor}"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 最大值設定 ====//
export const BadgeLimit = {
	name: "最大值設定",
	args: {
		themeColor: "error",
		type: "number",
		value: 999,
		limit: 99,
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
					:themeColor="args.themeColor"
					type="number"
					:value="98"
					:limit="99"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:themeColor="args.themeColor"
					type="number"
					:value="100"
					:limit="99"
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
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Badge',
						`  :themeColor="${args.themeColor}"`,
						`  type="number"`,
						`  :value="98"`,
						`  :limit="99"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  :themeColor="${args.themeColor}"`,
						`  type="number"`,
						`  :value="100"`,
						`  :limit="99"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 顏色設定 ====//
export const BadgeThemeColor = {
	name: "顏色設定",
	args: {
		themeColor: "error",
		type: "number",
		value: 999,
		limit: 99,
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
					themeColor="primary"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="secondary"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="tertiary"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="success"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="warning"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="error"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="info"
					type="dot"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
			<div style="display:flex; gap:56px">
				<Badge
					themeColor="primary"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="secondary"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="tertiary"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="success"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="warning"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="error"
					type="number"
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="info"
					type="number"
					:value="args.value"
					:limit="args.limit"
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
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Badge',
						`  themeColor="primary"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="secondary"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="tertiary"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="success"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="warning"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="error"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="info"`,
						`  type="dot"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="primary"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="secondary"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="tertiary"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="success"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="warning"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="error"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="info"`,
						`  type="number"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
					].join('\n').trim();
				}
			}
		}
	},
};