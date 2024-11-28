import { useToast } from '@/ui/element/Toast/useToast.js';
import Toast from "@/ui/element/Toast/Toast.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Button from "@/ui/element/Button/Button.vue";

export default {
	components: {Icon, Toast},
	title: "Component/Toast*",
	component: Toast,
	tags: ["autodocs"],
	argTypes: {
		themeColor: {
			description: "主題顏色",
			control: { type: "select" },
			options: ['success', 'warning', 'error','info'],
			table: {
				type: {
					summary: "success | warning | error | info"
				}
			}
		},
		title: {
			description: "標題",
			control: { type: "text" },
		},
		message: {
			description: "說明文字",
			control: { type: "text" },
		},

		duration: {
			description: "顯示的持續時間（毫秒）",
			control: { type: "range",
						min: 500,
						max: 10000,
						step: 500  },
		},
		icon: {
			description: "icon",
			control: {
				type: "select",
				labels: {
					"": "None",
					home: "home",
					folder: "folder",
					academy: "academy",
					"arrow-forward": "arrow-forward",
					"finger-print": "finger-print",
				}
			},
			options: [ "", "home", "folder", "academy", "arrow-forward", "finger-print" ],
		},
		className: {
			description: "客製化樣式",
			control: { type: "text" },
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
export const ToastDefaultNew = {
	name: "預設項目",
	args: {
		themeColor: "success",
		title: "Toast Title",
		message: "Hello, world! This is a toast message.",
		duration: 5000,
		icon: "",
		className: "",
	},
	render: (args) => ({
		components: { Toast, Button },
		setup() {
			const { add, toasts, remove } = useToast();
			const showToast = () => {
				add({
					title: args.title,
					message: args.message,
					themeColor: args.themeColor,
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
				:message="toast.message"
				:duration="args.duration"
				:icon="args.icon"
				:className="args.className"
				@close="remove(toast.id)"
			></Toast>
			<Button width="full" themeColor="primary" variant="contained" @click="showToast">
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
						'  <Toast',
						'    v-for="toast in toasts"',
						'    :key="toast.id"',
						`    themeColor="${args.themeColor}"`,
						`    title="${args.title}"`,
						`    message="${args.message}"`,
						`    :duration="${args.duration}"`,
						`    icon="${args.icon}"`,
						`    className="${args.className}"`,
						'    @close="remove(toast.id)"',
						'  ></Toast>',
						'  <Button',
						'    width="fit"',
						'    themeColor="primary"',
						'    variant="contained"',
						'    @click="showToast"',
						'  >',
						'    Toast Trigger',
						'  </Button>',
						'</template>',
						'',
						'<script setup>',
						'  import { useToast } from "@/path/to/useToast";',
						'',
						'  const { add, toasts, remove } = useToast();',
						'',
						'  const showToast = () => {',
						'    add({',
						`      title: "${args.title}",`,
						`      message: "${args.message}",`,
						`      themeColor: "${args.themeColor}",`,
						'    });',
						'  };',
						'</script>',
					].join('\n').trim();
				}
			}
		}
	},
};