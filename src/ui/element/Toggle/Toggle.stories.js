import Toggle from './Toggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Toggle',
	component: Toggle,
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
					summary: 'primary | secondary | tertiary | success | warning | error | info'
				}
			}
		},
		checkLabel: {
			description: '開啟文字',
			control: { type: 'text' },
		},
		unCheckedLabel: {
			description: '關閉文字',
			control: { type: 'text' },
		},
		isChecked: {
			description: '是否開啟',
			control: { type: 'boolean' },
		},
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Toggle',
			description: {
				component: 'Toggle 組件的呈現及說明。',
			},
		},
	},
};

//==== 預設項目 ====//
export const ToggleDefault = {
	name: '預設項目',
	args: {
		themeColor: 'primary',
		checkLabel: 'on',
		unCheckedLabel: 'off',
		isChecked: true,
		isDisabled: false,
		className: '',
	},
	render: (args) => ({
		components: { Toggle },
		setup() {
			return {
				args,
			};
		},
		template:
			`<div style="display:flex; gap: 16px">
				<Toggle
					:themeColor="args.themeColor"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className" >
				</Toggle>
			</div>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['toggleIsChecked'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Toggle',
						`  themeColor="${args.themeColor}"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const ToggleColor = {
	name: '主題色彩',
	args: {
		checkLabel: 'on',
		unCheckedLabel: 'off',
		isChecked: true,
		isDisabled: false,
		className: '',
	},
	render: (args) => ({
		components: { Toggle },
		setup() {
			return {
				args,
			};
		},
		template:
			`<div style="display:flex; gap: 16px">
				<Toggle
					themeColor="primary"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="secondary"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="tertiary"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="success"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="warning"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="error"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
				<Toggle
					themeColor="info"
					:checkLabel="args.checkLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:isChecked="args.isChecked"
					:isDisabled="args.isDisabled"
					:className="args.className">
				</Toggle>
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
						'<Toggle',
						`  themeColor="primary"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="secondary"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="tertiary"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="success"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="warning"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="error"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="info"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckedLabel="${args.unCheckedLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
					].join('\n').trim();

				}
			}
		}
	},
};









//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: 'Design System/Toggle',
// 	component: Toggle,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		checkLabel: {
// 			description: '開啟文字',
// 			control: { type: 'text' },
// 		},
// 		unCheckedLabel: {
// 			description: '關閉文字',
// 			control: { type: 'text' },
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
// 		isChecked: {
// 			description: '帶入外部參數，控制開關是否開啟',
// 			control: { type: 'boolean' },
// 		},
// 		isDisabled: {
// 			description: '是否禁用',
// 			control: { type: 'boolean' },
// 		},
// 		customClass: {
// 			description: '客製化樣式',
// 			control: { type: 'text' },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: 'Toggle',
// 			description: {
// 				component: 'Toggle 組件的呈現及說明。',
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Toggle 基礎樣式 ====//
// export const ToggleDefault = {
// 	name: 'Toggle 基礎樣式',
// 	args: {
// 		checkLabel: 'on',
// 		unCheckedLabel: 'off',
// 		themeColor: 'primary',
// 		isDisabled: false,
// 		isChecked: true
// 	},
// 	render: (args) => ({
// 		components: { Toggle },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`<div style="display:flex; gap: 16px">
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					:themeColor="args.themeColor"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 			</div>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['toggleIsChecked'],
// 		},
// 	},
// };
//
// //==== Toggle 顏色 ====//
// export const ToggleColor = {
// 	name: 'Toggle 顏色',
// 	args: {
// 		checkLabel: 'on',
// 		unCheckedLabel: 'off',
// 		isDisabled: false,
// 		isChecked: true
// 	},
// 	render: (args) => ({
// 		components: { Toggle },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template:
// 			`<div style="display:flex; gap: 16px">
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="primary"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="secondary"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="tertiary"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="success"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="warning"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="error"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkLabel="args.checkLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="info"
// 					:isDisabled="args.isDisabled"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 			</div>
// 			`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['themeColor'],
// 		},
// 	},
// };

//--- JONY VERSION END ---//