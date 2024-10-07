import Accordion from "./Accordion.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Accordion",
	component: Accordion,
	tags: ["autodocs"],
	argTypes: {
		items: {
			description: "Accordion 對應的資料陣列",
			control: { type: "object" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Accordion",
			description: {
				component: "Accordion 組件的呈現及說明。",
			},
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Accordion 基礎樣式 ====//
export const AccordionDefault = {
	name: "Accordion 基礎樣式",
	args: {
		accordionData: [
			{
				title: "這個產品跟我的設備能兼容嗎？",
				contents: [
					"使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。",
					"例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"
				],
			},
		]
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :items="args.accordionData"
            ></Accordion>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Accordion 群組樣式 ====//
export const AccordionGroup = {
	name: "Accordion 群組樣式",
	args: {
		accordionData: [
			{
				title: "怎麼保養我的產品？",
				contents: [
					"要讓你的產品保持最佳狀態，建議定期清理，並避免放在太熱或太冷的地方。",
					"比如說，用柔軟的布輕輕擦拭，不要用化學清潔劑哦！"
				],
			},
			{
				title: "保修政策是什麼？",
				contents: [
					"我們的產品提供一年保修，涵蓋材料和製作上的問題。",
					"記得保留購買憑證，如果需要維修，隨時聯繫我們的客服！"
				],
			},
			{
				title: "這個產品跟我的設備能兼容嗎？",
				contents: [
					"使用前先確保這個產品和你的設備是能搭配的，特別是在連接和設置上。",
					"例如，如果你是用舊款設備，建議查看一下產品手冊，確保一切正常！"
				],
			},
		]
	},
	render: (args) => ({
		components: { Accordion },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Accordion
                :items="args.accordionData"
            ></Accordion>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};