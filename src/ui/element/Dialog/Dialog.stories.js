import { ref, useSlots } from "vue";
import { useDialog } from '@/composables/useDialog.js';
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Dialog},
	title: "Design System/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"tertiary",
				"success",
				"warning",
				"error",
				"info",
			],
		},
		title: {
			description: "tooltip標題",
			control: { type: "text" },
		},
		message: {
			description: "tooltip說明文字",
			control: { type: "text" },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Dialog",
			description: {
				component: "Dialog組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Dialog 基礎樣式 ====//
export const DefaultDialog = {
	name: "Dialog基礎樣式",
	render: () => ({
		components: { Button },
		template: `
				<div class="dialog-wrapper">
					<div class="dialog-container">

						<div class="dialog-header">
							<slot name="dialog-header">
								<h3 class="dialog-title">Dialog Title</h3>
							</slot>
						</div>

						<div class="dialog-body">
							<slot name="dialog-body">
								<p class="dialog-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
							</slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialog-footer">
								<Button themeColor="primary" variant="text">
									Cancel
								</Button>
								<Button themeColor="primary" >Enable</Button>
							</slot>
						</div>
					</div>
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

//==== Dialog 自訂參數 ====//
export const CustomDialog = {
	name: "Dialog自訂按鈕",
	render: () => ({
		components: { Dialog, Button },
		setup() {
			const dialog = useDialog();
			const dialogData = ref({
				title:'Replace Image?',
				message:'A file named \"example.png\" already exist! Do you what to replace it?',
			})
			return {
				dialog ,
				dialogData,
			}
		},
		template: `
			<div id="dialog"></div>
			<Dialog
				:title="dialogData.title"
				:message="dialogData.message">
				<template #dialogFooter>
					<Button themeColor="error" size="medium" variant="text" @click="dialog.closeDialog()">Cancel</Button>
					<Button themeColor="error" size="medium" @click="dialog.closeDialog()">Replace</Button>
				</template>
			</Dialog>
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
