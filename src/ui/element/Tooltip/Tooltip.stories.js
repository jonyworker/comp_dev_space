import Button from "@/ui/element/Button/Button.vue";
import Tooltip from "@/ui/element/Tooltip/Tooltip.vue";
import { sanitizeHtml } from '@/composables/sanitizeHtml.js';


export default {
	components: {Tooltip},
	title: "Component/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		content: {
			description: "提示內容",
			control: { type: "text" },
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
			table: {
				type: {
					summary: 'top-left | top | top-right | right-top | right | right-bottom | bottom-right | bottom | bottom-left | left-bottom | left | left-top '
				}
			}
		},
		showArrow: {
			description: "是否顯示箭頭",
			control: { type: "boolean" },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		default: {
			description: '觸發器插槽',
			control: { type: 'text' },
			table: {
				type: {
					summary: "Vue Component | HTML"
				}
			},
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Tooltip",
			description: {
				component: "提示工具組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const DefaultTooltip = {
	name: "預設項目",
	args: {
		content:'good day',
		placement: "top",
		showArrow: true,
		className: '',
		default: `<Button variant="contained" size="large" prefix="SvgAccount">Hover Me</Button>`,
	},
	render: (args) => ({
		components: { Tooltip, Button },
		setup() {
			return {
				args,
				sanitizeHtml
			};
		},
		template: `
			<div style="text-align: center">
				<Tooltip
					:content="args.content"
					:showArrow="args.showArrow"
					:placement="args.placement"
					:className="args.className"
				>
					<Button 
						themeColor="primary"
						variant="filled"
						prefix="SvgAccount"
					>
						Hover Me
					</Button>
				</Tooltip>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'  <Tooltip',
						`    content="${args.content}"`,
						`    placement="${args.placement}"`,
						`    :showArrow="${args.showArrow}"`,
						`    className="${args.className}"`,
						'  >',
						'    <Button themeColor="primary" variant="filled" prefix="SvgAccount">Hover Me</Button>',
						'  </Tooltip>',
					].join('\n').trim();
				}
			}
		}
	},
};