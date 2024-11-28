import { useDialog } from "@/ui/element/Dialog/useDialog.js";
import { sanitizeHtml } from '@/composables/sanitizeHtml.js';
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";

export default {
	components: { Dialog },
	title: "Component/Dialog*",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		title: {
			description: "標題",
			control: { type: "text" },
		},
		content: {
			description: "內文",
			control: { type: "text" },
		},
		confirmText: {
			description: "確認按鈕",
			control: { type: "text" },
		},
		cancelText: {
			description: "取消按鈕",
			control: { type: "text" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		dialogHeader: {
			description: "header 插槽",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				}
			},
		},
		dialogBody: {
			description: "body 插槽",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				}
			},
		},
		dialogFooter: {
			description: "footer 插槽",
			control: { type: "text" },
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
			title: "Dialog",
			description: {
				component: "Dialog 組件的呈現及說明。",
			},
		},
		actions: { disabled: true },
	},
};

//==== 預設項目 ====//
export const DialogClick = {
	name: "預設項目",
	args: {
		title: 'Title',
		content: 'Content',
		confirmText: 'OK',
		cancelText: 'Cancel',
		className: '',
		dialogHeader: '',
		dialogBody: ``,
		dialogFooter: ``,
	},
	render: (args) => ({
		components: { Dialog, Button },
		setup() {
			const dialog = useDialog();
			return {
				args,
				dialog,
				sanitizeHtml
			}
		},
		template: `
			<Dialog
				:title="args.title"
				:content="args.content"
				:confirmText="args.confirmText"
				:cancelText="args.cancelText"
			>
				<template #dialogHeader>
					<template v-if="args.dialogHeader">
						<div v-html="sanitizeHtml(args.dialogHeader)"></div>
					</template>
				</template>
				<template #dialogBody>
					<template v-if="args.dialogBody">
						<div v-html="sanitizeHtml(args.dialogBody)"></div>
					</template>
				</template>
				<template #dialogFooter>
					<template v-if="args.dialogFooter">
						<div v-html="sanitizeHtml(args.dialogFooter)"></div>
					</template>
				</template>
			</Dialog>

			<!-- Dialog 觸發器 -->
			<Button themeColor="primary"
			        variant="contained"
			        size="medium"
			        prefix="replace"
			        @click="dialog.showDialog">
				Open Dialog
			</Button>
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
					// const dataSourceString = formatDataSource(args.dataSource);
					return [
						'<Dialog',
						`  :title="${args.title}"`,
						`  :content="${args.content}"`,
						`  :confirmText="${args.confirmText}"`,
						`  :cancelText="${args.cancelText}"`,
						'>',
						'  <template #dialogHeader>',
						'    <template v-if="${args.dialogHeader}">',
						`      {{ ${args.dialogHeader} }}`,
						'    </template>',

						'  </template>',
						'  <template #dialogBody>',
						'    <template v-if="${args.dialogBody}">',
						`      {{ ${args.dialogBody} }}`,
						'    </template>',
						'  </template>',
						'  <template #dialogFooter>',
						'    <template v-if="${args.dialogFooter}">',
						`      {{ ${args.dialogFooter} }}`,
						'    </template>',
						'  </template>',
						'</Dialog>',
					].join('\n').trim();
				}
			}
		}
	},
};



