import { useToast } from '@/composables/useToast.js';
import { computed } from 'vue';
import Toast from "@/ui/element/Toast/Toast.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Button from "@/ui/element/Button/Button.vue";
import Title from '@/ui/element/Title/Title.vue';
import StatusIndicator from '@/ui/element/StatusIndicator/StatusIndicator.vue';

export default {
	components: {Icon, Toast},
	title: "Component/Toast",
	component: Toast,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"neutral",
				"info",
				"success",
				"warning",
				"error",
			],
			table: {
				type: {
					summary: "primary | secondary | neutral | info | success | warning | error"
				}
			}
		},
		position: {
			description: "位置",
			control: { type: "select" },
			options: [
				"top-right", "top-left", "top-center",
				"bottom-right", "bottom-left", "bottom-center"
			],
			table: {
				type: {
					summary: "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center"
				}
			}
		},
		title: {
			description: "內容",
			control: { type: "text" },
		},
		content: {
			description: "說明文字",
			control: { type: "text" },
		},
		prefix: {
			description: "前綴元素",
			control: {
				type: "select",
				labels: {
					"": "none",
					SvgInfoCircle: "SvgInfoCircle",
					SvgSuccessCircle: "SvgSuccessCircle",
					SvgWarningTri: "SvgWarningTri",
					SvgErrorCircle: "SvgErrorCircle",
					SvgDisableCircle: "SvgDisableCircle",
				}
			},
			options: ['', 'SvgInfoCircle', 'SvgSuccessCircle', 'SvgWarningTri', 'SvgErrorCircle', 'SvgDisableCircle'],
		},
		duration: {
			description: "持續時間",
			control: { type: "range",
						min: 500,
						max: 5000,
						step: 100  },
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
		},
		onClose: {
			description: '關閉事件',
			table: {
				category: 'EVENTS',
				type: { summary: 'emits' },
			},
		},
		action: {
			description: "操作",
			control: { type: "text" },
			table: {
				type: {
					summary: "Vue Component | HTML"
				},
			},
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Toast",
			description: {
				component: "通知訊息組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const ToastDefault = {
	name: "預設項目",
	args: {
		themeColor: "success",
		position: "top-right",
		title: "Notification Title",
		content: "Content",
		prefix:'SvgSuccessCircle',
		duration: 500,
		className: "",
		action: `<div @click="onAction">Action</div>`,
	},
	render: (args) => ({
		components: { Toast, Button, Title, StatusIndicator, Icon },
		setup() {
			const onClose = () => {
				window.alert('Close');
			};
			const toastBorderClass = computed(() => {
				const color = args.themeColor;
				return `ded-toast-border-${color}`;
			});
			const toastHeaderMsgThemeClass = computed(() => {
				const color = args.themeColor;
				return `ded-toast-header-message-${color}`;
			});
			const onAction = () => {
				window.alert('Action');
			};
			return {
				args,
				onClose,
				toastBorderClass,
				toastHeaderMsgThemeClass,
				onAction,
				// computedTitle
			};
		},
		template: `
			<div class="ded-toast" :class="toastBorderClass">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<div class="ded-toast-header">
					<div class="ded-toast-header-message" :class="toastHeaderMsgThemeClass">
						<Icon :name="args.prefix" size="20"></Icon>
						<Title :themeColor="args.themeColor" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
					'<script setup>',
						`  import { Toast, Button } from "@ded-wds-vue/ui";`,
						'  import { useToast } from "@ded-wds-vue/ui";',
						'  const { add, toasts, remove } = useToast();',
						`  const showToast = () => {`,
						`    add({`,
						`      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`,
						`      ${args.position ? `position: "${args.position}",` : ""}`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						`    });`,
						`  };`,
						'</script>',
						'',
						'<template>',
						`  <Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    :themeColor="toast.themeColor"`,
						`    :title="toast.title"`,
						`    :content="toast.content"`,
						`    :prefix="toast.prefix"`,
						`    :duration="toast.duration"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="remove(toast.id)"`,
						`  >`,
						`    <template #action>`,
						`       <div>Action</div>`,
						`    </template>`,
						`  </Toast>`,
						`  <Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`  >`,
						`    Toast Trigger`,
						`  </Button>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 訊息類型 ====//
export const ToastTotal = {
	name: "訊息類型",
	args: {
		title: "Notification Title ",
		content: "Content",
		duration: 5000,
		className: "",
	},
	render: (args) => ({
		components: { Toast, Button, Title, StatusIndicator, Icon },
		setup() {
			const onClose = () => {
				window.alert('Close');
			};
			const onAction = () => {
				window.alert('Action');
			};
			return {
				args,
				onClose,
				onAction
			};
		},
		template: `
			<div class="ded-toast ded-toast-border-success">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-toast-header">
					<div class="ded-toast-header-message ded-toast-header-message-success">
						<Icon name="SvgSuccessCircle" size="20"></Icon>
						<Title themeColor="success" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-warning">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-toast-header">
					<div class="ded-toast-header-message ded-toast-header-message-warning">
						<Icon name="SvgWarningTri" size="20"></Icon>
						<Title themeColor="warning" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-error">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-toast-header">
					<div class="ded-toast-header-message ded-toast-header-message-error">
						<Icon name="SvgErrorCircle" size="20"></Icon>
						<Title themeColor="error" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-info">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-toast-header">
					<div class="ded-toast-header-message ded-toast-header-message-info">
						<Icon name="SvgInfoCircle" size="20"></Icon>
						<Title themeColor="info" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-neutral">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="SvgClose" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-toast-header">
					<div class="ded-toast-header-message ded-toast-header-message-neutral">
						<Icon name="SvgDisableCircle" size="20"></Icon>
						<Title themeColor="neutral" :level="5">
							{{ args.title }}
						</Title>
					</div>
					<div class="ded-toast-header-action">
						<div @click="onAction">
							Action
						</div>
					</div>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['themeColor','prefix','action', 'onClose'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<script setup>',
						`  import { Toast, Button } from "@ded-wds-vue/ui";`,
						'  import { useToast } from "@ded-wds-vue/ui";',
						'  const { add, toasts, remove } = useToast();',
						'  const showSuccessToast = () => {',
						'    add({',
						`      themeColor: "success",`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      prefix: "SvgSuccessCircle",`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						'    });',
						'  };',
						'  const showWarningToast = () => {',
						'    add({',
						`      themeColor: "warning",`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      prefix: "SvgWarningTri",`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						'    });',
						'  };',
						'  const showErrorToast = () => {',
						'    add({',
						`      themeColor: "error",`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      prefix: "SvgErrorCircle",`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						'    });',
						'  };',
						'  const showInfoToast = () => {',
						'    add({',
						`      themeColor: "info",`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      prefix: "SvgInfoCircle",`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						'    });',
						'  };',
						'  const showDisableToast = () => {',
						'    add({',
						`      themeColor: "neutral",`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      prefix: "SvgDisableCircle",`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						'    });',
						'  };',
						'</script>',
						'',
						'<template>',
						`  <Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    :themeColor="toast.themeColor"`,
						`    :title="toast.title"`,
						`    :content="toast.content"`,
						`    :prefix="toast.prefix"`,
						`    :duration="toast.duration"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="remove(toast.id)"`,
						`  >`,
						`    <template #action>`,
						`       <div>Action</div>`,
						`    </template>`,
						`  </Toast>`,
						`  <Button`,
						`    themeColor="success"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showSuccessToast"`,
						`  >`,
						`    Success Trigger`,
						`  </Button>`,
						`  <Button`,
						`    themeColor="warning"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showWarningToast"`,
						`  >`,
						`    Warning Trigger`,
						`  </Button>`,
						`  <Button`,
						`    themeColor="error"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showErrorToast"`,
						`  >`,
						`    Error Trigger`,
						`  </Button>`,
						`  <Button`,
						`    themeColor="info"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showInfoToast"`,
						`  >`,
						`    Info Trigger`,
						`  </Button>`,
						`  <Button`,
						`    themeColor="neutral"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showDisableToast"`,
						`  >`,
						`    Disable Trigger`,
						`  </Button>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};

//==== 互動模式 ====//
export const ToastInterAction = {
	name: "互動模式",
	args: {
		themeColor: "success",
		position: "top-center",
		title: "Notification Title ",
		content: "Content",
		prefix:'SvgSuccessCircle',
		duration: 50000,
		className: "",
		action: `<div @click="onAction">Action</div>`,
	},
	render: (args) => ({
		components: { Toast, Button },
		setup() {
			const { add, toasts, remove } = useToast();
			const showToast = () => {
				add({
					themeColor: args.themeColor,
					title: args.title,
					content: args.content,
					position: args.position,
				});
			};
			const onAction = () => {
				window.alert('Action');
			};
			return {
				args,
				toasts,
				remove,
				showToast,
				onAction
			};
		},
		template: `
			<Toast
				v-for="toast in toasts"
				:key="toast.id"
				:themeColor="toast.themeColor"
				:position="toast.position"
				:title="toast.title"
				:content="toast.content"
				:prefix="args.prefix"
				:duration="args.duration"
				:className="args.className"
				@onClose="remove(toast.id)"
			>
				<template #action>
					<div @click="onAction">Action</div>
				</template>
			</Toast>
			<Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
				Toast Trigger
			</Button>
        `,
	}),
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
			exclude: ['onClose']
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						'<script setup>',
						`  import { Toast, Button } from "@ded-wds-vue/ui";`,
						'  import { useToast } from "@ded-wds-vue/ui";',
						'  const { add, toasts, remove } = useToast();',
						`  const showToast = () => {`,
						`    add({`,
						`      ${args.themeColor ? `themeColor: "${args.themeColor}",` : ""}`,
						`      ${args.position ? `position: "${args.position}",` : ""}`,
						`      ${args.title ? `title: "${args.title}",` : ""}`,
						`      ${args.content ? `content: "${args.content}",` : ""}`,
						`      ${args.prefix ? `prefix: "${args.prefix}",` : ""}`,
						`      ${args.duration !== undefined ? `duration: ${args.duration},` : ""}`,
						`    });`,
						`  };`,
						'</script>',
						'',
						'<template>',
						`  <Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    :themeColor="toast.themeColor"`,
						`    :title="toast.title"`,
						`    :content="toast.content"`,
						`    :prefix="toast.prefix"`,
						`    :duration="toast.duration"`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    @onClose="remove(toast.id)"`,
						`  >`,
						`    <template #action>`,
						`       <div>Action</div>`,
						`    </template>`,
						`  </Toast>`,
						`  <Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`  >`,
						`    Toast Trigger`,
						`  </Button>`,
						'</template>',
					].filter(Boolean).join('\n').trim();
				}
			}
		}
	},
};