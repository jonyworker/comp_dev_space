import Radio from "./Radio.vue";
import { ref } from "vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Radio",
	component: Radio,
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


//==== 預設項目 ====//
export const RadioDefaultStory = {
	name: "預設項目",
	args: {
		inputId: "meals01",
		label: "帕南薩馬來椰漿飯",
		value: "Pak Nasser's Nasi Lemak",
		name: "Meals",
		themeColor: 'primary',
	},
	render: (args) => ({
		components: { Radio },
		setup() {
			const isRadioPicked = ref("");
			return {
				args,
				isRadioPicked,
			};
		},
		template: `
            <div style="display:flex; gap: 8px">
                <Radio  
                    :inputId="args.inputId"
                    :label="args.label"
                    :value="args.value"
                    :name="args.name"
                    :themeColor="args.themeColor"
                    v-model="isRadioPicked">
                </Radio>
            </div>
            <p> Meal You Have Reserved: {{ isRadioPicked }} </p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			expanded: true,
			// include: ['themeColor', 'label', 'value', 'name' ],
			docs: {
				source: {
					transform: (src, storyContext) => {
						const { args } = storyContext;
						return [
							'<Radio',
							`  inputId="${args.inputId}"`,
							`  label="${args.label}"`,
							`  value="${args.value}"`,
							`  name="${args.name}"`,
							`  themeColor="${args.themeColor}"`,
							'  v-model="isRadioPicked"',
							'/>'
						].join('\n').trim();
					}
				}
			}
		},
	},
};

//==== 主題色彩 ====//
export const RadioColorDefault = {
	name: "主題色彩",
	args: {
		data:[
			{
				inputId: "meals01",
				name: "Meals",
				value: "Pak Nasser's Nasi Lemak",
				label: "帕南薩馬來椰漿飯",
			},
			{
				inputId: "meals02",
				name: "Meals",
				value: "Hyderabadi Vegetable Biryani",
				label: "海德拉巴素食印度香飯",
			},
			{
				inputId: "meals03",
				name: "Meals",
				value: "Uncle Chin's Chicken Rice",
				label: "秦叔叔海南雞飯",
			},
		],
		themeColor: 'primary',
	},
	render: (args) => ({
		components: { Radio },
		setup() {
			const isRadioPicked = ref("Pak Nasser's Nasi Lemak",);
			return {
				args,
				isRadioPicked,
			};
		},
		template: `
			<div style="display:flex; flex-direction:column; gap: 12px">
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="primary"
					        :isChecked="isRadioPicked"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="secondary"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="tertiary"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="success"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="warning"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="error"
					        v-model="isRadioPicked">
					</Radio>
				</div>
				<div style="display:flex; gap: 8px">
					<Radio  v-for="(item) in args.data"
					        :inputId="item.inputId"
					        :label="item.label"
					        :value="item.value"
					        :name="item.name"
					        themeColor="info"
					        v-model="isRadioPicked">
					</Radio>
				</div>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			expanded: true,
			exclude: ['themeColor'],
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