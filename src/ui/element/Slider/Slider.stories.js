import Slider from "./Slider.vue";
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Slider",
	component: Slider,
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
		initValue: {
			description: '初始值',
			control: { type: 'number' },
		},
		unit: {
			description: '單位',
			control: { type: 'text' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},

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

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const SliderDefault = {
	name: "預設項目",
	args: {
		themeColor: "primary",
		isDisabled: false,
		min: -100,
		max: 100,
		step: 1,
		initValue: "0",
		unit: "℃",
		className: ''
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const sliderValue = ref();
			sliderValue.value = args.initValue;
			return {
				args,
				sliderValue
			};
		},
		template: `
			<slider
				:themeColor="args.themeColor"
				:isDisabled="args.isDisabled"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:initValue="args.initValue"
				:unit="args.unit"
				v-model="sliderValue"
				:className="sliderValue"
			></slider>
			
			ModelValue: {{sliderValue}}
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
						'<slider',
						`  themeColor="${args.themeColor}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="${args.initValue}"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						`  className="${args.className}"`,
						'></slider>',
					].join('\n').trim();

				}
			}
		}
	},
};

//==== 主題色彩 ====//
export const SliderColors = {
	name: "主題色彩",
	args: {
		min: 0,
		max: 100,
		step: 1,
		unit: "℃",
		isDisabled: false
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const sliderValue = ref();
			return {
				args,
				sliderValue
			};
		},
		template: `
			<div style="display:flex; flex-direction: column;">
				<slider
					themeColor="primary"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="40"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="secondary"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="50"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="tertiary"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="60"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="success"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="70"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="warning"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="80"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="error"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="90"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="info"
					:isDisabled="args.isDisabled"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					initValue="100"
					:unit="args.unit"
					v-model="sliderValue"
				></slider>
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
						'<slider',
						`  themeColor="primary"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="40"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="secondary"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="50"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="tertiary"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="60"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="success"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="70"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="warning"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="80"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="error"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="90"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
						'<slider',
						`  themeColor="info"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :min="${args.min}"`,
						`  :max="${args.max}"`,
						`  :step="${args.step}"`,
						`  :initValue="100"`,
						`  unit="${args.unit}"`,
						`  v-model="sliderValue"`,
						'></slider>',
					].join('\n').trim();
				}
			}
		}
	},
};



//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/Slider",
// 	component: Slider,
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
// //==== Slider 基礎樣式 ====//
// export const SliderDefault = {
// 	name: "Slider 基礎樣式",
// 	args: {
// 		themeColor: "primary",
// 		min: 0,
// 		max: 100,
// 		step: 1,
// 		initValue: "50",
// 		unit: "℃",
// 		isDisabled: false
// 	},
// 	render: (args) => ({
// 		components: { Slider },
// 		setup() {
// 			const sliderValue = ref(20);
// 			return {
// 				args,
// 				sliderValue
// 			};
// 		},
// 		template: `
// 			<slider
// 				:themeColor="args.themeColor"
// 				:min="args.min"
// 				:max="args.max"
// 				:step="args.step"
// 				:initValue="args.initValue"
// 				:unit="args.unit"
// 				:isDisabled="args.isDisabled"
// 				v-model="sliderValue"
// 			></slider>
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