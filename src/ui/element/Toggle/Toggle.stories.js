import Toggle from './Toggle.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Toggle',
	component: Toggle,
	tags: ["autodocs"],
	argTypes: {
		checkedLabel: {
			description: '開啟文字',
			control: { type: 'text' },
		},
		unCheckedLabel: {
			description: '關閉文字',
			control: { type: 'text' },
		},
		themeColor: {
			description: '主題顏色',
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			],
		},
		isChecked: {
			description: '是否開啟',
			control: { type: 'boolean' },
		},
		isDisable: {
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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 主要項目 ====//
export const ToggleDefault = {
	name: '主要項目',
	args: {
		checkedLabel: 'on',
		unCheckedLabel: 'off',
		themeColor: 'primary',
		isDisable: false,
		isChecked: true,
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
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					:themeColor="args.themeColor"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked"
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
	},
};

//==== 主題顏色開關按鈕 ====//
export const ToggleColor = {
	name: '主題顏色開關按鈕',
	args: {
		checkedLabel: 'on',
		unCheckedLabel: 'off',
		isDisable: false,
		isChecked: true
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
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="primary"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="secondary"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="tertiary"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="success"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="warning"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="error"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
				<Toggle
					:checkedLabel="args.checkedLabel"
					:unCheckedLabel="args.unCheckedLabel"
					themeColor="info"
					:isDisable="args.isDisable"
					:isChecked="args.isChecked">
				</Toggle>
			</div>
			`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['themeColor'],
		},
	},
};









//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: 'Design System/Toggle',
// 	component: Toggle,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		checkedLabel: {
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
// 		isDisable: {
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
// 		checkedLabel: 'on',
// 		unCheckedLabel: 'off',
// 		themeColor: 'primary',
// 		isDisable: false,
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
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					:themeColor="args.themeColor"
// 					:isDisable="args.isDisable"
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
// 		checkedLabel: 'on',
// 		unCheckedLabel: 'off',
// 		isDisable: false,
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
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="primary"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="secondary"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="tertiary"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="success"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="warning"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="error"
// 					:isDisable="args.isDisable"
// 					:isChecked="args.isChecked">
// 				</Toggle>
// 				<Toggle
// 					:checkedLabel="args.checkedLabel"
// 					:unCheckedLabel="args.unCheckedLabel"
// 					themeColor="info"
// 					:isDisable="args.isDisable"
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