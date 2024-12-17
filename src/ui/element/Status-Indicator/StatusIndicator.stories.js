import StatusIndicator from "./StatusIndicator.vue";
import { ref } from "vue";

export default {
	title: "Component/Status-Indicator",
	component: StatusIndicator,
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
		variant: {
			description: "按鈕樣式",
			required: true,
			control: { type: "select" },
			options: ["text", "filled"],
			table: {
				type: {
					summary: "text | filled ",
				}
			}
		},
		prefix: {
			description: '前綴元素',
			control: {
				type: "select",
			},
			options: ['InfoCircleIcon', 'SuccessCircleIcon', 'WarningCircleIcon', 'ErrorCircleIcon', 'QuestionCircleIcon', 'DisableCircleIcon'],
		},
		size: {
			description: "尺寸",
			control: { type: "select" },
			options: ["small", "medium", "large"],
			table: {
				type: {
					summary: "small | medium | large "
				}
			}
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		default: {
			description: "內容",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				}
			},
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "StatusIndicator",
			description: {
				component: "StatusIndicator 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const StatusIndicatorDefault = {
	name: "預設項目",
	args: {
		themeColor: "primary",
		variant: "text",
		prefix: "InfoCircleIcon",
		size: "medium",
		className: '',
		default: "123",
	},
	render: (args) => ({
		components: { StatusIndicator },
		setup() {
			const sliderValue = ref(args.initValue || 0);
			return {
				args,
				sliderValue
			};
		},
		template: `
			<StatusIndicator
				:themeColor="args.themeColor"
				:variant="args.variant"
				:prefix="args.prefix"
				:size="args.size"
				:className="args.className"
			>
				{{args.default}}
			</StatusIndicator>
		`,
	}),
	parameters: {
		controls: {
			// include or exclude keys as needed
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<StatusIndicator`,
						`  themeColor="${args.themeColor}"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  size="${args.size}"`,
						`  className="${args.className}"`,
						`>`,
						`  ${args.default}`,
						`</StatusIndicator>`,
					].join("\n").trim();
				}
			}
		}
	},
};