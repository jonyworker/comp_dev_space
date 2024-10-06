import {ref} from "vue";
import Slider from "./Slider.vue";
import Input from "@/ui/element/Input/Input.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Input},
	title: "Design System/Slider",
	component: Slider,
	tags: ["autodocs"],
	argTypes: {
		sliderMinVal: {
			description: "設定 Slider 的最小值，控制可滑動的起始範圍",
			control: { type: "number" },
		},
		sliderMaxVal: {
			description: "設定 Slider 的最大值，控制可滑動的結束範圍",
			control: { type: "number" },
		},
		thumbSize: {
			description: "設定 Slider 滑塊的大小，以像素為單位",
			control: { type: "range",
				min: 20,
				max: 30,
				step: 1  },
		},
		themeColor: {
			description: "選擇 Slider 的主題顏色",
			control: { type: "select" },
			options: [
				"default",
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
		},
		range: {
			description: "勾選以啟動 Range Slider，允許選擇一個範圍的值",
			control: { type: "boolean" },
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
export const SliderDefault = {
	name: "Slider 基礎樣式",
	args: {
		sliderMinVal: 0,
		sliderMaxVal: 5000,
		thumbSize: 20,
		themeColor: "primary",
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const currentSliderValue = ref(250);
			return {
				args,
				currentSliderValue
			};
		},
		template: `
            <Slider
	            :sliderMinVal="args.sliderMinVal"
	            :sliderMaxVal="args.sliderMaxVal"
	            :thumbSize="args.thumbSize"
	            :themeColor="args.themeColor"
	            v-model="currentSliderValue"
            ></Slider>
            {{currentSliderValue}}
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['range']
		},
	},
};

//==== Slider 範圍樣式 ====//
export const RangeSlider = {
	name: "Slider 範圍樣式",
	args: {
		sliderMinVal: 0,
		sliderMaxVal: 5000,
		thumbSize: 20,
		themeColor: "primary",
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const currentSliderMinValue  = ref(114);
			const currentSliderMaxValue  = ref(514);
			return {
				args,
				currentSliderMinValue,
				currentSliderMaxValue
			};
		},
		template: `
            <Slider
	            :sliderMinVal="args.sliderMinVal"
	            :sliderMaxVal="args.sliderMaxVal"
	            :thumbSize="args.thumbSize"
	            :themeColor="args.themeColor"
	            v-model:currentSliderMinValue="currentSliderMinValue"
	            v-model:currentSliderMaxValue="currentSliderMaxValue"
	            range
            ></Slider>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Slider 基礎結合輸入框 ====//
export const DefaultSliderWithInput = {
	name: "Slider 基礎結合輸入框",
	args: {
		sliderMinVal: 0,
		sliderMaxVal: 5000,
		thumbSize: 20,
		themeColor: "primary",
	},
	render: (args) => ({
		components: { Slider, Input },
		setup() {
			const currentSliderValue = ref(250);
			return {
				args,
				currentSliderValue
			};
		},
		template: `
            <Slider
	            :sliderMinVal="args.sliderMinVal"
	            :sliderMaxVal="args.sliderMaxVal"
	            :thumbSize="args.thumbSize"
	            :themeColor="args.themeColor"
	            v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['range']
		},
	},
};

//==== Slider 範圍樣式結合輸入框  ====//
export const RangeSliderWithInput = {
	name: "Slider 範圍樣式結合輸入框",
	args: {
		sliderMinVal: 0,
		sliderMaxVal: 5000,
		thumbSize: 20,
		themeColor: "primary",
	},
	render: (args) => ({
		components: { Slider, Input },
		setup() {
			const currentSliderMinValue  = ref(114);
			const currentSliderMaxValue  = ref(514);
			return {
				args,
				currentSliderMinValue,
				currentSliderMaxValue
			};
		},
		template: `
            <Slider
	            :sliderMinVal="args.sliderMinVal"
	            :sliderMaxVal="args.sliderMaxVal"
	            :thumbSize="args.thumbSize"
	            :themeColor="args.themeColor"
	            v-model:currentSliderMinValue="currentSliderMinValue"
	            v-model:currentSliderMaxValue="currentSliderMaxValue"
	            range
            ></Slider>
            <div style="display:flex; gap: 16px;">
	            <Input label="起始數值" type="number" v-model="currentSliderMinValue" style="flex-grow: 1"/>
	            <Input label="結束數值" type="number" v-model="currentSliderMaxValue" style="flex-grow: 1"/>
            </div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Slider 顏色 ====//
export const SliderColors = {
	name: "Slider 顏色",
	args: {
		sliderMinVal: 0,
		sliderMaxVal: 5000,
		thumbSize: 20,
		themeColor: "primary",
	},
	render: (args) => ({
		components: { Slider },
		setup() {
			const currentSliderValue = ref(250);
			return {
				args,
				currentSliderValue
			};
		},
		template: `
			<div style="display:flex; flex-direction: column;">
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="primary"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="secondary"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="tertiary"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="success"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="warning"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="error"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
				<Slider
					:sliderMinVal="args.sliderMinVal"
					:sliderMaxVal="args.sliderMaxVal"
					themeColor="info"
					:thumbSize="args.thumbSize"
					v-model="currentSliderValue"
				></Slider>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['themeColor'],
		},
	},
};