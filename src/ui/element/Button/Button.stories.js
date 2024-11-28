import Button from './Button.vue';

export default {
	title: "Component/Button",
	component: Button,
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
		variant: {
			description: "按鈕樣式",
			required: true,
			control: { type: "select" },
			options: ["contained", "outlined", "text"],
			table: {
				type: {
					summary: "contained | outlined | text",
				}
			}
		},
		prefix: {
			description: "前置元素",
			control: {
				type: "select",
				labels: {
					"": "None",
					home: "home",
					folder: "folder",
					academy: "academy",
					"arrow-forward": "arrow-forward",
					"finger-print": "finger-print",
				}
			},
			options: [ "", "home", "folder", "academy", "arrow-forward", "finger-print" ],
		},
		suffix: {
			description: "後置元素",
			control: {
				type: "select",
				labels: {
					"": "None",
					home: "home",
					folder: "folder",
					academy: "academy",
					"arrow-forward": "arrow-forward",
					"finger-print": "finger-print",
				}
			},
			options: [ "", "home", "folder", "academy", "arrow-forward", "finger-print" ],
		},
		size: {
			description: "按鈕尺寸",
			control: { type: "select" },
			options: ["small", "medium", "large"],
			table: {
				type: {
					summary: "small | medium | large",
				}
			}
		},
		width: {
			description: "按鈕寬度",
			control: { type: "select" },
			options: ["fit", "fluid"],
			table: {
				type: {
					summary: "fit | fluid",
				}
			}
		},
		isDisabled: {
			description: "是否禁用",
			control: { type: "boolean" },
		},

		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		default: {
			description: "按鈕內容",
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
			title: "按鈕",
			description: {
				component: "按鈕組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const DefaultButtonStory = {
	name: '預設項目',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		prefix: '',
		suffix: '',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: 'Button',
	},
	render: (args) => ({
		components: { Button },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Button
				:variant="args.variant"
				:themeColor="args.themeColor"
				:size="args.size"
				:width="args.width"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>'
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 附加元素 ====//
export const ButtonPrefixSuffixStory = {
	name: '附加元素',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: 'Button'
	},
	render: (args) => ({
		components: { Button },
		setup() {
			return {
				args,
			};
		},
		template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">
			<Button
				:themeColor="args.themeColor"
				:variant="args.variant"
				prefix="folder"
				suffix=""
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				:themeColor="args.themeColor"
				:variant="args.variant"
				prefix=""
				suffix="folder"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
		</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['prefix','suffix'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="${args.variant}"`,
						`  prefix="folder"`,
						`  suffix=""`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="${args.variant}"`,
						`  prefix=""`,
						`  suffix="folder"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 按鈕樣式 ====//
export const ButtonTypeStory = {
	name: '按鈕樣式',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		prefix: 'folder',
		suffix: '',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: 'Button',
	},
	render: (args) => ({
		components: { Button },
		setup() {
			return {
				args,
			};
		},
		template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">
			<Button
				:themeColor="args.themeColor"
				variant="contained"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				:themeColor="args.themeColor"
				variant="outlined"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				:themeColor="args.themeColor"
				variant="text"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
		</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['variant'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="contained"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="outlined"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						` className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="${args.themeColor}"`,
						`  variant="text"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const ButtonColorStory = {
	name: '主題色彩',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		prefix: 'folder',
		suffix: '',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: 'Button',
	},
	render: (args) => ({
		components: { Button },
		setup() {
			return {
				args,
			};
		},
		template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">
			<Button
				themeColor="primary"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="secondary"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="tertiary"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="success"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="warning"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="error"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
			<Button
				themeColor="info"
				:variant="args.variant"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:size="args.size"
				:width="args.width"
				:isDisabled="args.isDisabled"
				:className="args.className"
			>
				{{ args.default }}
			</Button>
		</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['themeColor'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Button',
						`  themeColor="primary"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="secondary"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="tertiary"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="success"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="warning"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="error"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
						'<Button',
						`  themeColor="info"`,
						`  variant="${args.variant}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  size="${args.size}"`,
						`  width="${args.width}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'>',
						`  ${args.default}`,
						'</Button>',
					].join('\n').trim();
				}
			}
		}
	},
};