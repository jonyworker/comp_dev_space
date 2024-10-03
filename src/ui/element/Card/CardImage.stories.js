import CardImage from "@/ui/element/Card/CardImage.vue";
import Image from "@/ui/element/Image/Image.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: "Design System/Card/子元件/02_CardImage",
	component: CardImage,
	components: { Image },
	tags: ["autodocs"],
	argTypes: {
		imgSrc: {
			description: "圖片來源",
			control: { type: 'select' },
			options: ['01', '02', '03', '04'],
			mapping: {
				'01': '../../../src/assets/fakeImg/avatar_01.jpg',
				'02': '../../../src/assets/fakeImg/avatar_02.jpg',
				'03': '../../../src/assets/fakeImg/avatar_03.jpg',
				'04': '../../../src/assets/fakeImg/avatar_04.jpg',
			},
		},
		imgRatio: {
			description: "調整圖片比例",
			control: { type: 'select' },
			options: ['1/1', '4/3', '5/4', '16/9'],
			mapping: {
				'1/1': '11',
				'4/3': '43',
				'5/4': '54',
				'16/9': '169',
			},
		},
		fullImg: {
			description: "設定卡片中圖片是否滿版",
			control: { type: "boolean" },
		},
		rounded: {
			description: "設定卡片中圖片是否帶圓角",
			control: { type: "boolean" },
		},

	},
	parameters: {
		// 自動文件
		docs: {
			title: "CardImage",
			description: {
				component: "CardImage組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== CardImage 預設樣式 ====//
export const CardImageDefault = {
	name: "CardImage預設樣式",
	args: {
		imgSrc: "01",
		imgRatio: "169",
		fullImg: false,
		rounded: true,
	},
	render: (args) => ({
		components: { CardImage },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardImage 
				:imgSrc="args.imgSrc"
				:fullImg="args.fullImg"
				:rounded="args.rounded"
				:imgRatio="args.imgRatio"
			>
			</CardImage>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== CardImage 自訂樣式(slot) ====//
export const CardImageSlot = {
	name: "CardImage 自訂樣式(slot)",
	args: {
		imgSrc: "02",
		imgRatio: "1/1",
		fullImg: true,
		rounded: true,
	},
	render: (args) => ({
		components: { CardImage, Image },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardImage :fullImg="args.fullImg" :rounded="args.rounded">
				<Image
					:ratio="args.imgRatio"
					objectFit="cover"
					:src="args.imgSrc">
				</Image>
			</CardImage>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};