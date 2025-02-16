import DatePicker from '@/ui/element/DatePicker/DatePicker.vue'
import Input from "@/ui/element/Input/Input.vue";

export default {
	title: "Component/Date-Picker",
	component: DatePicker,
	tags: ["autodocs"],
	argTypes: {
		format: {
			description: "日期格式",
			control: { type: "text" },
		},
		isRange: {
			description: "日期區間",
			control: { type: "boolean" },
		},
		placeholder: {
			description: "提示文字(請注意與format格式相符)",
			control: { type: "text" },
		},
		className: {
			description: "客製化樣式",
			default: "",
		},
		modelValue: {
			description: "日期",
			// control: {type: "text" },
			table: {
				type: { summary: 'string | string[]' },
				category: 'v-model',
				defaultValue: { summary: '""' },
			}
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "DatePicker",
			description: {
				component: "日期組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const DatePickerDefaultStory = {
	name: "預設項目",
	args: {
		format: "yyyy/mm/dd",
		isRange: false,
		placeholder: "YYYY/MM/DD",
		className: "",
		modelValue: "",
	},
	argTypes: {
		modelValue: {
			description: "日期",
			control: { type: "text" },
			table: {
				type: { summary: "string | string[]" },
				category: "v-model",
			},
		},
	},
	render: (args) => ({
		components: { DatePicker, Input },
		setup() {
			return {
				args,
			};
		},
		template: `
			<DatePicker
				:format="args.format"
				:isRange="args.isRange"
				:placeholder="args.placeholder"
				:className="args.className"
				v-model="args.modelValue"
			></DatePicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// exclude: []
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<DatePicker`,
						`  :format="${args.format}"`,
						`  :isRange="${args.isRange}"`,
						`  :placeholder="${args.placeholder}"`,
						`  :className="${args.className}"`,
						`  v-model="modelValue"`,
						`></DatePicker>`,
					].join("\n").trim();
				}
			}
		}
	},
};

//==== 日期區間 ====//
export const DatepickerRange = {
	name: "日期區間",
	args: {
		format: "yyyy/mm/dd",
		isRange: true,
		className: "",
		modelValue: ["", ""]
	},
	argTypes: {
		modelValue: {
			description: "日期",
			control: { type: "array" },
			table: {
				type: { summary: "string[]" },
				category: "v-model",
			},
		},
	},
	render: (args) => ({
		components: { DatePicker, Input },
		setup() {
			return {
				args,
			};
		},
		template: `
			<DatePicker
				:format="args.format"
				:isRange="args.isRange"
				:className="args.className"
				v-model="args.modelValue"
			></DatePicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: [ 'className','modelValue' ],
			exclude:['isRange','placeholder'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<DatePicker`,
						`  :format="${args.format}"`,
						`  :isRange="${args.isRange}"`,
						`  :className="${args.className}"`,
						`  v-model="modelValue"`,
						`></DatePicker>`,
					].join("\n").trim();
				}
			}
		}
	},
};
