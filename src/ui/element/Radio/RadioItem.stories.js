import RadioItem from "./RadioItem.vue";
import { ref } from "vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/RadioItem",
	component: RadioItem,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "選項文字",
			control: { type: "text" },
		},
		value: {
			description: "選項值",
			control: { type: "text" },
		},
		name: {
			description: "用於分組的名稱",
			control: { type: "text" },
		},
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
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		modelValue: {
			description: "與 Radio 綁定的值，表示當前選中的選項",
			control: { type: "Object" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Radio",
			description: {
				component: "Radio 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 主要項目 ====//
export const RadioDefault = {
	name: "主要項目",
	args: {
		label: "Season 1",
		value: "s1",
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
                :name="args.name"
                :label="args.label"
                :themeColor="args.themeColor"
                v-model="isRadioPicked"
            ></RadioItem>
            <p> modelValue: {{ isRadioPicked }} </p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['modelValue'],
		},
	},
};





//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/Radio",
// 	component: Radio,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		label: {
// 			description: "Radio 選項文字",
// 			control: { type: "text" },
// 		},
// 		value: {
// 			description: "Radio 的選項值 (表單)",
// 			control: { type: "text" },
// 		},
// 		name: {
// 			description: "用於分組的名稱 (表單)",
// 			control: { type: "text" },
// 		},
// 		themeColor: {
// 			description: "Radio 主題顏色",
// 			control: { type: "select" },
// 			options: [
// 				"primary",
// 				"secondary",
// 				"tertiary",
// 				"success",
// 				"warning",
// 				"error",
// 				"info",
// 			],
// 		},
// 		modelValue: {
// 			description: "與 Radio 綁定的值，表示當前選中的選項",
// 			control: { type: "Object" },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Radio",
// 			description: {
// 				component: "Radio 組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Radio 基礎樣式 ====//
// export const RadioDefault = {
// 	name: "Radio 基礎樣式",
// 	args: {
// 		label: "Season 1",
// 		value: "s1",
// 		name: "seasons",
// 		themeColor: "primary",
// 	},
// 	render: (args) => ({
// 		components: { Radio },
// 		setup() {
// 			// Create a ref for modelValue to be used with v-model
// 			const isRadioPicked = ref("");
// 			return {
// 				args,
// 				isRadioPicked
// 			};
// 		},
// 		template: `
//             <Radio
//                 :value="args.value"
//                 :name="args.name"
//                 :label="args.label"
//                 :themeColor="args.themeColor"
//                 v-model="isRadioPicked"
//             ></Radio>
//             <p> modelValue: {{ isRadioPicked }} </p>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			exclude: ['modelValue'],
// 		},
// 	},
// };

//--- JONY VERSION END ---//