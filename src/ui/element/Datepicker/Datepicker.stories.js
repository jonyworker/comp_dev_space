import Datepicker from "./Datepicker.vue";

export default {
	title: "Component/Datepicker",
	component: Datepicker,
	tags: ["autodocs"],
	argTypes: {
		label: {
			description: "標題",
			control: { type: "text" },
		},
		placeholder: {
			description: "輸入提示",
			control: { type: "text" },
		},
		size: {
			description: "尺寸",
			control: { type: "select" },
			options: ["small", "medium", "large"],
			table: {
				type: {
					summary: "small | medium | large"
				}
			}
		},
		language: {
			description: "語系",
			control: {
				type: "select",
				labels: {
					"": "系統語系",
					en: "en",
					"zh-TW": "zh-TW",
					"fr": "fr",
					"ja": "ja",
				}
			},
			options: ["", "en", "zh-TW", "ja"],
			table: {
				type: {
					summary: "en | zh-TW | ja",
				}
			}
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
		className: {
			description: "客製化樣式",
			default: "",
		}
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
};

//==== 預設項目 ====//
export const DatepickerSingle = {
	name: "預設項目",
	args: {
		label: "Label",
		placeholder: "YYYY-MM-DD",
		size: "large",
		language:"",
		className:""
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
				:className="args.className"
			></Datepicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['range', 'rangeStartLabel', 'rangeStartPlaceholder', 'rangeEndLabel', 'rangeEndPlaceholder' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Datepicker',
						`  label="${args.label}"`,
						`  placeholder="${args.placeholder}"`,
						`  size="${args.size}"`,
						`  language="${args.language}"`,
						`  className="${args.className}"`,
						'></Datepicker>',
					].join('\n').trim();

				}
			}
		}
	},
};

//==== 範圍樣式 ====//
export const DatepickerRange = {
	name: "範圍樣式",
	args: {
		rangeStartLabel: '入住日期',
		rangeStartPlaceholder: '請輸入入住時間',
		rangeEndLabel: '退房日期',
		rangeEndPlaceholder: '請輸入退房時間',
		size: "large",
		language:"zh-TW",
		className:""
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
				:className="args.className"
			></Datepicker>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['label', 'placeholder'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Datepicker',
						`  :range="true"`,
						`  rangeStartLabel="${args.rangeStartLabel}"`,
						`  rangeStartPlaceholder="${args.rangeStartPlaceholder}"`,
						`  rangeEndLabel="${args.rangeEndLabel}"`,
						`  rangeEndPlaceholder="${args.rangeEndPlaceholder}"`,
						`  size="${args.size}"`,
						`  language="${args.language}"`,
						`  className="${args.className}"`,
						'></Datepicker>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 日曆語言 ====//
export const DatepickerLanguage = {
	name: "日曆語言",
	args: {
		size: "large",
		className:""
	},
	render: (args) => ({
		components: { Datepicker },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; flex-direction: column; gap: 24px;">
				<Datepicker
					label="Pickup Date(English)"
					placeholder="Select Pickup Date"
					:size="args.size"
					language="en"
					:className="args.className"
				></Datepicker>

				<Datepicker
					label="取貨時間(繁體中文)"
					placeholder="選擇取貨日期"
					:size="args.size"
					language="zh-TW"
					:className="args.className"
				></Datepicker>

				<Datepicker
					label="受け取り日(日本語)"
					placeholder="受け取り日を選択ください"
					:size="args.size"
					language="ja"
					:className="args.className"
				></Datepicker>
			</div>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			include: ['size','className'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<Datepicker',
						`  label="Pickup Date(English)"`,
						`  placeholder="Select Pickup Date"`,
						`  size="${args.size}"`,
						`  language="en"`,
						`  className="${args.className}"`,
						'></Datepicker>',
						'<Datepicker',
						`  label="取貨時間(繁體中文)"`,
						`  placeholder="選擇取貨日期"`,
						`  size="${args.size}"`,
						`  language="zh-TW"`,
						`  className="${args.className}"`,
						'></Datepicker>',
					].join('\n').trim();
				}
			}
		}
	},
};