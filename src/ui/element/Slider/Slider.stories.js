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
export const SliderDefault = {
	name: "主要項目",
	args: {
		themeColor: "primary",
		min: 0,
		max: 100,
		step: 1,
		initValue: "50",
		unit: "℃",
		isDisabled: false,
		className: ''
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const sliderValue = ref(20);
			return {
				args,
				sliderValue
			};
		},
		template: `
			<slider
				:themeColor="args.themeColor"
				:min="args.min"
				:max="args.max"
				:step="args.step"
				:initValue="args.initValue"
				:unit="args.unit"
				:isDisabled="args.isDisabled"
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
	},
};

//==== 主題色滑桿 ====//
export const SliderColors = {
	name: "主題色滑桿",
	args: {
		min: 0,
		max: 100,
		step: 1,
		initValue: "50",
		unit: "℃",
		isDisabled: false
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const sliderValue = ref(20);
			return {
				args,
				sliderValue
			};
		},
		template: `
			<div style="display:flex; flex-direction: column;">
				<slider
					themeColor="primary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="secondary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="tertiary"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="success"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="warning"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="error"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
				<slider
					themeColor="info"
					:min="args.min"
					:max="args.max"
					:step="args.step"
					:initValue="args.initValue"
					:unit="args.unit"
					:isDisabled="args.isDisabled"
					v-model="sliderValue"
				></slider>
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