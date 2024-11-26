import { useDialog } from "@/ui/element/Dialog/useDialog.js";
import { sanitizeHtml } from '@/composables/sanitizeHtml.js';
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";
// import FakeContent from "@/ui/utility/FakeContent/FakeContent.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: { Dialog },
	title: "Design System/Dialog*",
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

// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// args: { onClick: fn() },
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

//==== 容器結構 ====//
// export const DialogSlotStyle = {
// 	name: "容器結構",
// 	args: {
// 		dialogHeader: ``,
//
// 		dialogBody: ``,
//
// 		dialogFooter: ``,
// 	},
// 	render: (args) => ({
// 		components: { Dialog, FakeContent, Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 			<div class="dialog-wrapper">
// 				<div class="dialog-container">
//
// 					<div class="dialog-header">
// 						<slot name="dialogHeader">
// 							<template v-if="args.dialogHeader">
// 								<div v-html="args.dialogHeader"></div>
// 							</template>
// 							<template v-else>
// 								<FakeContent height="50">#dialogHeader</FakeContent>
// 							</template>
// 						</slot>
// 					</div>
//
// 					<div class="dialog-body">
// 						<slot name="dialogBody">
// 							<template v-if="args.dialogBody">
// 								<div v-html="args.dialogBody"></div>
// 							</template>
// 							<template v-else>
// 								<FakeContent height="80">#dialogBody</FakeContent>
// 							</template>
// 						</slot>
// 					</div>
//
// 					<div class="dialog-footer">
// 						<slot name="dialogFooter">
// 							<template v-if="args.dialogFooter">
// 								<div v-html="args.dialogFooter"></div>
// 							</template>
// 							<template v-else>
// 								<FakeContent height="50">#dialogFooter</FakeContent>
// 							</template>
// 						</slot>
// 					</div>
//
// 				</div>
// 			</div>
// 		`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {},
// 		docs: {
// 			source: {
// 				transform: (src, storyContext) => {
// 					const { args } = storyContext;
// 					// const dataSourceString = formatDataSource(args.dataSource);
// 					return [
// 						'<Dialog>',
// 						'  <template #dialogHeader>',
// 						`    ${args.dialogHeader}"`,
// 						'  </template>',
// 						'  <template #dialogBody>',
// 						`    ${args.dialogBody}"`,
// 						'  </template>',
// 						'  <template >',
// 						`    ${args.dialogFooter}"`,
// 						'  </template>',
// 						'</Dialog>',
// 					].join('\n').trim();
//
// 				}
// 			}
// 		}
// 	},
// };






//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	components: { Dialog },
// 	title: "Design System/Dialog*",
// 	component: Dialog,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		dialogHeader: {
// 			description: "Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",
// 			control: { type: "text" },
// 		},
// 		dialogBody: {
// 			description: "Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",
// 			control: { type: "text" },
// 		},
// 		dialogFooter: {
// 			description: "Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",
// 			control: { type: "text" },
// 		},
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Dialog",
// 			description: {
// 				component: "Dialog 組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// // args: { onClick: fn() },
// };
//
// //==== Dialog 觸發樣式 ====//
// export const DialogClick = {
// 	name: "Dialog 觸發樣式",
// 	args: {
// 		dialogHeader: `<div class="title title-level-2 title-undefined">Replace Image?</div>`,
//
// 		dialogBody: `<p>A file named "example.png" already exist! Do you what to replace it?</p>`,
//
// 		dialogFooter: `<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>`,
// 	},
// 	render: (args) => ({
// 		components: { Dialog, Button },
// 		setup() {
// 			const dialog = useDialog();
// 			return {
// 				args,
// 				dialog
// 			}
// 		},
// 		template: `
// 			<Dialog>
// 				<template #dialogHeader>
// 					<div v-html="args.dialogHeader"></div>
// 				</template>
// 				<template #dialogBody>
// 					<div v-html="args.dialogBody"></div>
// 				</template>
// 				<template #dialogFooter>
// 					<div v-html="args.dialogFooter"></div>
// 				</template>
// 			</Dialog>
//
// 			<!-- Dialog 觸發器 -->
// 			<Button themeColor="error"
// 			        variant="contained"
// 			        size="medium"
// 			        prefix="replace"
// 			        @click="dialog.showDialog">
// 				Replace Image
// 			</Button>
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
// //==== Dialog 容器結構 ====//
// export const DialogSlotStyle = {
// 	name: "Dialog 容器結構",
// 	args: {
// 		dialogHeader: ``,
//
// 		dialogBody: ``,
//
// 		dialogFooter: ``,
// 	},
// 	render: (args) => ({
// 		components: { Dialog, FakeContent, Button },
// 		setup() {
// 			return {
// 				args,
// 			};
// 		},
// 		template: `
// 				<div class="dialog-wrapper">
// 					<div class="dialog-container">
//
// 						<div class="dialog-header">
// 							<slot name="dialogHeader">
// 								<template v-if="args.dialogHeader">
// 									<div v-html="args.dialogHeader"></div>
// 								</template>
// 								<template v-else>
// 									<FakeContent height="50">#dialogHeader</FakeContent>
// 								</template>
// 							</slot>
// 						</div>
//
// 						<div class="dialog-body">
// 							<slot name="dialogBody">
// 								<template v-if="args.dialogBody">
// 									<div v-html="args.dialogBody"></div>
// 								</template>
// 								<template v-else>
// 									<FakeContent height="80">#dialogBody</FakeContent>
// 								</template>
// 							</slot>
// 						</div>
//
// 						<div class="dialog-footer">
// 							<slot name="dialogFooter">
// 								<template v-if="args.dialogFooter">
// 									<div v-html="args.dialogFooter"></div>
// 								</template>
// 								<template v-else>
// 									<FakeContent height="50">#dialogFooter</FakeContent>
// 								</template>
// 							</slot>
// 						</div>
//
// 					</div>
// 				</div>
// 				`,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {},
// 	},
// };

//--- JONY VERSION END ---//