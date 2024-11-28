import CardBody from "@/ui/element/Card/CardBody.vue";
import Title from "@/ui/element/Title/Title.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";


export default {
	components: {Icon, Title},
	title: "Component/Card/子元件/03_CardBody",
	component: CardBody,
	tags: ["autodocs"],
	argTypes: {
		title: {
			description: '設定 CardBody 預設版型標題文字',
			control: { type: 'text' },
		},
		subTitle: {
			description: '設定 CardBody 預設版型副標題文字',
			control: { type: 'text' },
		},
		text: {
			description: '設定 CardBody 預設版型內容文字',
			control: { type: 'text' },
		},
		clamp: {
			description: "設定預設版型內容文字顯示行數",
			control: {
				type: 'range',
				min: 1,
				max: 5,
				step: 1 }
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "CardBody",
			description: {
				component: "CardBody組件的呈現及說明。",
			},
		},
	},
};

//==== CardBody 預設樣式 ====//
export const CardBodyDefault = {
	name: "CardBody 預設樣式",
	args: {
		title: "Card Header Title",
		subTitle: "",
		text: "Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.",
		clamp: 2
	},
	render: (args) => ({
		components: { CardBody },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardBody
				:title="args.title"
				:subTitle="args.subTitle"
				:text="args.text"
				:clamp="args.clamp"
				>
			</CardBody>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== CardBody 自訂樣式(slot) ====//
export const CardBodySlot = {
	name: "CardBody 自訂樣式(slot)",
	args: {
	},
	render: (args) => ({
		components: { CardBody,  Button ,Title },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardBody>
				<div style="display:flex; flex-direction: column; align-items: center">
					<Title class="card__title" level="2">Add your first image</Title>
					<p class="card__subtitle" style="margin-bottom: 16px;">Choose the images that will be included in this album.</p>
					<Button
						variant="text"
						size="small"
						width="fit"
						prefix="add"
					>
						Add Image
					</Button>
				</div>
			</CardBody>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};