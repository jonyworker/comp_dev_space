import DatePicker from '@/ui/element/DatePicker/DatePicker.vue'
import Input from "@/ui/element/Input/Input.vue";
import {ref} from "vue";

export default {
	title: "Component/Date-Picker",
	component: DatePicker,
	tags: ["autodocs"],
	argTypes: {
		initValue: {
			description: "日期",
			control: { type: "text" },
		},
		isRange: {
			description: "日期區間",
			control: { type: "boolean" },
		},
		placeholder: {
			description: "提示文字",
			control: { type: "text" },
		},
		options: {
			description: "選項",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ format: string | todayHighlight: boolean | autohide: boolean; }[]',
				}
			}
		},
		className: {
			description: "客製化樣式",
			default: "",
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
export const DatepickerSingle = {
	name: "預設項目",
	args: {
		initValue: "2012-12-21",
		isRange: false,
		placeholder: "YYYY/MM/DD",
		options: {
			format: 'yyyy-mm-dd',
			todayHighlight: true,
		},
		className:""
	},
	render: (args) => ({
		components: { DatePicker, Input },
		setup() {
			const singleDate = ref("");
			return {
				args,
				singleDate
			};
		},
		template: `
			{{singleDate}}
			<DatePicker
				:initValue="args.initValue"
				:isRange="args.isRange"
				:placeholder="args.placeholder"
				:options="args.options"
				:className="args.className"
				v-model="singleDate"
			></DatePicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['initValue', 'isRange', 'placeholder', 'options', 'className' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<DatePicker`,
						`  :initValue="${args.initValue}"`,
						`  :isRange="${args.isRange}"`,
						`  :placeholder="${args.placeholder}"`,
						`  :options=" {
		format: 'yyyy-mm-dd',
		todayHighlight: true,
		autohide: true
	},"`,
						`  :className="${args.className}"`,
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
		initValue:['', ''],
		isRange: true,
		placeholder: "YYYY/MM/DD",
		options: {
			format: 'yyyy-mm-dd',
			todayHighlight: true,
		},
		className:""
	},
	render: (args) => ({
		components: { DatePicker, Input },
		setup() {
			const rangeDate = ref("");
			return {
				args,
				rangeDate
			};
		},
		template: `
			<DatePicker
				:initValue="args.initValue"
				:isRange="args.isRange"
				:placeholder="args.placeholder"
				:options="args.options"
				:className="args.className"
				v-model="rangeDate"
			></DatePicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['isRange', 'placeholder', 'options', 'className' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<DatePicker`,
						`  :isRange="${args.isRange}"`,
						`  :placeholder="${args.placeholder}"`,
						`  :options=" {
		format: 'yyyy-mm-dd',
		todayHighlight: true,
		autohide: true
	},"`,
						`  :className="${args.className}"`,
						`></DatePicker>`,
					].join("\n").trim();
				}
			}
		}
	},
};