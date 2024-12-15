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
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			],
			table: {
				type: {
					summary: "primary | secondary | neutral | info | success | warning | error"
				}
			}
		},
		isShowDot: {
			description: "是否顯示圓點",
			control: { type: "boolean" },
		},
		value: {
			description: "數值",
			control: { type: "number" },
		},
		limit: {
			description: "數值上限",
			control: { type: "number" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
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
		isShowDot: false,
		value: 100,
		limit: 99,
		className: ""
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
				:isShowDot="args.isShowDot"
				:value="args.value"
				:limit="args.limit"
				:className="args.className"
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
						`  isShowDot="${args.isShowDot}"`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						`  className="${args.className}"`,
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
		isShowDot: false,
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
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:themeColor="args.themeColor"
					:isShowDot= false
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
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="${args.themeColor}"`,
						`  :isShowDot= false`,
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
		isShowDot: false,
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
					:isShowDot="args.isShowDot"
					:value="98"
					:limit="99"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					:themeColor="args.themeColor"
					:isShowDot="args.isShowDot"
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
						`  :isShowDot= false`,
						`  :value="98"`,
						`  :limit="99"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  :themeColor="${args.themeColor}"`,
						`  :isShowDot= false`,
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
		isShowDot: false,
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
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="secondary"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="neutral"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="info"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="success"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="warning"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="error"
					:isShowDot= true
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
			</div>
			<div style="display:flex; gap:56px">
				<Badge
					themeColor="primary"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="secondary"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="neutral"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="info"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="success"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="warning"
					:isShowDot= false
					:value="args.value"
					:limit="args.limit"
				>
					<Icon name="notification" size="26"></Icon>
				</Badge>
				<Badge
					themeColor="error"
					:isShowDot= false
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
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="secondary"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="neutral"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="info"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="success"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="warning"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="error"`,
						`  :isShowDot= true`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="primary"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="secondary"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="neutral"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="info"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="success"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="warning"`,
						`  :isShowDot= false`,
						`  :value="${args.value}"`,
						`  :limit="${args.limit}"`,
						'>',
						'  <Icon name="notification" size="26"></Icon>',
						'</Badge>',
						'<Badge',
						`  themeColor="error"`,
						`  :isShowDot= false`,
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