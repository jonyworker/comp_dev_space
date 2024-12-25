import DatePicker from '@/ui/element/DatePicker/DatePicker.vue'
import Input from "@/ui/element/Input/Input.vue";

export default {
	title: "Component/Date-Picker",
	component: DatePicker,
	tags: ["autodocs"],
	argTypes: {
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
					summary: "{ id: string; label: string | Function; detail: string | Function; }[]",
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
				component: "DatePicker 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const DatepickerSingle = {
	name: "預設項目",
	args: {
		isRange: false,
		placeholder: "YYYY/MM/DD",
		options: {
			format: 'yyyy-mm-dd',
			todayHighlight: true,
			autohide: true
		},
		className:""
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
				:isRange="args.isRange"
				:placeholder="args.placeholder"
				:options="args.options"
				:className="args.className"
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

//==== 日期區間 ====//
export const DatepickerRange = {
	name: "日期區間",
	args: {
		isRange: true,
		placeholder: "YYYY/MM/DD",
		options: {
			format: 'yyyy-mm-dd',
			todayHighlight: true,
			autohide: true
		},
		className:""
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
				:isRange="args.isRange"
				:placeholder="args.placeholder"
				:options="args.options"
				:className="args.className"
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