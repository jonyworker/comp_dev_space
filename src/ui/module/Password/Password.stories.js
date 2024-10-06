import Password from './Password.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Password',
	component: Password,
	tags: ["autodocs"],
	argTypes: {
		placeholder: {
			description: '設定 Password 的提示文字，幫助用戶了解預期輸入內容',
			control: { type: 'text' },
		},
		label: {
			description: '設定 Password 標題文字',
			control: { type: 'text' },
		},
		size: {
			description: '設定 Password 的大小',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		hint: {
			description: '顯示在 Password 下方的提示訊息，提供額外的指導信息',
			control: {
				type: 'object',
			},
		},
		isDisabled: {
			description: '設定 Password 是否禁用，禁用後無法進行輸入',
			control: { type: 'boolean' },
		},
		customClass: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
	},
	parameters: {
		// 自動文件
		docs: {
			title: 'Password',
			description: {
				component: 'Password 組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Password 基礎樣式 ====//
export const PasswordDefault = {
	name: "Password 基礎樣式",
	args: {
		placeholder:'請輸入密碼',
		label: '登入密碼',
		size: "medium",
		hint: { error: '', description: '請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號' },
		isDisabled: false
	},
	render: (args) => ({
		components: { Password },
		setup() {
			const passwordInputData = ref("");
			return {
				args,
				passwordInputData
			};
		},
		template: `
            <Password
	            :placeholder="args.placeholder"
	            :label="args.label"
	            :size="args.size"
	            :hint="args.hint"
	            :isDisabled="args.isDisabled"
	            v-model="passwordInputData"
            ></Password>
            <p v-if="passwordInputData"> 傳送給後端的資料: {{passwordInputData}}</p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};