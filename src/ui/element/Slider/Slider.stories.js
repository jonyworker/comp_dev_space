import Slider from "./Slider.vue";

export default {
	title: "Component/Slider",
	component: Slider,
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
		min: {
			description: "最小值",
			control: { type: "number" },
		},
		max: {
			description: "最大值",
			control: { type: "number" },
		},
		step: {
			description: "步進值",
			control: { type: "number" },
		},
		// initValue: {
		// 	description: "初始值",
		// 	control: { type: "number" },
		// },
		label: {
			description: "單位",
			control: { type: "text" },
		},
		isShowRange: {
			description: "是否顯示範圍",
			control: { type: "boolean" },
		},
		isShowCurrValue: {
			description: "是否顯示目前值",
			control: { type: "boolean" },
		},
		isDisabled: {
			description: "是否禁用",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		updateWidth: {
			table: { disable: true }
		},
		modelValue: {
			description: "輸入值",
			control: { type: 'number' },
			table: {
				type: { summary: 'number' },
				category: 'v-model',
				// defaultValue: { summary: '""' },
			}
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Slider",
			description: {
				component: "Slider組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const SliderDefault = {
	name: "預設項目",
	args: {
		themeColor: 'primary',
		min: -100,
		max: 100,
		step: 1,
		// initValue: 8,
		label: "℃",
		isShowRange: true,
		isShowCurrValue: true,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:themeColor="args.themeColor"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="args.isShowRange"
				:isShowCurrValue="args.isShowCurrValue"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<slider',
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  label="${args.label}"`,
						`  :isShowRange="${args.isShowRange}"`,
						`  :isShowCurrValue="${args.isShowCurrValue}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></slider>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 顯示目前值 ====//
export const SliderCurrent = {
	name: "顯示目前值",
	args: {
		themeColor: 'primary',
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		isShowRange: false,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:themeColor="args.themeColor"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="args.isShowRange"
				:isShowCurrValue="true"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<slider',
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  label="${args.label}"`,
						`  :isShowRange="${args.isShowRange}"`,
						`  :isShowCurrValue="true"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></slider>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 顯示範圍 ====//
export const SliderAround = {
	name: "顯示範圍",
	args: {
		themeColor: 'primary',
		min: -100,
		max: 100,
		step: 1,
		label: "℃",
		isShowCurrValue: false,
		isDisabled: false,
		className: '',
		modelValue: 8
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			return {
				args,
			};
		},
		template: `
			<slider
				:themeColor="args.themeColor"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:label="args.label"
				:isShowRange="true"
				:isShowCurrValue="args.isShowCurrValue"
				:isDisabled="args.isDisabled"
				:className="args.className"
				v-model="args.modelValue"
			></slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['updateWidth']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<slider',
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  label="${args.label}"`,
						`  :isShowRange="true"`,
						`  :isShowCurrValue="${args.isShowCurrValue}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></slider>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 主題色彩 ====//
// export const SliderColors = {
// 	name: "主題色彩",
// 	args: {
// 		min: 0,
// 		max: 100,
// 		step: 1,
// 		initValue: 50,
// 		label: "℃",
// 		isDisabled: false,
// 		className: ''
// 	},
// 	render: (args) => ({
// 		components: { Slider },
// 		setup() {
// 			const sliderValue = ref(args.initValue || 0);
// 			return {
// 				args,
// 				sliderValue
// 			};
// 		},
// 		template: `
// 			<div style="display:flex; flex-direction: column;">
// 				<slider
// 					themeColor="primary"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="40"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
// 				<slider
// 					themeColor="secondary"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="50"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
// 				<slider
// 					themeColor="neutral"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="60"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 				></slider>
// 				<slider
// 					themeColor="info"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="70"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
// 				<slider
// 					themeColor="success"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="80"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
// 				<slider
// 					themeColor="warning"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="90"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
// 				<slider
// 					themeColor="error"
// 					:min="args.min"
// 					:max="args.max"
// 					:step="args.step"
// 					:initValue="100"
// 					:label="args.label"
// 					:isDisabled="args.isDisabled"
// 					:className="sliderValue"
// 				></slider>
//
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			// exclude:['range']
// 		},
// 		docs: {
// 			source: {
// 				transform: (src, storyContext) => {
// 					const { args } = storyContext;
// 					return [
// 						'<slider',
// 						`  themeColor="primary"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="40"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="secondary"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="50"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="neutral"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="60"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="info"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="70"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="success"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="80"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="warning"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="90"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 						'<slider',
// 						`  themeColor="error"`,
// 						`  :min="${args.min}"`,
// 						`  :max="${args.max}"`,
// 						`  :step="${args.step}"`,
// 						`  :initValue="100"`,
// 						`  label="${args.label}"`,
// 						`  :isDisabled="${args.isDisabled}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="sliderValue"`,
// 						'></slider>',
// 					].join('\n').trim();
// 				}
// 			}
// 		}
// 	},
// };