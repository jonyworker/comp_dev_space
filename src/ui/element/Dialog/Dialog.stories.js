
import Dialog from "@/ui/element/Dialog/Dialog.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Title from "@/ui/element/Title/Title.vue";
import Grid from "@/ui/layout/Grid/Grid.vue";
import Row from "@/ui/layout/Grid/Row.vue";
import Column from "@/ui/layout/Grid/Column.vue";

export default {
	components: {Column, Title, Dialog },
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
		modelValue:{
			description:"是否開啟",
			control: { type: "boolean" },
			table: {
				// type: { summary: 'string | string[]' },
				category: 'v-model',
				// defaultValue: { summary: '""' },
			}
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
				component: "彈窗組件的呈現及說明。",
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
		modelValue: true,
		header: `<Title themeColor="primary" :level="2" >Title</Title>`,
		content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
		footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`,
	},
	render: (args) => ({
		components: { Dialog, Button, Icon, Title, Grid, Row, Column },
		setup() {
			const onClose = () => {
				window.alert('Close');
				args.modelValue = false // 關閉對話框
			};
			const onConfirm = () => {
				window.alert('OK');
				args.modelValue = false // 關閉對話框
			};
			const onCancel = () => {
				window.alert('Cancel');
				args.modelValue = false // 關閉對話框
			};
			return {
				args,
				onClose,
				onConfirm,
				onCancel
			}
		},
		template: `
			<div :class="['ded-dialog-content', ...args.className.split(' ')]" v-if="args.modelValue">
				<button v-if="args.hasClose" class="ded-dialog-close-btn" @click="onClose()">
					<Icon name="SvgClose" size="20"></Icon>
				</button>
				<div class="ded-dialog-header">
					<Title themeColor="primary" :level="2" >Title</Title>
				</div>
				<div class="ded-dialog-body">
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
				</div>
				<div class="ded-dialog-footer">
					<Grid>
						<Row :hasGap="true">
							<Column :sm="4">
								<Button variant="filled" radius="4px" width="fluid" @click="onConfirm">
									OK
								</Button>
							</Column>
							<Column :sm="4">
								<Button variant="soft" radius="4px" width="fluid" @click="onCancel">
									Cancel
								</Button>
							</Column>
						</Row>
					</Grid>
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
						`<script setup>`,
						`import { ref } from "vue";`,
						`import Dialog from "@/ui/element/Dialog/Dialog.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`import Title from "@/ui/element/Title/Title.vue";`,
						`import Grid from "@/ui/layout/Grid/Grid.vue";`,
						`import Row from "@/ui/layout/Grid/Row.vue";`,
						`import Column from "@/ui/layout/Grid/Column.vue";`,
						`const modelValue = ref(${args.modelValue});`,
						`</script>`,
						'',
						'<template>',
						`  <Dialog`,
						`    ${args.hasClose !== undefined ? `:hasClose="${args.hasClose}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  >`,
						`    <template #header>`,
						`      <Title themeColor="primary" :level="2">Title</Title>`,
						`    </template>`,
						`  `,
						`    <template #content>`,
						`      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
						`    </template>`,
						`  `,
						`    <template #footer>`,
						`      <Grid>`,
						`        <Row :hasGap="true">`,
						`          <Column :sm="4">`,
						`            <Button`,
						`              variant="filled"`,
						`              radius="4px"`,
						`              width="fluid"`,
						`              @click="onConfirm()"`,
						`            >`,
						`              OK`,
						`            </Button>`,
						`          </Column>`,
						`          <Column :sm="4">`,
						`            <Button`,
						`              variant="soft"`,
						`              radius="4px"`,
						`              width="fluid"`,
						`              @click="onCancel()"`,
						`            >`,
						`              Cancel`,
						`            </Button>`,
						`          </Column>`,
						`        </Row>`,
						`      </Grid>`,
						`    </template>`,
						`  </Dialog>`,
						`  `,
						`  <Button`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="modelValue = true"`,
						`  >`,
						`    Open Dialog`,
						`  </Button>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 互動模式 ====//
export const DialogDemo = {
	name: "互動模式",
	args: {
		hasClose: true,
		modelValue: false,
		className: '',
		header: `<Title themeColor="primary" :level="2" >Title</Title>`,
		content: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
		footer: `<Grid><Row :hasGap="true"><Column :sm="4"><Button variant="filled" radius="4px" width="fluid" @click="onConfirm">OK</Button></Column><Column :sm="4"><Button variant="soft" radius="4px" width="fluid" @click="onCancel">Cancel</Button></Column></Row></Grid>`,
	},
	render: (args) => ({
		components: { Dialog, Button, Icon, Title, Grid, Row, Column },
		setup() {
			const onConfirm = () => {
				window.alert('OK');
				args.modelValue = false // 關閉對話框
			};
			const onCancel = () => {
				window.alert('Cancel');
				args.modelValue = false // 關閉對話框
			};

			return {
				args,
				onConfirm,
				onCancel,
			}
		},
		template: `
			<Dialog
				:hasClose="args.hasClose"
				:className="args.className"
				v-model="args.modelValue"
			>
				<template #header>
					<Title themeColor="primary" :level="2" >Title</Title>
				</template>
				<template #content>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
				</template>
				<template #footer>
					<Grid>
						<Row :hasGap="true">
							<Column :sm="4">
								<Button variant="filled" radius="4px" width="fluid" @click="onConfirm()">
									OK
								</Button>
							</Column>
							<Column :sm="4">
								<Button variant="soft" radius="4px" width="fluid" @click="onCancel()">
									Cancel
								</Button>
							</Column>
						</Row>
					</Grid>
				</template>
			</Dialog>
			
			<Button
		        variant="filled"
		        radius="4px"
		        @click="args.modelValue = true">
				Open Dialog
			</Button>
		`,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			// exclude:[ 'header', 'content', 'footer' ]
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<script setup>`,
						`import { ref } from "vue";`,
						`import Dialog from "@/ui/element/Dialog/Dialog.vue";`,
						`import Button from "@/ui/element/Button/Button.vue";`,
						`import Title from "@/ui/element/Title/Title.vue";`,
						`import Grid from "@/ui/layout/Grid/Grid.vue";`,
						`import Row from "@/ui/layout/Grid/Row.vue";`,
						`import Column from "@/ui/layout/Grid/Column.vue";`,
						`const modelValue = ref(${args.modelValue});`,
						`</script>`,
						'',
						'<template>',
						`  <Dialog`,
						`    ${args.hasClose !== undefined ? `:hasClose="${args.hasClose}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  >`,
						`    <template #header>`,
						`      <Title themeColor="primary" :level="2">Title</Title>`,
						`    </template>`,
						`  `,
						`    <template #content>`,
						`      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>`,
						`    </template>`,
						`  `,
						`    <template #footer>`,
						`      <Grid>`,
						`        <Row :hasGap="true">`,
						`          <Column :sm="4">`,
						`            <Button`,
						`              variant="filled"`,
						`              radius="4px"`,
						`              width="fluid"`,
						`              @click="onConfirm()"`,
						`            >`,
						`              OK`,
						`            </Button>`,
						`          </Column>`,
						`          <Column :sm="4">`,
						`            <Button`,
						`              variant="soft"`,
						`              radius="4px"`,
						`              width="fluid"`,
						`              @click="onCancel()"`,
						`            >`,
						`              Cancel`,
						`            </Button>`,
						`          </Column>`,
						`        </Row>`,
						`      </Grid>`,
						`    </template>`,
						`  </Dialog>`,
						`  `,
						`  <Button`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="modelValue = true"`,
						`  >`,
						`    Open Dialog`,
						`  </Button>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};



