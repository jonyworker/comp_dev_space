import SliderControl from "./SliderControl.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Slider-Control",
	component: SliderControl,
	tags: ["autodocs"],
	argTypes: {
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
			table: {
				type: {
					summary: 'primary | secondary | tertiary | success | warning | error | info'
				}
			}
		},
		prefix: {
			description: '前置元素',
			control: {
				type: "select",
				labels: {
					"": "None",
					increase: "increase",
					decrease: "decrease",
				}
			},
			options: ['', 'increase', 'decrease'],
		},
		suffix: {
			description: '後置元素',
			control: {
				type: "select",
				labels: {
					"": "None",
					increase: "increase",
					decrease: "decrease",
				}
			},
			options: ['', 'increase', 'decrease'],
		},
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		min: {
			description: '最小值',
			control: { type: 'number' },
		},
		max: {
			description: '最大值',
			control: { type: 'number' },
		},
		step: {
			description: '步進值',
			control: { type: 'number' },
		},
		unit: {
			description: '單位',
			control: { type: 'text' },
		},
		initValue: {
			description: '初始值',
			control: { type: 'number' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "SliderControl",
			description: {
				component: "Slider組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};


//==== 預設項目 ====//
export const SliderButton = {
	name: "預設項目",
	args: {
		themeColor: "primary",
		prefix: "decrease",
		suffix: "increase",
		isDisabled: false,
		min: -100,
		max: 100,
		step: 1,
		unit: "℃",
		initValue:50,
		className: ''
	},
	render: (args) => ({
		components: { SliderControl },
		setup() {
			return {
				args
			};
		},
		template: `
			<SliderControl
				:themeColor="args.themeColor"
				:prefix="args.prefix"
				:suffix="args.suffix"
				:isDisabled="args.isDisabled"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:unit="args.unit"
				:initValue="args.initValue"
				:className="args.className"
			></SliderControl>
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
						'<SliderControl',
						`  themeColor="${args.themeColor}"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="${args.initValue}"`,
						`  className="${args.className}"`,
						'></SliderControl>',
					].join('\n').trim();
				}
			}
		}
	},
};


//==== 主題色彩 ====//
export const SliderButtonColors = {
	name: "主題色彩",
	args: {
		themeColor: "primary",
		prefix: "decrease",
		suffix: "increase",
		isDisabled: false,
		min: -100,
		max: 100,
		step: 1,
		unit: "℃",
		className: '',
	},
	render: (args) => ({
		components: { SliderControl },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; flex-direction: column;">
				<SliderControl
					themeColor="primary"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="40"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="secondary"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="50"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="tertiary"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="60"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="success"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="70"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="warning"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="80"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="error"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="90"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
				<SliderControl
					themeColor="info"
					:prefix="args.prefix"
					:suffix="args.suffix"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:unit="args.unit"
					:initValue="100"
					:className="args.className"
					v-model="sliderValue"
				></SliderControl>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['range']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<SliderControl',
						`  themeColor="primary"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="40"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="secondary"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="50"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="tertiary"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="60"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="success"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="70"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="warning"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="80"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="error"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="90"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
						'<SliderControl',
						`  themeColor="info"`,
						`  prefix="${args.prefix}"`,
						`  suffix="${args.suffix}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  unit="${args.unit}"`,
						`  :initValue="100"`,
						`  className="${args.className}"`,
						`  v-model="sliderValue"`,
						'></SliderControl>',
					].join('\n').trim();
				}
			}
		}
	},
};

//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/SliderWithButton",
// 	component: SliderWithButton,
// 	tags: ["autodocs"],
// 	argTypes: {
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
// 		prefix: {
// 			description: '設定位於前方按鈕的 icon',
// 			control: { type: "select" },
// 			options: ['None', 'increase', 'decrease'],
// 			mapping: {
// 				'None': '',
// 			},
// 		},
// 		suffix: {
// 			description: '設定位於後方按鈕的 icon',
// 			control: { type: "select" },
// 			options: ['None', 'increase', 'decrease'],
// 			mapping: {
// 				'None': '',
// 			},
// 		},
// 		min: {
// 			description: '最小值',
// 			control: { type: 'number' },
// 		},
// 		max: {
// 			description: '最大值',
// 			control: { type: 'number' },
// 		},
// 		step: {
// 			description: '步進值',
// 			control: { type: 'number' },
// 		},
// 		initValue: {
// 			description: '初始值',
// 			control: { type: 'number' },
// 		},
// 		unit: {
// 			description: '單位',
// 			control: { type: 'text' },
// 		},
// 		isDisabled: {
// 			description: '是否禁用',
// 			control: { type: 'boolean' },
// 		},
// 		className: {
// 			description: '客製化樣式',
// 			control: { type: 'text' },
// 		},
//
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Slider",
// 			description: {
// 				component: "Slider組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
//
// //==== Slider 基礎樣式 ====//
// export const SliderButton = {
// 	name: "Slider 基礎樣式",
// 	args: {
// 		themeColor: "primary",
// 		min: -100,
// 		max: 100,
// 		step: 1,
// 		initValue: 19,
// 		unit: "℃",
// 		isDisabled: false,
// 		prefix: "decrease",
// 		suffix: "increase",
// 	},
// 	render: (args) => ({
// 		components: { SliderWithButton },
// 		setup() {
// 			const sliderValue = ref(-10)
// 			return {
// 				args,
// 				sliderValue
// 			};
// 		},
// 		template: `
// 			<sliderWithButton
// 				:themeColor="args.themeColor"
// 				:min="args.min"
// 				:max="args.max"
// 				:step="args.step"
// 				:initValue="args.initValue"
// 				:unit="args.unit"
// 				:isDisabled="args.isDisabled"
// 				:prefix="args.prefix"
// 				:suffix="args.suffix"
// 				v-model="sliderValue"
// 			></sliderWithButton>
//
// 			ModelValue: {{sliderValue}}
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			// exclude:['range']
// 		},
// 	},
// };

//--- JONY VERSION END ---//