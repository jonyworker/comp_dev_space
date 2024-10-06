import RadioItem from "./RadioItem.vue";
import { ref } from "vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Radio/子元件/RadioItem",
	component: RadioItem,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "RadioItem 選項文字",
			control: { type: "text" },
		},
		value: {
			description: "RadioItem 的選項值 (表單)",
			control: { type: "text" },
		},
		inputId: {
			description: "RadioItem 唯一 ID (表單)",
			control: { type: "text" },
		},
		name: {
			description: "用於分組的名稱 (表單)",
			control: { type: "text" },
		},
		themeColor: {
			description: "RadioItem 主題顏色",
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
		modelValue: {
			description: "與 RadioItem 綁定的值，表示當前選中的選項",
			control: { type: "Object" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "RadioItem",
			description: {
				component: "RadioItem 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== RadioItem 基礎樣式 ====//
export const RadioItemDefault = {
	name: "RadioItem 基礎樣式",
	args: {
		label: "Season 1",
		value: "s1",
		inputId: "s1",
		name: "seasons",
		themeColor: "primary",
	},
	render: (args) => ({
		components: { RadioItem },
		setup() {
			// Create a ref for modelValue to be used with v-model
			const isRadioPicked = ref("");
			return {
				args,
				isRadioPicked
			};
		},
		template: `
            <RadioItem
                :value="args.value"
                :inputId="args.inputId"
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></RadioItem>
            
<!--            model value{{isRadioPicked}}-->
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

