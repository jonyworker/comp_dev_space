import { useToast } from '@/ui/element/Toast/useToast.js';
import Toast from "@/ui/element/Toast/Toast.vue";
import Icon from "@/ui/element/Icon/Icon.vue";
import Button from "@/ui/element/Button/Button.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Icon, Toast},
	title: "Design System/Toast*",
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

//==== 預設項目 ====//
// export const ToastType = {
// 	name: "預設項目",
// 	args: {
// 		themeColor: "success",
// 		title: "Toast Message",
// 		message: "Hello, world! This is a toast message.",
// 		show: true,
// 		icon: "",
// 	},
// 	render: (args) => ({
// 		components: { Toast, Icon },
// 		setup() {
// 			const closeToast = () => {
// 				args.show = false; // 处理关闭逻辑
// 			};
// 			return {
// 				args,
// 				closeToast
// 			};
// 		},
// 		template: `
// 			<div style="width: 30rem; ">
// 				<div class="ded-toast" :class="\`ded-toast-border-${args.themeColor}\`"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="ded-close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="ded-message">
// 					<span class="ded-icon-wrapper" :class="\`ded-toast-${args.themeColor}\`">
// 						<Icon name="check" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="ded-description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="ded-toast ded-toast-border-error"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="ded-close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="ded-message">
// 					<span class="ded-icon-wrapper ded-toast-error">
// 						<Icon name="close" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="ded-description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="ded-toast ded-toast-border-warning"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="ded-close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="ded-message">
// 					<span class="ded-icon-wrapper ded-toast-warning">
// 						<Icon name="exclamation" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="ded-description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="ded-toast ded-toast-border-info"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="ded-close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="ded-message">
// 					<span class="ded-icon-wrapper ded-toast-info">
// 						<Icon name="info" size="16"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="ded-description">{{ args.message }}</p>
// 				</div>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['title', 'message' ],
// 		},
// 		docs: {
// 			source: {
// 				transform: (src, storyContext) => {
// 					const { args } = storyContext;
// 					return [
// 						'<Toast',
// 						`  v-for="toast in toasts"`,
// 						`  :key="toast.id"`,
// 						`  themeColor="success"`,
// 						`  title="${args.title}"`,
// 						`  message="${args.message}"`,
// 						`  :duration="${args.duration}"`,
// 						`  icon=""`,
// 						`  @close="remove(toast.id)"`,
// 						'></Toast>',
// 						'<Toast',
// 						`  v-for="toast in toasts"`,
// 						`  :key="toast.id"`,
// 						`  themeColor="error"`,
// 						`  title="${args.title}"`,
// 						`  message="${args.message}"`,
// 						`  :duration="${args.duration}"`,
// 						`  icon=""`,
// 						`  @close="remove(toast.id)"`,
// 						'></Toast>',
// 						'<Toast',
// 						`  v-for="toast in toasts"`,
// 						`  :key="toast.id"`,
// 						`  themeColor="warning"`,
// 						`  title="${args.title}"`,
// 						`  message="${args.message}"`,
// 						`  :duration="${args.duration}"`,
// 						`  icon=""`,
// 						`  @close="remove(toast.id)"`,
// 						'></Toast>',
// 						'<Toast',
// 						`  v-for="toast in toasts"`,
// 						`  :key="toast.id"`,
// 						`  themeColor="info"`,
// 						`  title="${args.title}"`,
// 						`  message="${args.message}"`,
// 						`  :duration="${args.duration}"`,
// 						`  icon=""`,
// 						`  @close="remove(toast.id)"`,
// 						'></Toast>',
// 					].join('\n').trim();
// 				}
// 			}
// 		}
// 	},
// };







//--- JONY VERSION START ---//

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
// export default {
// 	components: {Icon, Toast},
// 	title: "Design System/Toast*",
// 	component: Toast,
// 	tags: ["autodocs"],
// 	argTypes: {
// 		title: {
// 			description: "Toast 標題",
// 			control: { type: "text" },
// 		},
// 		message: {
// 			description: "Toast 說明文字",
// 			control: { type: "text" },
// 		},
// 		themeColor: {
// 			description: "用於指示 Toast 信息的性質",
// 			control: { type: "select" },
// 			options: ['success', 'warning', 'error','info'],
// 		},
// 		duration: {
// 			description: "Toast 顯示的持續時間（毫秒）",
// 			control: { type: "range",
// 				min: 500,
// 				max: 10000,
// 				step: 500  },
// 		},
// 		show: { table: { disable: true } },
// 	},
// 	parameters: {
// 		// 自動文件
// 		docs: {
// 			title: "Toast",
// 			description: {
// 				component: "Toast 組件的呈現及說明。",
// 			},
// 		},
// 	},
//
// 	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
// 	// args: { onClick: fn() },
// };
//
// //==== Toast 種類樣式 ====//
// export const ToastType = {
// 	name: "Toast 種類樣式",
// 	args: {
// 		title: "Toast Message",
// 		message: "Hello, world! This is a toast message.",
// 		themeColor: "success",
// 		show: true
// 	},
// 	render: (args) => ({
// 		components: { Toast, Icon },
// 		setup() {
// 			const closeToast = () => {
// 				args.show = false; // 处理关闭逻辑
// 			};
// 			return {
// 				args,
// 				closeToast
// 			};
// 		},
// 		template: `
// 			<div style="width: 30rem; ">
// 				<div class="toast" :class="\`toast-border-${args.themeColor}\`"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="message">
// 					<span class="icon-wrapper" :class="\`toast-${args.themeColor}\`">
// 						<Icon name="check" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="toast toast-border-error"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="message">
// 					<span class="icon-wrapper toast-error">
// 						<Icon name="close" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="toast toast-border-warning"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="message">
// 					<span class="icon-wrapper toast-warning">
// 						<Icon name="exclamation" size="14"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="description">{{ args.message }}</p>
// 				</div>
//
// 				<div class="toast toast-border-info"  v-if="args.show">
// 					<!-- toast - 關閉按鈕 -->
// 					<button class="close-button cursor-pointer" @click="closeToast">
// 						<Icon name="close" size="20"></Icon>
// 					</button>
// 					<!-- toast - 標題及說明文字 -->
// 					<p class="message">
// 					<span class="icon-wrapper toast-info">
// 						<Icon name="info" size="16"></Icon>
// 					</span>
// 						<span>{{ args.title }}</span>
// 					</p>
// 					<p class="description">{{ args.message }}</p>
// 				</div>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			include: ['title', 'message' ],
// 		},
// 	},
// };
//
// //==== Toast 元件實驗室 ====//
// export const ToastDefaultNew = {
// 	name: "Toast 元件實驗室",
// 	args: {
// 		title: "Toast Title",
// 		message: "Hello, world! This is a toast message.",
// 		themeColor: "success",
// 		duration: 1100,
// 	},
// 	render: (args) => ({
// 		components: { Toast, Button },
// 		setup() {
// 			const { add, toasts, remove } = useToast();
// 			const showToast = () => {
// 				add({
// 					title: args.title,
// 					message: args.message,
// 					themeColor: args.themeColor,
// 				});
// 			};
// 			return {
// 				args,
// 				toasts,
// 				remove,
// 				showToast,
// 			};
// 		},
// 		template: `
// 			<Toast
// 				v-for="toast in toasts"
// 				:key="toast.id"
// 				:title="toast.title"
// 				:message="toast.message"
// 				:themeColor="toast.themeColor"
// 				:duration="args.duration"
// 				@close="remove(toast.id)"
// 			></Toast>
//
// 			<div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
// 				<Button width="full" themeColor="primary" variant="contained" @click="showToast">Toast Trigger</Button>
// 			</div>
//         `,
// 	}),
// 	// 控制 controls 中能控制的參數
// 	parameters: {
// 		controls: {
// 			// include: ['themeColor', 'label', 'value', 'name' ],
// 			exclude: ['close']
// 		},
// 	},
// };
//
// //==== Toast 觸發示意 ====//
// // export const ToastTrigger = {
// // 	name: "Toast 觸發示意 ",
// // 	args: {
// // 		duration: 5000,
// // 	},
// // 	render: (args) => ({
// // 		components: { Toast, Button },
// // 		setup() {
// // 			const { add, toasts, remove } = useToast();
// // 			const showSuccess = () => {
// // 				add({
// // 					title: "Success Message",
// // 					message: "Hello, world! This is a toast message.",
// // 					themeColor: "success",
// // 				});
// // 			};
// // 			const showError = () => {
// // 				add({
// // 					title: "Error Message",
// // 					message: "Hello, world! This is a toast message.",
// // 					themeColor: "error",
// // 				});
// // 			};
// // 			const showWarning = () => {
// // 				add({
// // 					title: "Warning Message",
// // 					message: "Hello, world! This is a toast message.",
// // 					themeColor: "warning",
// // 				});
// // 			};
// // 			const showInfo = () => {
// // 				add({
// // 					title: "Info Message",
// // 					message: "Hello, world! This is a toast message.",
// // 					themeColor: "info",
// // 				});
// // 			};
// // 			return {
// // 				args,
// // 				toasts,
// // 				remove,
// // 				showSuccess,
// // 				showError,
// // 				showWarning,
// // 				showInfo
// // 			};
// // 		},
// // 		template: `
// // 			<Toast
// // 				v-for="toast in toasts"
// // 				:key="toast.id"
// // 				:title="toast.title"
// // 				:message="toast.message"
// // 				:themeColor="toast.themeColor"
// // 				:duration="args.duration"
// // 				@close="remove(toast.id)"
// // 			></Toast>
// //
// // 			<div style="display:flex; flex-direction: column; gap: 16px; width: 200px">
// // 				<Button width="full" themeColor="success" variant="outlined" @click="showSuccess">Success Toast</Button>
// // 				<Button width="full" themeColor="error" variant="outlined" @click="showError">Error Toast</Button>
// // 				<Button width="full" themeColor="warning" variant="outlined" @click="showWarning">Warning Toast</Button>
// // 				<Button width="full" themeColor="info" variant="outlined" @click="showInfo">Info Toast</Button>
// // 			</div>
// //         `,
// // 	}),
// // 	// 控制 controls 中能控制的參數
// // 	parameters: {
// // 		controls: {
// // 			include: ['duration'],
// // 		},
// // 	},
// // };


//--- JONY VERSION END ---//