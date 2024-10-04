import Title from "./Title.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Title",
	component: Title,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: { type: "select" },
			options: [
				"none",
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
			mapping: {
				'none': '',
			},
		},
		content: {
			description: '標題文字',
			control: { type: 'text' },
		},
		level: {
			description: "標題文字大小",
			control: { type: "select" },
			options: ['0', '1', '2', '3', '4', '5', '6'],
		},
		customClass: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Title",
			description: {
				component: "Title組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Heading 標題樣式 ====//
export const HeadingDefault = {
	name: "標題樣式",
	args: {
		content: "標題",
		themeColor: "",
		level: 1,
	},
	render: (args) => ({
		components: { Title },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Title
                :themeColor="args.themeColor"
                :level="args.level"
            >{{ args.content }}</Title>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['default']
		},
	},
};

