import Toggle from './Toggle.vue';

export default {
	title: 'Component/Toggle',
	component: Toggle,
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
		checkLabel: {
			description: '開啟文字',
			control: { type: 'text' },
		},
		unCheckLabel: {
			description: '關閉文字',
			control: { type: 'text' },
		},
		// isChecked: {
		// 	description: '是否開啟',
		// 	control: { type: 'boolean' },
		// },
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		modelValue: {
			description: "是否開啟",
			control: { type: 'boolean' },
			table: {
				type: { summary: 'boolean' },
				category: 'v-model',
				// defaultValue: { summary: '""' },
			}
		}
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
		themeColor: 'success',
		checkLabel: 'on',
		unCheckLabel: 'off',
		isDisabled: false,
		className: '',
		modelValue: true,
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
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className" 
					v-model="args.modelValue">
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
						`  unCheckLabel="${args.unCheckLabel}"`,
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
		// themeColor: 'success',
		checkLabel: 'on',
		unCheckLabel: 'off',
		isDisabled: false,
		className: '',
		modelValue: true,
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
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="secondary"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="neutral"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="info"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="success"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="warning"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
				</Toggle>
				<Toggle
					themeColor="error"
					:checkLabel="args.checkLabel"
					:unCheckLabel="args.unCheckLabel"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue">
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
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="secondary"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="tertiary"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="success"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="warning"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="error"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
						`  :isChecked="${args.isChecked}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						'></Toggle>',
						'<Toggle',
						`  themeColor="info"`,
						`  checkLabel="${args.checkLabel}"`,
						`  unCheckLabel="${args.unCheckLabel}"`,
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