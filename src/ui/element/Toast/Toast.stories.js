import { useToast } from '@/ui/element/Toast/useToast.js';
import { computed } from 'vue';
import Toast from "@/ui/element/Toast/Toast.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Button from "@/ui/element/Button/Button.vue";
import Title from '@/ui/element/Title/Title.vue';
import StatusIndicator from '@/ui/element/Status-Indicator/StatusIndicator.vue';

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
		title: {
			description: "內容",
			control: { type: "text" },
		},
		content: {
			description: "說明文字",
			control: { type: "text" },
		},
		prefix: {
			description: "前綴",
			control: {
				type: "select",
				labels: {
					"": "none",
					InfoCircleIcon: "InfoCircleIcon",
					SuccessCircleIcon: "SuccessCircleIcon",
					WarningCircleIcon: "WarningCircleIcon",
					ErrorCircleIcon: "ErrorCircleIcon",
				}
			},
			options: [ '', 'InfoCircleIcon', 'SuccessCircleIcon', 'WarningCircleIcon', 'ErrorCircleIcon' ],
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
		close: {
			description: '關閉事件',
			table: {
				category: 'Events',
				type: { summary: 'emits' },
			},
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Toast",
			description: {
				component: "Toast 組件的呈現及說明。",
			},
		},
	},
};

//==== 預設項目 ====//
export const ToastDefault = {
	name: "預設項目",
	args: {
		themeColor: "success",
		title: "Title",
		content: "Content",
		prefix:'SuccessCircleIcon',
		duration: 5000,
		className: "",
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
			return {
				args,
				onClose,
				toastBorderClass
			};
		},
		template: `
			<div class="ded-toast" :class="toastBorderClass">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-message">
					<StatusIndicator
						:themeColor="args.themeColor"
						variant="text"
						:prefix="args.prefix"
					>
						<Title>{{ args.title }}</Title>
					</StatusIndicator>
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
						'<template>',
						`  <Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    :themeColor="toast.themeColor"`,
						`    :title="${args.title}"`,
						`    :content="${args.content}"`,
						`    :prefix="${args.prefix}"`,
						`    :duration="${args.duration}"`,
						`    :className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`  ></Toast>`,
						`  <Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="md"`,
						`    @click="showToast"`,
						`  >`,
						`    Toast Trigger`,
						`  </Button>`,
						'</template>',
						'',
						'<script setup>',
						'  import { useToast } from "@/path/to/useToast";',
						'',
						'  const { add, toasts, remove } = useToast();',
						'',
						'  const showToast = () => {',
						'    add({',
						`      themeColor: "${args.themeColor}",`,
						`      title: "${args.title}",`,
						`      content: "${args.content}",`,
						'    });',
						'  };',
						'</script>',
					].join('\n').trim();
				}
			}
		}
	},
};

//==== 通知訊息類型 ====//
export const ToastTotal = {
	name: "預設項目",
	args: {
		title: "Title",
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
			return {
				args,
				onClose,
			};
		},
		template: `
			<div class="ded-toast ded-toast-border-success">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-message">
					<StatusIndicator
						themeColor="success"
						variant="text"
						prefix="SuccessCircleIcon"
					>
						<Title>{{ args.title }}</Title>
					</StatusIndicator>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-warning">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-message">
					<StatusIndicator
						themeColor="warning"
						variant="text"
						prefix="WarningCircleIcon"
					>
						<Title>{{ args.title }}</Title>
					</StatusIndicator>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-error">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-message">
					<StatusIndicator
						themeColor="error"
						variant="text"
						prefix="ErrorCircleIcon"
					>
						<Title>{{ args.title }}</Title>
					</StatusIndicator>
				</div>
				<p class="ded-description">{{ args.content }}</p>
			</div>

			<div class="ded-toast ded-toast-border-info">
				<!-- toast - 關閉按鈕 -->
				<Button class="ded-close-button" variant="text" themeColor="neutral" @click="onClose">
					<Icon name="close" size="20"></Icon>
				</Button>
				<!-- toast - 標題及說明文字 -->
				<div class="ded-message">
					<StatusIndicator
						themeColor="info"
						variant="text"
						prefix="InfoCircleIcon"
					>
						<Title>{{ args.title }}</Title>
					</StatusIndicator>
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
						`<Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    themeColor="success"`,
						`    :title="${args.title}"`,
						`    :content="${args.content}"`,
						`    prefix="SuccessCircleIcon"`,
						`    :duration="${args.duration}"`,
						`    className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`></Toast>`,
						`<Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`>`,
						`    Toast Trigger`,
						`</Button>`,

						`<Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    themeColor="warning"`,
						`    :title="${args.title}"`,
						`    :content="${args.content}"`,
						`    prefix="WarningCircleIcon"`,
						`    :duration="${args.duration}"`,
						`    className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`></Toast>`,
						`<Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`>`,
						`    Toast Trigger`,
						`</Button>`,

						`<Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    themeColor="error"`,
						`    :title="${args.title}"`,
						`    :content="${args.content}"`,
						`    prefix="ErrorCircleIcon"`,
						`    :duration="${args.duration}"`,
						`    className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`></Toast>`,
						`<Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`>`,
						`    Toast Trigger`,
						`</Button>`,

						`<Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    themeColor="info"`,
						`    :title="${args.title}"`,
						`    :content="${args.content}"`,
						`    prefix="InfoCircleIcon"`,
						`    :duration="${args.duration}"`,
						`    className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`></Toast>`,
						`<Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`>`,
						`    Toast Trigger`,
						`</Button>`,
						'',
						'<script setup>',
						'  import { useToast } from "@/path/to/useToast";',
						'',
						'  const { add, toasts, remove } = useToast();',
						'',
						'  const showToast = () => {',
						'    add({',
						`      themeColor: "${args.themeColor}",`,
						`      title: "${args.title}",`,
						`      content: "${args.content}",`,
						'    });',
						'  };',
						'</script>',
					].join('\n').trim();
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
		title: "Title",
		content: "Content",
		prefix:'SuccessCircleIcon',
		duration: 5000,
		className: "",
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
				});
			};
			return {
				args,
				toasts,
				remove,
				showToast,
			};
		},
		template: `
			<Toast
				v-for="toast in toasts"
				:key="toast.id"
				:themeColor="toast.themeColor"
				:title="toast.title"
				:content="toast.content"
				:prefix="args.prefix"
				:duration="args.duration"
				:className="args.className"
				@close="remove(toast.id)"
			></Toast>
			<Button themeColor="primary" variant="filled" radius="4px" @click="showToast">
				Toast Trigger
			</Button>
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
						'<template>',
						`  <Toast`,
						`    v-for="toast in toasts"`,
						`    :key="toast.id"`,
						`    :themeColor="toast.themeColor"`,
						`    :title="toast.title"`,
						`    :content="toast.content"`,
						`    :prefix="${args.prefix}"`,
						`    :duration="${args.duration}"`,
						`    :className="${args.className}"`,
						`    @close="remove(toast.id)"`,
						`  ></Toast>`,
						`  <Button`,
						`    themeColor="primary"`,
						`    variant="filled"`,
						`    radius="4px"`,
						`    @click="showToast"`,
						`  >`,
						`    Toast Trigger`,
						`  </Button>`,
						'</template>',
						'',
						'<script setup>',
						'  import { useToast } from "@/path/to/useToast";',
						'',
						'  const { add, toasts, remove } = useToast();',
						'',
						'  const showToast = () => {',
						'    add({',
						`      themeColor: "${args.themeColor}",`,
						`      title: "${args.title}",`,
						`      content: "${args.content}",`,
						'    });',
						'  };',
						'</script>',
					].join('\n').trim();
				}
			}
		}
	},
};