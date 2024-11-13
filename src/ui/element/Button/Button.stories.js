import Button from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Button",
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
		},
		width: {
			description: "按鈕寬度",
			control: { type: "select" },
			options: ["fit", "full"],
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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};


//==== 預設項目 ====//
export const DefaultButtonStory = {
	name: '主要項目',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		prefix: 'folder',
		suffix: '',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: '按鈕',
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
		default: '按鈕'
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
		default: '按鈕',
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
	name: '多個按鈕',
	args: {
		themeColor: 'primary',
		variant: 'contained',
		prefix: 'folder',
		suffix: '',
		size: 'medium',
		width: 'fit',
		isDisabled: false,
		className: "",
		default: '按鈕',
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




//--- JONY VERSION START ---//

// export default {
// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// 	title: 'Design System/Button',
// 	component: Button,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		variant: {
// 			description: '按鈕樣式',
// 			control: { type: 'select' },
// 			options: ['contained', 'outlined', 'text'],
// 		},
// 		themeColor: {
// 			description: '主題顏色',
// 			control: { type: 'select' },
// 			options: [
// 				'primary',
// 				'secondary',
// 				'tertiary',
// 				'success',
// 				'warning',
// 				'error',
// 				'info',
// 			],
// 		},
// 		size: {
// 			description: '按鈕尺寸',
// 			control: { type: 'select' },
// 			options: ['small', 'medium', 'large'],
// 		},
// 		width: {
// 			description: '按鈕寬度',
// 			control: { type: 'select' },
// 			options: ['fit', 'full'],
// 		},
// 		isDisabled: {
// 			description: '是否禁用',
// 			control: { type: 'boolean' },
// 		},
// 		prefix: {
// 			description: '設定位於按鈕前方的 icon',
// 			control: { type: 'select' },
// 			options: [ 'home', 'folder', 'academy', 'arrow-forward', 'finger-print', 'None' ],
// 			mapping: {
// 				None: null,
// 			},
// 		},
// 		suffix: {
// 			description: '設定位於按鈕後方的 icon',
// 			control: { type: 'select' },
// 			options: [ 'home', 'folder', 'academy', 'arrow-forward', 'finger-print', 'None' ],
// 			mapping: {
// 				None: null,
// 			},
// 		},
// 		customClass: {
// 			description: '客製化樣式',
// 			control: { type: 'text' },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: '按鈕',
// 			description: {
// 				component: '按鈕組件的呈現及說明。',
// 			},
// 		},
// 		slots: {
// 			default: {
// 				description: 'Default slot 接收按鈕文字',
// 				template: `{{ args.default }}`,
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Button 基礎按鈕 ====//
// export const ButtonDefault = {
// 	name: '基礎按鈕',
// 	args: {
// 		default: 'Button Text',
// 		variant: 'contained',
// 		themeColor: 'primary',
// 		size: 'medium',
// 		width: 'fit',
// 		prefix: 'folder',
// 		suffix: '',
// 		isDisabled: false,
// 	},
// 	render: (args) => ({
// 		components: { Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`<Button
// 				:variant="args.variant"
// 				:themeColor="args.themeColor"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
// 		},
// 	},
// };
//
// //==== Button 按鈕樣式 ====//
// export const ButtonVariant = {
// 	name: '按鈕樣式',
// 	args: {
// 		default: 'Button Text',
// 		themeColor: 'primary',
// 		size: 'medium',
// 		width: 'fit',
// 		prefix: 'folder',
// 		suffix: '',
// 		isDisabled: false,
// 	},
// 	render: (args) => ({
// 		components: { Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 				<div style="display:flex; flex-wrap: wrap; gap: 16px">
// 					<Button
// 						variant="contained"
// 						:themeColor="args.themeColor"
// 						:size="args.size"
// 						:width="args.width"
// 						:prefix="args.prefix"
// 						:suffix="args.suffix"
// 						:isDisabled="args.isDisabled"
// 					>
// 						{{ args.default }}
// 					</Button>
// 					<Button
// 						variant="outlined"
// 						:themeColor="args.themeColor"
// 						:size="args.size"
// 						:width="args.width"
// 						:prefix="args.prefix"
// 						:suffix="args.suffix"
// 						:isDisabled="args.isDisabled"
// 					>
// 						{{ args.default }}
// 					</Button>
// 					<Button
// 						variant="text"
// 						:themeColor="args.themeColor"
// 						:size="args.size"
// 						:width="args.width"
// 						:prefix="args.prefix"
// 						:suffix="args.suffix"
// 						:isDisabled="args.isDisabled"
// 					>
// 						{{ args.default }}
// 					</Button>
// 				</div>
//
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['variant'],
// 		},
// 	},
// };
//
// //==== Button 按鈕顏色 ====//
// export const MultipleButton = {
// 	name: '按鈕顏色',
// 	args: {
// 		default: 'Button Text',
// 		variant: 'contained',
// 		themeColor: 'primary',
// 		size: 'medium',
// 		width: 'fit',
// 		prefix: 'folder',
// 		suffix: '',
// 		isDisabled: false,
// 	},
// 	render: (args) => ({
// 		components: { Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `<div style="display:flex; flex-wrap: wrap; gap: 16px">
// 			<Button
// 				:variant="args.variant"
// 				themeColor="primary"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="secondary"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="tertiary"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="success"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="warning"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="error"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 			<Button
// 				:variant="args.variant"
// 				themeColor="info"
// 				:size="args.size"
// 				:width="args.width"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				:isDisabled="args.isDisabled"
// 			>
// 				{{ args.default }}
// 			</Button>
// 		</div>
// 		`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['themeColor'],
// 		},
// 	},
// };
//
// //==== Button 按鈕寬度 ====//
// export const ButtonWidth = {
// 	name: '按鈕寬度',
// 	args: {
// 		default: 'Button Text',
// 		variant: 'contained',
// 		themeColor: 'primary',
// 		size: 'medium',
// 		prefix: 'folder',
// 		suffix: '',
// 		isDisabled: false,
// 	},
// 	render: (args) => ({
// 		components: { Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`
// 				<div style="display:flex; flex-wrap: wrap; gap: 16px">
//
// 					<Button
// 						:variant="args.variant"
// 						:themeColor="args.themeColor"
// 						:size="args.size"
// 						width="full"
// 						:prefix="args.prefix"
// 						:suffix="args.suffix"
// 						:isDisabled="args.isDisabled"
// 					>
// 						{{ args.default }}
// 					</Button>
// 					<Button
// 						:variant="args.variant"
// 						:themeColor="args.themeColor"
// 						:size="args.size"
// 						width="fit"
// 						:prefix="args.prefix"
// 						:suffix="args.suffix"
// 						:isDisabled="args.isDisabled"
// 					>
// 						{{ args.default }}
// 					</Button>
// 				</div>
//
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['width'],
// 		},
// 	},
// };

//--- JONY VERSION END ---//