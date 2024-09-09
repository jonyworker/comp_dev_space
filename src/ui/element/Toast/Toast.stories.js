import { useToast } from '@/composables/useToast.js';
import Toast from "@/ui/element/Toast/Toast.vue";
import Button from "@/ui/element/Button/Button.vue";
import Icon from "@/ui/element/Icon/Icon.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	components: {Icon, Toast},
	title: "Design System/Toast",
	component: Toast,
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
		severity: {
			description: "tooltip嚴重程度",
			control: { type: "select" },
			options: ['success', 'warning', 'error','info'],
		},
		title: {
			description: "tooltip標題",
			control: { type: "text" },
		},
		message: {
			description: "tooltip說明文字",
			control: { type: "text" },
		},
		duration: {
			description: "tooltip顯示時間",
			control: { type: "number" },
		},
		id: {
			description: "tooltip id(多個顯示時)",
			control: { type: "text" },
		},
		show: {
			description: "tooltip 顯示控制)",
			control: { type: "boolean" },
		}
	},
	parameters: {
		// 自動文件
		docs: {
			title: "Toast",
			description: {
				component: "Toast組件的呈現及說明。",
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};
//==== Toast 種類樣式 ====//
export const DefaultToast = {
	name: "Toast種類樣式",
	render: () => ({
		components: { Toast, Icon },
		template: `
			<div style="width: 30rem; ">
				<div class="toast toast-border-success">
					<!-- toast - 關閉按鈕 -->
					<button class="close-button">
						<Icon name="close" size="20"></Icon>
					</button>
					<!-- toast - 標題及說明文字 -->
					<p class="message">
					<span class="icon-wrapper toast-success">
						<Icon name="check" size="14"></Icon>
					</span>
						<span>Success Message</span>
					</p>
					<p class="description">Hello, world! This is a toast message.</p>
				</div>
				
				<div class="toast toast-border-error">
					<!-- toast - 關閉按鈕 -->
					<button class="close-button">
						<Icon name="close" size="20"></Icon>
					</button>
					<!-- toast - 標題及說明文字 -->
					<p class="message">
					<span class="icon-wrapper toast-error">
						<Icon name="close" size="14"></Icon>
					</span>
						<span>Error Message</span>
					</p>
					<p class="description">Hello, world! This is a toast message.</p>
				</div>

				<div class="toast toast-border-warning">
					<!-- toast - 關閉按鈕 -->
					<button class="close-button">
						<Icon name="close" size="20"></Icon>
					</button>
					<!-- toast - 標題及說明文字 -->
					<p class="message">
					<span class="icon-wrapper toast-warning">
						<Icon name="exclamation" size="14"></Icon>
					</span>
						<span>Exclamation Message</span>
					</p>
					<p class="description">Hello, world! This is a toast message.</p>
				</div>

				<div class="toast toast-border-info">
					<!-- toast - 關閉按鈕 -->
					<button class="close-button">
						<Icon name="close" size="20"></Icon>
					</button>
					<!-- toast - 標題及說明文字 -->
					<p class="message">
					<span class="icon-wrapper toast-info">
						<Icon name="info" size="16"></Icon>
					</span>
						<span>Info Message</span>
					</p>
					<p class="description">Hello, world! This is a toast message.</p>
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

//==== Toast 觸發器 ====//
export const ToastControl = {
	name: "Toast觸發器 ",
	render: () => ({
		components: { Toast, Button },
		setup() {
			const { add, toasts, remove } = useToast();
			const showSuccess = () => {
				add({
					themeColor: 'success',
					severity: 'success',
					title: 'Success Message',
					message: 'Hello, world! This is a toast message.',
					life: 3000
				});
			};
			const showError = () => {
				add({
					themeColor: 'error',
					severity: 'error',
					title: 'Error Message',
					message: 'Hello, world! This is a toast message.',
					life: 3000
				});
			};
			const showWarning = () => {
				add({
					themeColor: 'warning',
					severity: 'warning',
					title: 'Warning Message',
					message: 'Hello, world! This is a toast message.',
					life: 3000
				});
			};
			const showInfo = () => {
				add({
					themeColor: 'info',
					severity: 'info',
					title: 'Info Message',
					message: 'Hello, world! This is a toast message.',
					life: 3000
				});
			};
			return {
				toasts,
				remove,
				showSuccess,
				showError,
				showWarning,
				showInfo
			};
		},
		template: `
			<div id="toast" class="toast-container"></div>
			<Toast
				v-for="toast in toasts"
				:key="toast.id"
				:themeColor="toast.themeColor"
				:severity="toast.severity"
				:title="toast.title"
				:message="toast.message"
				@close="remove(toast.id)"
			></Toast>

			<div style="display:flex; flex-direction: column; width: fit-content ;gap: 16px;">
				<Button themeColor="success" variant="outlined" @click="showSuccess">Success Toast</Button>
				<Button themeColor="error" variant="outlined" @click="showError">Error Toast</Button>
				<Button themeColor="warning" variant="outlined" @click="showWarning">Warning Toast</Button>
				<Button themeColor="info" variant="outlined" @click="showInfo">Info Toast</Button>
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

