import Radio from "./Radio.vue";
import { ref } from "vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}'
        isDisabled: '${item.isDisabled}'
    }`).join(',\n    ')}
  ]`;
}

export default {
	title: "Component/Radio",
	component: Radio,
	tags: ["autodocs"],
	argTypes: {
		// themeColor: {
		// 	description: "主題顏色",
		// 	control: { type: "select" },
		// 	options: [
		// 		"primary",
		// 		"secondary",
		// 		"neutral",
		// 		"info",
		// 		"success",
		// 		"warning",
		// 		"error",
		// 	],
		// 	table: {
		// 		type: {
		// 			summary: "primary | secondary | neutral | info | success | warning | error"
		// 		}
		// 	}
		// },
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: "{ label: string; value: string; isDisabled: boolean; }[]",
				}
			}
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
		initValue: {
			description: "預設值",
			control: { type: "text" },
		},
		size: {
			description: "尺寸",
			control: { type: "select" },
			options: ["small", "medium", "large"],
			table: {
				type: {
					summary: "small | medium | large "
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
		// themeColor: 'primary',
		dataSource: [
			{
				"label": "Option1",
				"value": "option1",
				"isDisabled": false
			},
			{
				"label": "Option2",
				"value": "option2",
				"isDisabled": false
			},
			{
				"label": "Option3",
				"value": "option3",
				"isDisabled": true
			}
		],
		direction: "row",
		initValue: "option1",
		size: "medium",
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
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
				:size="args.size"
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
						`  :dataSource="${dataSourceString}"`,
						`  direction="${args.direction}"`,
						`  initValue="${args.initValue}"`,
						`  size="${args.size}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 直向排列 ====//
export const RadioVertical = {
	name: "直向排列",
	args: {
		// themeColor: 'primary',
		dataSource: [
			{
				"label": "Option1",
				"value": "option1",
				"isDisabled": false
			},
			{
				"label": "Option2",
				"value": "option2",
				"isDisabled": false
			},
			{
				"label": "Option3",
				"value": "option3",
				"isDisabled": true
			}
		],
		direction: "column",
		initValue: "option1",
		size: "medium",
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
                :dataSource="args.dataSource"
                :direction="args.direction"
                :initValue="args.initValue"
				:size="args.size"
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
						`  :dataSource="${dataSourceString}"`,
						`  direction="${args.direction}"`,
						`  initValue="${args.initValue}"`,
						`  size="${args.size}"`,
						`  className="${args.className}"`,
						`  v-model="modelValue"`,
						'></Radio>',
					].join('\n').trim();
				}
			}
		}
	},
};

// // ==== 主題色彩 ==== //
// export const RadioColorDefault = {
// 	name: "主題色彩",
// 	args: {
// 		// themeColor: '',
// 		dataSource: [
// 			{ label: "Option1", value: "option1", isDisabled: false },
// 			{ label: "Option2", value: "option2", isDisabled: false },
// 			{ label: "Option3", value: "option3", isDisabled: false },
// 		],
// 		initValue: "option1",
// 		direction: "row",
// 		className: "",
// 	},
// 	render: (args) => ({
// 		components: { Radio },
// 		setup() {
// 			const modelValue = ref("");
// 			return {
// 				args,
// 				modelValue,
// 			};
// 		},
// 		template: `
// 			<div style="display:flex; flex-direction:column; gap: 16px">
// 				<Radio
// 					themeColor="primary"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="secondary"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="neutral"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="info"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="success"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="warning"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
// 				<Radio
// 					themeColor="error"
// 					:dataSource="args.dataSource"
// 					:initValue="args.initValue"
// 					:direction="args.direction"
// 					:className="args.className"
// 					v-model="modelValue">
// 				</Radio>
//
// 			</div>
// 		`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			expanded: true,
// 			exclude: ['themeColor'],
// 		},
// 		docs: {
// 			source: {
// 				transform: (src, storyContext) => {
// 					const { args } = storyContext;
// 					const dataSourceString = formatDataSource(args.dataSource);
// 					return [
// 						'<Radio',
// 						`  themeColor="primary"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="secondary"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="neutral"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="info"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="success"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="warning"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 						'<Radio',
// 						`  themeColor="error"`,
// 						`  :dataSource="${dataSourceString}"`,
// 						`  :initValue="${args.initValue}"`,
// 						`  direction="${args.direction}"`,
// 						`  className="${args.className}"`,
// 						`  v-model="modelValue"`,
// 						'></Radio>',
// 					].join('\n').trim();
// 				}
// 			}
// 		}
// 	},
// };