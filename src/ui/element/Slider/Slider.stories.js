import {ref} from "vue";
import Slider from "./Slider.vue";
import Input from "@/ui/element/Input/Input.vue";
import {DividerColors} from "@/ui/element/Divider/Divider.stories.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Input},
	title: "Design System/Slider",
	component: Slider,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
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
		sliderMinVal: {
			description: "Slider起始值",
			control: { type: "number" },
		},
		sliderMaxVal: {
			description: "Slider結束值",
			control: { type: "number" },
		},
		thumbSize: {
			description: "Slider滑塊大小",
			control: { type: "number" },
		},
		range: {
			description: "勾選啟動 Range Slider",
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
export const DefaultSlider = {
	name: "基礎樣式",
	args: {
		sliderMinVal: "0",
		sliderMaxVal: "5000",
		themeColor: "primary",
		thumbSize: "20",
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
	            :themeColor="args.themeColor"
	            :thumbSize="args.thumbSize"
	            v-model="currentSliderValue"
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

//==== Slider 範圍樣式 ====//
export const RangeSlider = {
	name: "範圍樣式",
	args: {
		sliderMinVal: "0",
		sliderMaxVal: "5000",
		themeColor: "primary",
		thumbSize: "20",
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
	            :themeColor="args.themeColor"
	            :thumbSize="args.thumbSize"
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

//==== Slider 基礎樣式結合 v-model ====//
export const DefaultSliderWithVModel = {
	name: "基礎樣式雙向綁定",
	args: {
		sliderMinVal: "0",
		sliderMaxVal: "5000",
		themeColor: "primary",
		thumbSize: "20",
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
	            :themeColor="args.themeColor"
	            :thumbSize="args.thumbSize"
	            v-model="currentSliderValue"
            ></Slider>
            <Input type="number" v-model="currentSliderValue"/>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Slider 範圍樣式結合 v-model  ====//
export const RangeSliderWithVModel = {
	name: "範圍樣式雙向綁定",
	args: {
		sliderMinVal: "0",
		sliderMaxVal: "5000",
		themeColor: "primary",
		thumbSize: "20",
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
	            :themeColor="args.themeColor"
	            :thumbSize="args.thumbSize"
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
	name: "Slider顏色",
	args: {
		sliderMinVal: "0",
		sliderMaxVal: "5000",
		thumbSize: "20",
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
		},
	},
};