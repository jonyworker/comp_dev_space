import CardFooter from "@/ui/element/Card/CardFooter.vue";
import Avatar from "@/ui/element/Avatar/Avatar.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Card/子元件/04_CardFooter",
	component: CardFooter,
	tags: ["autodocs"],
	argTypes: {
		text: {
			description: '設定 CardFooter 文字',
			control: { type: 'text' },
		},
		divider: {
			description: "設定分隔線顯示",
			control: { type: "boolean" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "CardFooter",
			description: {
				component: "CardFooter組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== CardFooter 預設樣式 ====//
export const CardFooterDefault = {
	name: "CardFooter 預設樣式",
	args: {
		text: "Last updated 3 min ago",
		divider: true,
	},
	render: (args) => ({
		components: { CardFooter },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardFooter
				:text="args.text"
				:divider="args.divider">
			</CardFooter>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== CardFooter 自訂樣式(slot) ====//
export const CardFooterSlot = {
	name: "CardFooter 自訂樣式(slot)",
	args: {
		divider: true,
	},
	render: (args) => ({
		components: { CardFooter, Avatar },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardFooter :divider="args.divider">
				<div style="display:flex; justify-content: space-between">
					<div style="display:flex; gap: 8px">
						<Avatar
							size="xsmall"
							shape="circle"
							imageSrc="src/assets/fakeImg/avatar_03.jpg"
						></Avatar>
						<span class="meta">Posted by John Doe</span>
					</div>
					<span class="meta">3 min ago</span>
				</div>
			</CardFooter>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};