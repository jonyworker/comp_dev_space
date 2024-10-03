import Card from "@/ui/element/Card/Card.vue";
import Heading from "@/ui/element/Heading/Heading.vue";
import Button from "@/ui/element/Button/Button.vue";
import CardHeader from "@/ui/element/Card/CardHeader.vue";
import CardImage from "@/ui/element/Card/CardImage.vue";
import CardBody from "@/ui/element/Card/CardBody.vue";
import CardFooter from "@/ui/element/Card/CardFooter.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {

	title: "Design System/Card/Card",
	component: Card,
	subcomponents: { CardHeader, CardBody, CardImage, CardFooter},
	tags: ["autodocs"],
	argTypes: {
		elevation: {
			description: '設定 Card 浮動高度',
			control: 'select',
			options: ['none', 'low', 'high']
		},
		direction: {
			description: "設定 Card 對齊方向",
			control: 'select',
			options: ['row', 'col']
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Card",
			description: {
				component: "Card組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Card 預設樣式 ====//
export const CardDefault = {
	name: "Card 預設樣式",
	args: {
		elevation: 'high',
		direction: 'col',
	},
	render: (args) => ({
		components: { Card, CardHeader,CardImage, CardBody, CardFooter },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="width: 300px;">
				<Card :elevation="args.elevation" :direction="args.direction">
					<CardImage fullImg>
					</CardImage>

					<CardBody clamp="3">
					</CardBody>
				</Card>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Card 自訂樣式(slot) ====//
export const CardSlot = {
	name: "Card 自訂樣式(slot)",
	args: {
		divider: true,
	},
	render: (args) => ({
		components: { Card,  Button },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardHeader :divider="args.divider">
				<div style="display:flex; align-items: flex-start; justify-content: space-between">
					<div style="display:flex; flex-direction: column; gap: 8px">
						<Heading class="card__title" level="3">Staff availability</Heading>
						<p class="card__subtitle" style="margin-bottom: 16px;">See the days, times & locations this staff member is available to take appointments.</p>
					</div>
					<Button
						variant="outlined"
						size="small"
						width="fit"
						prefix="lock"
					>
						LOCK
					</Button>
				</div>
			</CardHeader>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};