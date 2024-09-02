import Button from "@/ui/element/Button/Button.vue";
import Tooltip from "@/ui/element/Tooltip/Tooltip.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Tooltip},
	title: "Design System/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			description: "Tooltip位置",
			control: { type: "select" },
			options: [
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top'
			],
		},
		showArrow: {
			description: "控制顯示Tooltip箭頭",
			control: { type: "boolean" },
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
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Tooltip 基礎樣式 ====//
export const DefaultTooltip = {
	name: "基礎樣式",
	args: {

		placement: "bottom-left",
		showArrow: true,
	},
	render: (args) => ({
		components: { Tooltip, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
			<Tooltip :placement="args.placement">
				<Button variant="contained" size="large" prefix="face">Hover Me</Button>
				<template #content>
					Hi, Hi~ Nice to meet you!
				</template>
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
	name: "Tooltip顯示位置",
	args: {
		tooltipPosValue: [
			'top-left', 'top', 'top-right',
			'right-top', 'right', 'right-bottom',
			'bottom-right', 'bottom', 'bottom-left',
			'left-bottom', 'left', 'left-top',
		]
	},
	render: (args) => ({
		components: { Tooltip },
		setup() {
			return {
				args,
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
					v-for="(item) in args.tooltipPosValue"
					:placement="item" 
					:showArrow=true>
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
					
					<template #content>
						{{ 'Tooltip on ' + item }}
					</template>
				</Tooltip>
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