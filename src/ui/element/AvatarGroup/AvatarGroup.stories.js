import AvatarGroup from "./AvatarGroup.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/AvatarGroup",
	component: AvatarGroup,
	tags: ["autodocs"],
	argTypes: {
		items: {
			description: "AvatarGroup 資料來源",
			control: { type: "object" },
		},
		size: {
			description: "設定 AvatarGroup 的尺寸大小",
			control: { type: "select" },
			options: ["xsmall", "small", "medium", "large"],
		},
		shape: {
			description: "選擇 AvatarGroup 的外型樣式（圓形或方形）",
			control: { type: "select" },
			options: ["circle", "square"],
		},
		limit: {
			description: "在 AvatarGroup 中控制顯示的 Avatar 數量上限",
			control: { type: "number",
				min:0,
				max:5,
				step: 1 },
		},
		customClass: {
			description: "客製化樣式",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "AvatarGroup",
			description: {
				component: "AvatarGroup 組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Avatar 群組樣式 ====//
export const MultiAvatar = {
	name: "Avatar 群組樣式",
	args: {
		items:[
			{
				"userName": "Eason",
				"imageSrc": "https://picsum.photos/320/240/?random=1",
			},
			{
				"userName": "KevinYang",
				"imageSrc": "https://picsum.photos/320/240/?random=10",
			},
			{
				"userName": "AmosLee",
				"imageSrc": "https://picsum.photos/320/240/?random=100",
			},
			{
				"userName": "JohnWu",
				"imageSrc": "https://picsum.photos/320/240/?random=1000",
			}
		],
		size: "large",
		shape: "circle",
		limit: 3

	},
	render: (args) => ({
		components: { AvatarGroup },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; gap: 16px">
				<AvatarGroup 
					:items="args.items" 
					:size="args.size" 
					:shape="args.shape" 
					:limit="args.limit"
				></AvatarGroup>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['status', 'imageSrc', 'imageAlt', 'username' ],
		},
	},
};