import Button from "@/ui/element/Button/Button.vue";
import Tooltip from "@/ui/element/Tooltip/Tooltip.vue";
import  { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Tooltip},
	title: "Design System/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		content: {
			description: "顯示 Tooltip 文字",
			control: { type: "text" },
		},
		showArrow: {
			description: "顯示 Tooltip 箭頭",
			control: { type: "boolean" },
		},
		placement: {
			description: "控制 Tooltip 位置",
			control: { type: "select" },
			options: [
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top'
			],
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Tooltip",
			description: {
				component: "Tooltip組件的呈現及說明。",
			},
		},
		slots: {
			default: {
				description: '任何被包裝的物件都會成為 tooltip 的觸發器',
				template: `{{ args.default }}`,
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Tooltip 基礎樣式 ====//
export const DefaultTooltip = {
	name: "Tooltip 基礎樣式",
	args: {
		content:'Hi, Hi~ Nice to meet you!',
		showArrow: true,
		placement: "bottom-left",
	},
	render: (args) => ({
		components: { Tooltip, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Tooltip 
				:content="args.content"
				:showArrow="args.showArrow" 
				:placement="args.placement" > 
				
				<Button variant="contained" size="large" prefix="face">Hover Me</Button>
			</Tooltip>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Tooltip 顯示位置 ====//
export const TooltipPlacement = {
	name: "Tooltip 顯示位置",
	args: {
		content:'',
		showArrow: true,
	},
	render: (args) => ({
		components: { Tooltip },

		setup() {
			const tooltipPosValue = ref([
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top',
			]);
			return {
				args,
				tooltipPosValue
			};
		},
		template: `
			<div style="
				width: 500px;
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				gap: 40px;
				margin: 56px">
				<Tooltip 
					v-for="(item, index) in tooltipPosValue"
					:key="index"
					:content="args.content || 'Tooltip on ' + item"
					:placement="item" 
					:showArrow="args.showArrow">
					<!-- 被 tooltip 包裹的資料 -->
					<div
						style="
						width: 100px;
						height: 100px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						border-radius: 12px;
						border: 2px solid #533bd4;
						color: #533bd4;
						padding: 8px;"
					>
						Hover<br>
						<p style="font-size: 12px;">
							- {{ item }} -
						</p>
					</div>
				</Tooltip>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			exclude: ['placement' ],
		},
	},
};