import SliderWithButton from "./SliderWithButton.vue";

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
			description: '設定位於按鈕前方的 icon',
			control: { type: "select" },
			options: ['None', 'increase', 'decrease'],
			mapping: {
				'None': '',
			},
		},
		suffix: {
			description: '設定位於按鈕前方的 icon',
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