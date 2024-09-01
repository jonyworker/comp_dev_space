import Password from './Password.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Password',
	component: Password,
	tags: ["autodocs"],
	argTypes: {
		size: {
			description: 'Password 尺寸',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		label: {
			description: '設定 Password 標題',
			control: { type: 'text' },
		},
		placeholder: {
			description: '設定 Password 輸入提示',
			control: { type: 'text' },
		},
		hint: {
			description: '提示訊息',
			control: {
				type: 'object',
			},
		},
		isDisable: {
			description: '是否禁用',
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
				component: 'Password組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Password 基礎樣式 ====//
export const DefaultPassword = {
	name: "基礎樣式",
	args: {
		label: '登入密碼',
		placeholder:'請輸入密碼',
		size: "medium",
		hint: { error: '', description: '請設定長度 8 碼，混合大小寫英文字母、數字及特殊符號' },
		isDisable: false
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
	            :label="args.label"
	            :placeholder="args.placeholder"
	            :size="args.size"
	            v-model="passwordInputData"
	            :hint="args.hint"
	            :isDisable="args.isDisable"
            ></Password>
            <p v-if="passwordInputData"> 點擊搜尋後傳送給後端的資料: {{passwordInputData}}</p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};