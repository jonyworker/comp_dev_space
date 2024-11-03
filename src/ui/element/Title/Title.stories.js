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
			description: '標題內容',
			control: { type: 'text' },
		},
		level: {
			description: "標題等級",
			control: { type: "select" },
			options: ['0', '1', '2', '3', '4', '5', '6'],
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Title",
			description: {
				component: "Title 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== 預設項目 ====//
export const HeadingDefault = {
	name: "預設項目",
	args: {
		content: "標題",
		themeColor: "",
		level: 1,
		className: "",
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
                :className="args.className"
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

//==== 標題大小 ====//
export const HeadingSizeDefault = {
	name: "標題大小",
	args: {
		content: "標題文字",
		themeColor: "",
		className: "",
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
                level="1"
                :className="args.className"
            >Level:1 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="2"
	            :className="args.className"
            >Level:2 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="3"
	            :className="args.className"
            >Level:3 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="4"
	            :className="args.className"
            >Level:4 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="5"
	            :className="args.className"
            >Level:5 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="6"
	            :className="args.className"
            >Level:6 {{ args.content }}</Title>
            <Title
	            :themeColor="args.themeColor"
	            level="0"
	            :className="args.className"
            >Level:0 {{ args.content }}</Title>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['default','level']
		},
	},
};

//==== 主題色彩 ====//
export const HeadingColorDefault = {
	name: "主題色彩",
	args: {
		content: "標題文字",
		level: 1,
		className: "",
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
                themeColor="primary"
                :level="args.level"
                :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="secondary"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="tertiary"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="success"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="warning"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="error"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
            <Title
	            themeColor="info"
	            :level="args.level"
	            :className="args.className"
            >{{ args.content }}</Title>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude:['default', 'themeColor'],
		},
	},
};



//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	title: "Design System/Title",
// 	component: Title,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		themeColor: {
// 			description: "主題顏色",
// 			control: { type: "select" },
// 			options: [
// 				"none",
// 				"primary",
// 				"secondary",
// 				"tertiary",
// 				"success",
// 				"warning",
// 				"error",
// 				"info",
// 			],
// 			mapping: {
// 				'none': '',
// 			},
// 		},
// 		content: {
// 			description: '標題文字',
// 			control: { type: 'text' },
// 		},
// 		level: {
// 			description: "標題文字大小",
// 			control: { type: "select" },
// 			options: ['0', '1', '2', '3', '4', '5', '6'],
// 		},
// 		customClass: {
// 			description: "客製化樣式",
// 			control: { type: "text" },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Title",
// 			description: {
// 				component: "Title組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Heading 標題樣式 ====//
// export const HeadingDefault = {
// 	name: "標題樣式",
// 	args: {
// 		content: "標題",
// 		themeColor: "",
// 		level: 1,
// 	},
// 	render: (args) => ({
// 		components: { Title },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
//             <Title
//                 :themeColor="args.themeColor"
//                 :level="args.level"
//             >{{ args.content }}</Title>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			exclude:['default']
// 		},
// 	},
// };

//--- JONY VERSION END ---//