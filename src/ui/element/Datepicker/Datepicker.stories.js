import Datepicker from "./Datepicker.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Datepicker",
	component: Datepicker,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		rangeStartLabel: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		rangeEndLabel: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		placeholder: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		rangeStartPlaceholder: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		rangeEndPlaceholder: {
			description: "Checkbox選項文字",
			control: { type: "text" },
		},
		size: {
			description: "Checkbox群組方向",
			control: { type: "select" },
			options: ['small', 'medium', 'large'],
		},
		language: {
			description: "Checkbox群組方向",
			control: { type: "select" },
			options: ['en', 'zh-TW'],
		},
		range: {
			description: "Checkbox選項值",
			control: { type: "boolean" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Datepicker",
			description: {
				component: "Datepicker組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Datepicker 單選日期 ====//
export const DatepickerSingle = {
	name: "單選樣式",
	args: {
		label: "預約剪髮日期",
		placeholder: "請輸入日期",
		size: "large",
		language:"zh-TW"
	},
	render: (args) => ({
		components: { Datepicker },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Datepicker
				:label="args.label"
				:placeholder="args.placeholder"
				:size="args.size"
				:language="args.language"
			></Datepicker>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Datepicker 日期區間 ====//
export const DatepickerRange = {
	name: "時間區間樣式",
	args: {
		rangeStartLabel: "入住日期",
		rangeEndLabel: "退房日期",
		size: "large",
		language:"zh-TW"
	},
	render: (args) => ({
		components: { Datepicker },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Datepicker
				:rangeStartLabel="args.rangeStartLabel"
				:rangeEndLabel="args.rangeEndLabel"
				:size="args.size"
				:language="args.language"
				range
			></Datepicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Datepicker 日曆語言 ====//
export const DatepickerLanguage = {
	name: "日曆語言",
	args: {
		size: "large",
	},
	render: (args) => ({
		components: { Datepicker },
		setup() {
			return {
				args,
			};
		},
		template: `
			
			<div style="display:flex; gap: 8px;">
				<Datepicker
					label="Pickup Date(English)"
					placeholder="pickup time"
					:size="args.size"
					language="en"
				></Datepicker>

				<Datepicker
					label="取貨時間(Traditional Chinese)"
					placeholder="選擇取貨時間"
					:size="args.size"
					language="zh-TW"
				></Datepicker>
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
