import Accordion from "./Accordion.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	argTypes: {
		//以下參數不刪
		themeColor: {
			description: "主題顏色",
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
		},
		customClass: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		label: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		value: {
			description: "Checkbox選項值",
			control: { type: "Object" },
		},
		name: {
			description: "Checkbox表單用name",
			control: { type: "text" },
		},
		modelValue: {
			description: "Checkbox的綁定值",
			control: { type: "Object" },
		},
		direction: {
			description: "Checkbox群組方向",
			control: { type: "select" },
			options: ["row", "column"],
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "收合式選單",
			description: {
				component: "收合式選單組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Accordion 基礎樣式 ====//
export const AccordionDefault = {
	name: "基礎樣式",
	args: {
		data: ref([
			{
				title: "Apples",
				expanded: false,
				contents: [
					"Apples are a fine fruit often associated with good health, and fewer doctor's appointments.",
					"Example: An apple a day keeps the doctor away.",
				],
			},

		])
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :data="args.data"
                
            ></Accordion>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Accordion Group ====//
export const AccordionGroup = {
	name: "多個 Accordion",
	args: {
		data: ref([
			{
				title: "Apples",
				expanded: false,
				contents: [
					"Apples are a fine fruit often associated with good health, and fewer doctor's appointments.",
					"Example: An apple a day keeps the doctor away.",
				],
			},
			{
				title: "Lemons",
				expanded: false,
				contents: [
					"Lemons are good with almost anything, yet are often have a negative connotation when used in conversation.",
					"Example: The bread from the french bakery is normally very good, but the one we lksdjfkjs" +
					" s;ldfs; s;ldfsd;f; sdlfsdldo dodoep ep epope bought today was a lemon.",
				],
			},
			{
				title: "Kiwis",
				expanded: false,
				contents: ["Kiwis are a fun, under-appreciated fruit.",
					"Lemons are good with almost anything, yet are often have a negative conng, yet are often have a negativotation when used in conversation.",
					"Example: The bread from the french bakeg, yet are often hg, yet are often have a negativave a negativ normally very good, but the one we bought today was a lemon.",
					"Lemons are good with almost anything, yet are g, yet are often have a negativoften have a negative connotation when used in conversation.",
					"Example: The bread from the french bakery is ng, yet are often have a negativormally very goog, yet are often have a negativd, but the one we bought today was a lemon.",
					"Lemons are good with almost anything,g, yet are often have a negativ yet are often have a negative connotation when used in conversation.",
					"Example: The bread from the french bakery is normally very good, but the one we bought today was a lemon.",],
			},
		])
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :data="args.data"
                
            ></Accordion>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};