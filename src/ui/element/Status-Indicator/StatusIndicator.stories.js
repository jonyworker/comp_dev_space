import StatusIndicator from "./StatusIndicator.vue";

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
			description: "前綴元素",
			control: {
				type: "select",
				labels: {
					"": "none",
					InfoCircleIcon: "InfoCircleIcon",
					SuccessCircleIcon: "SuccessCircleIcon",
					WarningCircleIcon: "WarningCircleIcon",
					ErrorCircleIcon: "ErrorCircleIcon",
					QuestionCircleIcon: "QuestionCircleIcon",
					DisableCircleIcon: "DisableCircleIcon",
				}
			},
			options: ['', 'InfoCircleIcon', 'SuccessCircleIcon', 'WarningCircleIcon', 'ErrorCircleIcon', 'QuestionCircleIcon', 'DisableCircleIcon'],
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
		themeColor: "success",
		variant: "filled",
		prefix: "",
		size: "medium",
		className: '',
		default: "Success",
	},
	render: (args) => ({
		components: { StatusIndicator },
		setup() {
			return {
				args,
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

//==== 主題色彩 ====//
export const StatusIndicatorColors = {
	name: "主題色彩",
	args: {
		themeColor: "",
		variant: "",
		prefix: "",
		size: "medium",
		className: "",
	},
	render: (args) => ({
		components: { StatusIndicator },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="width: 600px; display: flex; gap: 10px; flex-wrap: wrap;">
				<div style="display:flex; gap: 8px">
					<StatusIndicator
						themeColor="info"
						variant="filled"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Information
					</StatusIndicator>
					<StatusIndicator
						themeColor="success"
						variant="filled"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Success
					</StatusIndicator>
					<StatusIndicator
						themeColor="warning"
						variant="filled"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Warning
					</StatusIndicator>
					<StatusIndicator
						themeColor="error"
						variant="filled"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Error
					</StatusIndicator>
					<StatusIndicator
						themeColor="neutral"
						variant="filled"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Disable
					</StatusIndicator>
				</div>
				<div style="display:flex; gap: 8px">
					<StatusIndicator
						themeColor="info"
						variant="text"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Information
					</StatusIndicator>
					<StatusIndicator
						themeColor="success"
						variant="text"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Success
					</StatusIndicator>
					<StatusIndicator
						themeColor="warning"
						variant="text"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Warning
					</StatusIndicator>
					<StatusIndicator
						themeColor="error"
						variant="text"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Error
					</StatusIndicator>
					<StatusIndicator
						themeColor="neutral"
						variant="text"
						:prefix="args.prefix"
						:size="args.size"
						:className="args.className"
					>
						Disable
					</StatusIndicator>
				</div>
				<div style="display:flex; gap: 8px">
					<StatusIndicator
						themeColor="info"
						variant="filled"
						prefix="InfoCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Information
					</StatusIndicator>
					<StatusIndicator
						themeColor="success"
						variant="filled"
						prefix="SuccessCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Success
					</StatusIndicator>
					<StatusIndicator
						themeColor="warning"
						variant="filled"
						prefix="WarningCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Warning
					</StatusIndicator>
					<StatusIndicator
						themeColor="error"
						variant="filled"
						prefix="ErrorCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Error
					</StatusIndicator>
					<StatusIndicator
						themeColor="neutral"
						variant="filled"
						prefix="DisableCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Disable
					</StatusIndicator>
				</div>
				<div style="display:flex; gap: 8px">
					<StatusIndicator
						themeColor="info"
						variant="text"
						prefix="InfoCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Information
					</StatusIndicator>
					<StatusIndicator
						themeColor="success"
						variant="text"
						prefix="SuccessCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Success
					</StatusIndicator>
					<StatusIndicator
						themeColor="warning"
						variant="text"
						prefix="WarningCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Warning
					</StatusIndicator>
					<StatusIndicator
						themeColor="error"
						variant="text"
						prefix="ErrorCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Error
					</StatusIndicator>
					<StatusIndicator
						themeColor="neutral"
						variant="text"
						prefix="DisableCircleIcon"
						:size="args.size"
						:className="args.className"
					>
						Disable
					</StatusIndicator>
				</div>
			</div>
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
						`  themeColor="info"`,
						`  variant="filled"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Information`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="success"`,
						`  variant="filled"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Success`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="warning"`,
						`  variant="filled"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Warning`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="error"`,
						`  variant="filled"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Error`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="neutral"`,
						`  variant="filled"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Disable`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="info"`,
						`  variant="text"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Information`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="success"`,
						`  variant="text"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Success`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="warning"`,
						`  variant="text"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Warning`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="error"`,
						`  variant="text"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Error`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="neutral"`,
						`  variant="text"`,
						`  :prefix="${args.prefix}"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Disable`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="info"`,
						`  variant="filled"`,
						`  prefix="InfoCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Information`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="success"`,
						`  variant="filled"`,
						`  prefix="SuccessCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Success`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="warning"`,
						`  variant="filled"`,
						`  prefix="WarningCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Warning`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="error"`,
						`  variant="filled"`,
						`  prefix="ErrorCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Error`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="neutral"`,
						`  variant="filled"`,
						`  prefix="DisableCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Disable`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="info"`,
						`  variant="text"`,
						`  prefix="InfoCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Information`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="success"`,
						`  variant="text"`,
						`  prefix="SuccessCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Success`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="warning"`,
						`  variant="text"`,
						`  prefix="WarningCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Warning`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="error"`,
						`  variant="text"`,
						`  prefix="ErrorCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Error`,
						`</StatusIndicator>`,
						`<StatusIndicator`,
						`  themeColor="neutral"`,
						`  variant="text"`,
						`  prefix="DisableCircleIcon"`,
						`  :size="${args.size}"`,
						`  :className="${args.className}"`,
						`>`,
						`  Disable`,
						`</StatusIndicator>`,
					].join("\n").trim();
				}
			}
		}
	},
};