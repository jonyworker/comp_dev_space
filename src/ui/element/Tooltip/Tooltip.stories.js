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
			description: "提示內容",
			control: { type: "text" },
		},
		showArrow: {
			description: "是否顯示箭頭",
			control: { type: "boolean" },
		},
		placement: {
			description: "提示框位置",
			control: { type: "select" },
			options: [
				'top-left', 'top', 'top-right',
				'right-top', 'right', 'right-bottom',
				'bottom-right', 'bottom', 'bottom-left',
				'left-bottom', 'left', 'left-top'
			],
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},

		default: {
			description: 'tooltip 的觸發器',
			control: { type: 'text' },
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

//==== 主要項目 ====//
export const DefaultTooltip = {
	name: "主要項目",
	args: {
		content:'Hi, Hi~ Nice to meet you!',
		showArrow: true,
		placement: "bottom-left",
		default: `<button class="button button-contained component-large button-fit button-contained-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -960 960 960" class="icon-large"><path d="M360-390q-21 0-35.5-14.5T310-440t14.5-35.5T360-490t35.5 14.5T410-440t-14.5 35.5T360-390m240 0q-21 0-35.5-14.5T550-440t14.5-35.5T600-490t35.5 14.5T650-440t-14.5 35.5T600-390M480-160q134 0 227-93t93-227q0-24-3-46.5T786-570q-21 5-42 7.5t-44 2.5q-91 0-172-39T390-708q-32 78-91.5 135.5T160-486v6q0 134 93 227t227 93m0 80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m-54-715q42 70 114 112.5T700-640q14 0 27-1.5t27-3.5q-42-70-114-112.5T480-800q-14 0-27 1.5t-27 3.5M177-581q51-29 89-75t57-103q-51 29-89 75t-57 103m146-178"></path></svg>Hover Me</button>`,
		className: ''
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
				:placement="args.placement"
				:className="args.className"
			>
				<template #default>
					<div v-html="args.default"></div>
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





//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	components: {Tooltip},
// 	title: "Design System/Tooltip",
// 	component: Tooltip,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		content: {
// 			description: "顯示 Tooltip 文字",
// 			control: { type: "text" },
// 		},
// 		showArrow: {
// 			description: "顯示 Tooltip 箭頭",
// 			control: { type: "boolean" },
// 		},
// 		placement: {
// 			description: "控制 Tooltip 位置",
// 			control: { type: "select" },
// 			options: [
// 				'top-left', 'top', 'top-right',
// 				'right-top', 'right', 'right-bottom',
// 				'bottom-right', 'bottom', 'bottom-left',
// 				'left-bottom', 'left', 'left-top'
// 			],
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Tooltip",
// 			description: {
// 				component: "Tooltip組件的呈現及說明。",
// 			},
// 		},
// 		slots: {
// 			default: {
// 				description: '任何被包裝的物件都會成為 tooltip 的觸發器',
// 				template: `{{ args.default }}`,
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Tooltip 基礎樣式 ====//
// export const DefaultTooltip = {
// 	name: "Tooltip 基礎樣式",
// 	args: {
// 		content:'Hi, Hi~ Nice to meet you!',
// 		showArrow: true,
// 		placement: "bottom-left",
// 	},
// 	render: (args) => ({
// 		components: { Tooltip, Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 			<Tooltip
// 				:content="args.content"
// 				:showArrow="args.showArrow"
// 				:placement="args.placement" >
//
// 				<Button variant="contained" size="large" prefix="face">Hover Me</Button>
// 			</Tooltip>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 		},
// 	},
// };
//
// //==== Tooltip 顯示位置 ====//
// export const TooltipPlacement = {
// 	name: "Tooltip 顯示位置",
// 	args: {
// 		content:'',
// 		showArrow: true,
// 	},
// 	render: (args) => ({
// 		components: { Tooltip },
//
// 		setup() {
// 			const tooltipPosValue = ref([
// 				'top-left', 'top', 'top-right',
// 				'right-top', 'right', 'right-bottom',
// 				'bottom-right', 'bottom', 'bottom-left',
// 				'left-bottom', 'left', 'left-top',
// 			]);
// 			return {
// 				args,
// 				tooltipPosValue
// 			};
// 		},
// 		template: `
// 			<div style="
// 				width: 500px;
// 				display: flex;
// 				align-items: center;
// 				flex-wrap: wrap;
// 				gap: 40px;
// 				margin: 56px">
// 				<Tooltip
// 					v-for="(item, index) in tooltipPosValue"
// 					:key="index"
// 					:content="args.content || 'Tooltip on ' + item"
// 					:placement="item"
// 					:showArrow="args.showArrow">
// 					<!-- 被 tooltip 包裹的資料 -->
// 					<div
// 						style="
// 						width: 100px;
// 						height: 100px;
// 						display: flex;
// 						flex-direction: column;
// 						align-items: center;
// 						justify-content: center;
// 						border-radius: 12px;
// 						border: 2px solid #533bd4;
// 						color: #533bd4;
// 						padding: 8px;"
// 					>
// 						Hover<br>
// 						<p style="font-size: 12px;">
// 							- {{ item }} -
// 						</p>
// 					</div>
// 				</Tooltip>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			exclude: ['placement' ],
// 		},
// 	},
// };

//--- JONY VERSION END ---//