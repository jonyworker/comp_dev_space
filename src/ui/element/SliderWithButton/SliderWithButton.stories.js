import SliderWithButton from "./SliderWithButton.vue";
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/SliderWithButton",
	component: SliderWithButton,
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
		},
		prefix: {
			description: '前置元素',
			control: { type: "select" },
			options: ['None', 'increase', 'decrease'],
			mapping: {
				'None': '',
			},
		},
		suffix: {
			description: '後置元素',
			control: { type: "select" },
			options: ['None', 'increase', 'decrease'],
			mapping: {
				'None': '',
			},
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
			title: "Slider",
			description: {
				component: "Slider組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};


//==== 主要項目 ====//
export const SliderButton = {
	name: "主要項目",
	args: {
		themeColor: "primary",
		min: -100,
		max: 100,
		step: 1,
		initValue: 19,
		unit: "℃",
		isDisabled: false,
		prefix: "decrease",
		suffix: "increase",
		className: ''
	},
	render: (args) => ({
		components: { SliderWithButton },
		setup() {
			const sliderValue = ref(-10)
			return {
				args,
				sliderValue
			};
		},
		template: `
			<sliderWithButton
				:themeColor="args.themeColor"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:initValue="args.initValue"
				:unit="args.unit"
				:isDisabled="args.isDisabled"
				:prefix="args.prefix"
				:suffix="args.suffix"
				v-model="sliderValue"
				:className="sliderValue"
			></sliderWithButton>

			ModelValue: {{sliderValue}}
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['range']
		},
	},
};

//==== 主題色按鈕滑桿 ====//
export const SliderButtonColors = {
	name: "主題色按鈕滑桿",
	args: {
		themeColor: "primary",
		min: -100,
		max: 100,
		step: 1,
		initValue: 19,
		unit: "℃",
		isDisabled: false,
		prefix: "decrease",
		suffix: "increase",
	},
	render: (args) => ({
		components: { SliderWithButton },
		setup() {
			const sliderValue = ref(-10)
			return {
				args,
				sliderValue
			};
		},
		template: `

			<div style="display:flex; flex-direction: column;">
				<sliderWithButton
					themeColor="primary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="secondary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="tertiary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="success"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="warning"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="error"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
				<sliderWithButton
					themeColor="info"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					:prefix="args.prefix"
					:suffix="args.suffix"
					v-model="sliderValue"
				></sliderWithButton>
			</div>
			

			ModelValue: {{sliderValue}}
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:['range']
		},
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