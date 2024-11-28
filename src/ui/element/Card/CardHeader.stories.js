import CardHeader from "@/ui/element/Card/CardHeader.vue";
import Title from "@/ui/element/Title/Title.vue";
import Button from "@/ui/element/Button/Button.vue";


export default {
	components: {Title},
	title: "Component/Card/子元件/01_CardHeader",
	component: CardHeader,
	tags: ["autodocs"],
	argTypes: {
		text: {
			description: '設定 CardHeader 文字',
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
			title: "CardHeader",
			description: {
				component: "CardHeader組件的呈現及說明。",
			},
		},
	},
};

//==== CardHeader 預設樣式 ====//
export const CardHeaderDefault = {
	name: "CardHeader 預設樣式",
	args: {
		text: "Card Header Title",
		divider: true,
	},
	render: (args) => ({
		components: { CardHeader },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardHeader
				:text="args.text"
				:divider="args.divider">
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

//==== CardHeader 自訂樣式(slot) ====//
export const CardHeaderSlot = {
	name: "CardHeader 自訂樣式(slot)",
	args: {
		divider: true,
	},
	render: (args) => ({
		components: { CardHeader,  Button },
		setup() {
			return {
				args,
			};
		},
		template: `
			<CardHeader :divider="args.divider">
				<div style="display:flex; align-items: flex-start; justify-content: space-between">
					<div style="display:flex; flex-direction: column; gap: 8px">
						<Title class="card__title" level="3">Staff availability</Title>
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