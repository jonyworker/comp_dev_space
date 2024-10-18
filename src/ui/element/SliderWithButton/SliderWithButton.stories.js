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
			description: '設定位於前方按鈕的 icon',
			control: { type: "select" },
			options: ['None', 'increase', 'decrease'],
			mapping: {
				'None': '',
			},
		},
		suffix: {
			description: '設定位於後方按鈕的 icon',
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


//==== Slider 基礎樣式 ====//
export const SliderButton = {
	name: "Slider 基礎樣式",
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