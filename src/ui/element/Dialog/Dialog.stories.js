import { useDialog } from "@/ui/element/Dialog/useDialog.js";
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";
import FakeContent from "@/ui/utility/FakeContent/FakeContent.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: { Dialog },
	title: "Design System/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		dialogHeader: {
			description: "Dialog 的 header 插槽，適合顯示主題或重要信息，支持 HTML 和文字內容。",
				control: { type: "text" },
		},
		dialogBody: {
			description: "Dialog 的 body 插槽，用於顯示主要內容。可包含文字、圖片、列表或任何其他組件。",
				control: { type: "text" },
		},
		dialogFooter: {
			description: "Dialog 的 footer 插槽，通常用於顯示按鈕或其他結尾內容，如確認、取消或其他操作。",
				control: { type: "text" },
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
	},

// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// args: { onClick: fn() },
};

//==== Dialog 觸發樣式 ====//
export const DialogClick = {
	name: "Dialog 觸發樣式",
	args: {
		dialogHeader: `<div class="title title-level-2 title-undefined">Replace Image?</div>`,

		dialogBody: `<p>A file named "example.png" already exist! Do you what to replace it?</p>`,

		dialogFooter: `<div style="display: flex; justify-content: flex-end; gap: 16px"><button class="button button-text button-fit button-text-error" @click="dialog.closeDialog()" >Cancel</button><button class="button button-contained button-fit button-contained-error" @click="dialog.closeDialog()">Replace</button></div>`,
	},
	render: (args) => ({
		components: { Dialog, Button },
		setup() {
			const dialog = useDialog();
			return {
				args,
				dialog
			}
		},
		template: `
			<Dialog>
				<template #dialogHeader>
					<div v-html="args.dialogHeader"></div>
				</template>
				<template #dialogBody>
					<div v-html="args.dialogBody"></div>
				</template>
				<template #dialogFooter>
					<div v-html="args.dialogFooter"></div>
				</template>
			</Dialog>
			
			<!-- Dialog 觸發器 -->
			<Button themeColor="error" 
			        size="medium" 
			        prefix="replace" 
			        @click="dialog.showDialog">
				Replace Image
			</Button>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};

//==== Dialog 容器結構 ====//
export const DialogSlotStyle = {
	name: "Dialog 容器結構",
	args: {
		dialogHeader: ``,

		dialogBody: ``,

		dialogFooter: ``,
	},
	render: (args) => ({
		components: { Dialog, FakeContent, Button },
		setup() {
			return {
				args,
			};
		},
		template: `
				<div class="dialog-wrapper">
					<div class="dialog-container">

						<div class="dialog-header">
							<slot name="dialogHeader">
								<template v-if="args.dialogHeader">
									<div v-html="args.dialogHeader"></div>
								</template>
								<template v-else>
									<FakeContent height="50">#dialogHeader</FakeContent>
								</template>
							</slot>
						</div>

						<div class="dialog-body">
							<slot name="dialogBody">
								<template v-if="args.dialogBody">
									<div v-html="args.dialogBody"></div>
								</template>
								<template v-else>
									<FakeContent height="80">#dialogBody</FakeContent>
								</template>
							</slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialogFooter">
								<template v-if="args.dialogFooter">
									<div v-html="args.dialogFooter"></div>
								</template>
								<template v-else>
									<FakeContent height="50">#dialogFooter</FakeContent>
								</template>
							</slot>
						</div>
						
					</div>
				</div>
				`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {},
	},
};
