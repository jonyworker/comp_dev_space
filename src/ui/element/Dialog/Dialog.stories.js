import { useDialog } from "@/ui/element/Dialog/useDialog.js";
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Title from "@/ui/element/Title/Title.vue";

export default {
	components: {Title, Dialog },
	title: "Component/Dialog",
	component: Dialog,
	tags: ["autodocs"],
	argTypes: {
		hasClose: {
			description:"是否有關閉按鈕",
			control: { type: "boolean" },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		header: {
			description: "標題",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
				defaultValue: {
					summary: "Title",
				},
			},
		},
		content: {
			description: "內容",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
				defaultValue: {
					summary: "Content",
				},
			},
		},
		footer: {
			description: "附註",
			control: { type: "text" },

			table: {
				type: {
					summary: "Vue Component | HTML"
				},
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
export const DialogDefault = {
	name: "預設項目",
	args: {
		hasClose: true,
		className: '',
		header: `<Title themeColor="primary" :level="2" >Title</Title>`,
		content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
		footer: `<Button variant="filled" radius="md" class="ded-cancel-btn" v-on:click="onCancel">Cancel</Button><Button variant="filled" radius="md" @click="onConfirm">OK</Button>`,
	},
	render: (args) => ({
		components: { Dialog, Button, Icon,Title },
		setup() {
			const dialog = useDialog();
			const onClose = () => {
				window.alert('Close');
				dialog.closeDialog(); // 關閉對話框
			};
			const onConfirm = () => {
				window.alert('OK');
				dialog.closeDialog(); // 關閉對話框
			};
			const onCancel = () => {
				window.alert('Cancel');
				dialog.closeDialog(); // 關閉對話框
			};
			return {
				args,
				dialog,
				onClose,
				onConfirm,
				onCancel
			}
		},
		template: `
			<div :class="['ded-dialog-content', ...args.className.split(' ')]">
				<button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</button>
				<div class="ded-dialog-header">
					<Title themeColor="primary" :level="2" >Title</Title>
				</div>
				<div class="ded-dialog-body">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
				</div>
				<div class="ded-dialog-footer">
					<Button variant="filled" radius="md" class="ded-cancel-btn"
					        @click="onCancel">
						Cancel
					</Button>
					<Button variant="filled" radius="md" @click="onConfirm">
						OK
					</Button>
				</div>
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
						`<Dialog`,
						`  :hasClose="${args.hasClose}"`,
						`  className=""`,
						`>`,
						`  <template #header>`,
						`    <Title themeColor="primary" :level="2">Title</Title>`,
						`  </template>`,
						`  <template #content>`,
						`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
						`  </template>`,
						`  <template #footer>`,
						`    <Button`,
						`      variant="filled"`,
						`      radius="md"`,
						`      class="ded-cancel-btn"`,
						`      @click="onCancel"`,
						`    >`,
						`      Cancel`,
						`    </Button>`,
						`    <Button`,
						`      variant="filled"`,
						`      radius="md"`,
						`      @click="onConfirm"`,
						`    >`,
						`      OK`,
						`    </Button>`,
						`  </template>`,
						`</Dialog>`,
						``,
						`<Button`,
						`  variant="filled"`,
						`  radius="md"`,
						`  @click="dialog.showDialog"`,
						`>`,
						`  Open Dialog`,
						`</Button>`,
					].join("\n").trim();
				}
			}
		}
	},
};

//==== 互動模式 ====//
export const DialogDemo = {
	name: "互動模式",
	args: {
		content: 'Content',
		hasClose: true,
		className: '',
	},
	render: (args) => ({
		components: { Dialog, Button, Title },
		setup() {
			const dialog = useDialog();
			const onClose = () => {
				window.alert('Close');
				dialog.closeDialog(); // 關閉對話框
			};
			const onConfirm = () => {
				window.alert('OK');
				dialog.closeDialog(); // 關閉對話框
			};
			const onCancel = () => {
				window.alert('Cancel');
				dialog.closeDialog(); // 關閉對話框
			};
			return {
				args,
				dialog,
				onClose,
				onConfirm,
				onCancel
			}
		},
		template: `
			<Dialog
				:hasClose="args.hasClose"
				className=""
			>
				<template #header>
					<Title themeColor="primary" :level="2" >Title</Title>
				</template>
				<template #content>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
				</template>
				<template #footer>
					<Button variant="filled" radius="md" class="ded-cancel-btn"
					        @click="onCancel">
						Cancel
					</Button>
					<Button variant="filled" radius="md" @click="onConfirm">
						OK
					</Button>
				</template>
			</Dialog>
			
			<Button
		        variant="filled"
		        radius="md"
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
					return [
						`<Dialog`,
						`  :hasClose="${args.hasClose}"`,
						`  className=""`,
						`>`,
						`  <template #header>`,
						`    <Title themeColor="primary" :level="2">Title</Title>`,
						`  </template>`,
						`  <template #content>`,
						`    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
						`  </template>`,
						`  <template #footer>`,
						`    <Button`,
						`      variant="filled"`,
						`      radius="md"`,
						`      class="ded-cancel-btn"`,
						`      @click="onCancel"`,
						`    >`,
						`      Cancel`,
						`    </Button>`,
						`    <Button`,
						`      variant="filled"`,
						`      radius="md"`,
						`      @click="onConfirm"`,
						`    >`,
						`      OK`,
						`    </Button>`,
						`  </template>`,
						`</Dialog>`,
						``,
						`<Button`,
						`  variant="filled"`,
						`  radius="md"`,
						`  @click="dialog.showDialog"`,
						`>`,
						`  Open Dialog`,
						`</Button>`,
					].join("\n").trim();
				}
			}
		}
	},
};



