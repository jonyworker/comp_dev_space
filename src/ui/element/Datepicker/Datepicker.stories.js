import Datepicker from "./Datepicker.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Datepicker",
	component: Datepicker,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "設定 Datepicker 的標題文字",
			control: { type: "text" },
		},
		placeholder: {
			description: "設定 Datepicker 的輸入提示文字，指引用戶輸入日期",
			control: { type: "text" },
		},
		size: {
			description: "選擇 Datepicker 的大小",
			control: { type: "select" },
			options: ['small', 'medium', 'large'],
		},
		language: {
			description: "設定 Datepicker 月曆的語言 (需重整頁面)",
			control: { type: "select" },
			options: ['en', 'zh-TW'],
		},
		range: {
			description: "啟用範圍選擇功能，允許選擇起始日期和結束日期",
			control: { type: "boolean" },
		},
		rangeStartLabel: {
			description: "範圍選擇的起始日期標題文字",
			control: { type: "text" },
		},
		rangeStartPlaceholder: {
			description: "範圍選擇的起始日期輸入提示文字",
			control: { type: "text" },
		},
		rangeEndLabel: {
			description: "範圍選擇的結束日期標題文字",
			control: { type: "text" },
		},
		rangeEndPlaceholder: {
			description: "範圍選擇的結束日期輸入提示文字",
			control: { type: "text" },
		},

	},
	parameters: {
		// 自動文件
		docs: {
			title: "Datepicker",
			description: {
				component: "Datepicker 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Datepicker 單選樣式 ====//
export const DatepickerSingle = {
	name: "Datepicker 單選樣式",
	args: {
		label: "預約剪髮日期",
		placeholder: "請輸入日期",
		size: "large",
		language:"zh-TW",
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
			exclude: ['range', 'rangeStartLabel', 'rangeStartPlaceholder', 'rangeEndLabel', 'rangeEndPlaceholder' ],
		},
	},
};

//==== Datepicker 範圍樣式 ====//
export const DatepickerRange = {
	name: "Datepicker 範圍樣式",

	args: {
		rangeStartLabel: '入住日期',
		rangeStartPlaceholder: '請輸入入住時間',
		rangeEndLabel: '退房日期',
		rangeEndPlaceholder: '請輸入退房時間',
		size: "large",
		language:"zh-TW",
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
				:range="true"
				:rangeStartLabel="args.rangeStartLabel"
				:rangeStartPlaceholder="args.rangeStartPlaceholder"
				:rangeEndLabel="args.rangeEndLabel"
				:rangeEndPlaceholder="args.rangeEndPlaceholder"
				:size="args.size"
				:language="args.language"
			></Datepicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['label', 'placeholder'],
		},
	},
};

//==== Datepicker 日曆語言 ====//
export const DatepickerLanguage = {
	name: "Datepicker 日曆語言",
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
					placeholder="Select Pickup Date"
					:size="args.size"
					language="en"
				></Datepicker>

				<Datepicker
					label="取貨時間(繁體中文)"
					placeholder="選擇取貨日期"
					:size="args.size"
					language="zh-TW"
				></Datepicker>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['size'],
		},
	},
};
