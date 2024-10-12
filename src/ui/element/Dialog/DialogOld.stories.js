import { ref } from "vue";
import { useDialog } from '@/composables/useDialog.js';
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";
import Title from "@/ui/element/Title/Title.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Dialog},
	title: "Design System/Dialog/ooold",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		title: {
			description: "顯示在 Dialog 中的標題文字",
			control: { type: "text" },
		},
		message: {
			description: "顯示在 Dialog 中的內容文字",
			control: { type: "text" },
		},
		themeColor: {
			description: "選擇 Dialog 的主題顏色",
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

//==== Dialog 樣式結構 ====//
export const DefaultDialog = {
	name: "Dialog 樣式結構",
	args: {
		title:"Dialog Title",
		message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been" +
			" the industry's standard",
		themeColor: "primary"
	},
	render: (args) => ({
		components: { Button, Title },
		setup() {
			return {
				args,
			};
		},
		template: `
				<div class="dialog-wrapper">
					<div class="dialog-container">
						
						<div class="dialog-header">
							<slot name="dialog-header">
								<Title class="" level="2">{{ args.title }}</Title>
							</slot>
						</div>

						<div class="dialog-body">
							<slot name="dialog-body">
								<p class="dialog-message">{{ args.message }}</p>
							</slot>
						</div>

						<div class="dialog-footer">
							<slot name="dialog-footer">
								<Button :themeColor="args.themeColor" variant="text">
									Cancel
								</Button>
								<Button :themeColor="args.themeColor" >Enable</Button>
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

//==== Dialog 自定義插槽 ====//
export const CustomDialog = {
	name: "Dialog 自定義插槽",
	args: {

	},
	render: (args) => ({
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
			<!-- 製作一個body讓teleport掛載-->
			<body></body>
			<Dialog
				:title="dialogData.title"
				:message="dialogData.message"
				>
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



