import Radio from "./Radio.vue";
import { ref } from "vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
        name: '${item.name}'
    }`).join(',\n    ')}
  ]`;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Radio",
	component: Radio,
	tags: ["autodocs"],
	argTypes: {
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
			table: {
				type: {
					summary: "primary | secondary | tertiary | success | warning | error | info"
				}
			}
		},
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ label: string; value: string; name: string; }[]",
				}
			}
		},
		initValue: {
			description: "預設值",
			control: { type: "text" },
		},
		direction: {
			description: "排列方向",
			control: { type: "select" },
			options: ["row", "column"],
			table: {
				type: {
					summary: "row | column"
				}
			}
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
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
};

//==== 預設項目 ====//
export const RadioDefaultStory = {
	name: "預設項目",
	args: {
		themeColor: 'primary',
		dataSource: [
			{ label: "選項 1", value: "option1", name: "group1" },
			{ label: "選項 2", value: "option2", name: "group1" },
			{ label: "選項 3", value: "option3", name: "group1" },
		],
		initValue: "option3",
		direction: "row",
		className: "",
	},
	render: (args) => ({
		components: { Radio },
		setup() {
			const modelValue = ref("");
			return {
				args,
				modelValue,
			};
		},
		template: `
            <Radio  
                :themeColor="args.themeColor"
                :dataSource="args.dataSource"
                :initValue="args.initValue"
                :direction="args.direction"
                :className="args.className"
                v-model="modelValue">
            </Radio>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			expanded: true,
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Radio',
						`  themeColor="${args.themeColor}"`,
						`  :dataSource="${dataSourceString}"`,
						`  initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
					].join('\n').trim();
				}
			}
		}
	},
};

// ==== 主題色彩 ==== //
export const RadioColorDefault = {
	name: "主題色彩",
	args: {
		// themeColor: '',
		dataSource: [
			{ label: "選項 1", value: "option1", name: "group1" },
			{ label: "選項 2", value: "option2", name: "group1" },
			{ label: "選項 3", value: "option3", name: "group1" },
		],
		initValue: "option1",
		direction: "row",
		className: "",
	},
	render: (args) => ({
		components: { Radio },
		setup() {
			const modelValue = ref("");
			return {
				args,
				modelValue,
			};
		},
		template: `
			<div style="display:flex; flex-direction:column; gap: 16px">
				<Radio
					themeColor="primary"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="secondary"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="tertiary"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="success"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="warning"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="error"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
				<Radio
					themeColor="info"
					:dataSource="args.dataSource"
					:initValue="args.initValue"
					:direction="args.direction"
					:className="args.className"
					v-model="modelValue">
				</Radio>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			expanded: true,
			exclude: ['themeColor'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Radio',
						`  themeColor="primary"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="secondary"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="tertiary"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="success"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="warning"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="error"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
						'<Radio',
						`  themeColor="info"`,
						`  :dataSource="${dataSourceString}"`,
						`  :initValue="${args.initValue}"`,
						`  direction="${args.direction}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
					].join('\n').trim();
				}
			}
		}
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