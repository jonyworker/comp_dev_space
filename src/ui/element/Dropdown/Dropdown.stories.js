import Dropdown from "@/ui/element/Dropdown/Dropdown.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Dropdown',
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		options: {
			description: "資料陣列",
			control: { type: "object" },
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
			options: ['small', 'medium', 'large']
		},
		maxHeight: {
			description: "最大高度，自動顯示卷軸 (px)",
			control: { type: 'text' },
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

//==== 主要項目 ====//
export const DropdownDefault = {
	name: '主要項目',
	args: {
		options: [
			{
				"label": "選項一",
				"value": "option1",
			},
			{
				"label": "選項二",
				"value": "option2",
			},
			{
				"label": "選項三",
				"value": "option3",
			}
		],
		label: '下拉選單標題',
		placeholder:'請選擇項目',
		size: 'medium',
		maxHeight: '',
		className: ''
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
				:options="args.options"
				:label="args.label"
				:placeholder="args.placeholder"
				:size="args.size"
				:maxHeight="args.maxHeight"
				:isDisabled="args.isDisabled"
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
	},
};


