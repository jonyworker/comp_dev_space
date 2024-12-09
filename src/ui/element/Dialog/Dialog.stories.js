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
		hasClose: false,
		className: '',
		header: 'Title',
		content: 'Content',
	},
	render: (args) => ({
		components: { Dialog, Button, Icon },
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
					{{ args.header }}
				</div>
				<div class="ded-dialog-body">
					{{ args.content }}
				</div>
				<div class="ded-dialog-footer">
					<Button variant="contained" size="medium" class="ded-cancel-btn"
					        @click="onCancel">
						Cancel
					</Button>
					<Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
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
						'<Dialog',
						`  :hasClose="${args.hasClose}"`,
						'  className=""',
						'>',
						'  <template #footer>',
						'    <Button',
						'      variant="contained"',
						'      size="medium"',
						'      class="ded-cancel-btn"',
						'      @click="onCancel"',
						'    >',
						'      Cancel',
						'    </Button>',
						'    <Button',
						'      variant="contained"',
						'      themeColor="error"',
						'      size="medium"',
						'      @click="onConfirm"',
						'    >',
						'      OK',
						'    </Button>',
						'  </template>',
						'</Dialog>',
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
					<Title :level="3">Title</Title>
				</template>
				<template #content>
					<p>Content</p>
				</template>
				<template #footer>
					<Button variant="contained" size="medium" class="ded-cancel-btn" @click="onCancel">
						Cancel
					</Button>
					<Button variant="contained" themeColor="primary" size="medium" @click="onConfirm">
						OK
					</Button>
				</template>
			</Dialog>

			<!-- Dialog 觸發器 -->
			<Button themeColor="primary"
			        variant="contained"
			        size="medium"
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
						`import { useDialog } from "@/ui/element/Dialog/useDialog.js";`,
						`const dialog = useDialog();`,
						'',
						'<Dialog',
						'  :hasClose="${args.hasClose}"',
						'  className=""',
						'>',
						'  <template #title>',
						'    <Title level="3">Title</Title>',
						'  </template>',
						'  <template #content>',
						'    <p>Content</p>',
						'  </template>',
						'  <template #footer>',
						'    <Button',
						'      variant="contained"',
						'      size="medium"',
						'      class="ded-cancel-btn"',
						'      @click="onCancel"',
						'    >',
						'      Cancel',
						'    </Button>',
						'    <Button',
						'      variant="contained"',
						'      themeColor="primary"',
						'      size="medium"',
						'      @click="onConfirm"',
						'    >',
						'      OK',
						'    </Button>',
						'  </template>',
						'</Dialog>',
						'',
						'<!-- Dialog 觸發器 -->',
						'<Button',
						'  themeColor="primary"',
						'  variant="contained"',
						'  size="medium"',
						'  prefix="replace"',
						'  @click="dialog.showDialog"',
						'>',
						'  Open Dialog',
						'</Button>',
					].join("\\n").trim();

				}
			}
		}
	},
};



