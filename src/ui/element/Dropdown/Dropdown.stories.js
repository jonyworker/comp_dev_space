import Dropdown from "@/ui/element/Dropdown/Dropdown.vue";
function formatDataSource(dataSource) {
	return `[
    ${dataSource.map(item => `{
        label: '${item.label}',
        value: '${item.value}',
    }`).join(',\n    ')}
  ]`;
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Dropdown',
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		dataSource: {
			description: "資料來源",
			control: { type: "object" },
			table: {
				type: {
					summary: '{ label: string; value: string; }[]',
				}
			}
		},
		label: {
			description: '標題',
			control: { type: 'text' },
		},
		placeholder: {
			description: '輸入提示',
			control: { type: 'text' },
		},
		size: {
			description: '輸入框尺寸',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			table: {
				type: {
					summary: "small | medium | large",
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
			title: 'Dropdown',
			description: {
				component: 'Dropdown 組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const DropdownDefault = {
	name: '預設項目',
	args: {
		dataSource: [
			{
				"label": "Option1",
				"value": "option1",
			},
			{
				"label": "Option2",
				"value": "option2",
			},
			{
				"label": "Option3",
				"value": "option3",
			}
		],
		label: "Label",
		placeholder: "Placeholder...",
		size: "medium",
		className: ""
	},
	render: (args) => ({
		components: { Dropdown },
		setup() {
			// Create a ref for modelValue to be used with v-model
			return {
				args,
			};
		},
		template: `
			<Dropdown 
				:dataSource="args.dataSource"
				:label="args.label"
				:placeholder="args.placeholder"
				:size="args.size"
				:maxHeight="args.maxHeight"
				:className="args.className"
			>
			</Dropdown>
            `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['objectFit', 'src', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Dropdown',
						`  :datasource="${dataSourceString}"`,
						`  :label="${args.label}"`,
						`  :placeholder="${args.placeholder}"`,
						`  :size="${args.size}"`,
						`  :maxHeight="${args.maxHeight}"`,
						`  :className="${args.className}"`,
						'>',
						'</Dropdown>',
					].join('\n').trim();
				}
			}
		}
	},
};


