import Search from './Search.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Design System/Search',
	component: Search,
	tags: ["autodocs"],
	argTypes: {
		btnVariant: {
			description: '按鈕按鈕樣式',
			control: { type: 'select' },
			options: ['contained', 'outlined', 'text'],
		},
		btnColor: {
			description: '按鈕按鈕顏色',
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'tertiary',
				'success',
				'warning',
				'error',
				'info',
			],
		},
		placeholder: {
			description: '設定 Search 的提示文字，幫助用戶了解預期輸入內容',
			control: { type: 'text' },
		},
		size: {
			description: '設定 Search 的大小',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		hint: {
			description: '顯示在 Search 下方的提示訊息，提供額外的指導信息',
			control: {
				type: 'object',
			},
		},
		isDisable: {
			description: '設定 Search 是否禁用，禁用後無法進行輸入',
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
			title: 'Search',
			description: {
				component: 'Search 組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Search 基礎樣式 ====//
export const DefaultSearch = {
	name: "Search 基礎樣式",
	args: {
		btnVariant: 'contained',
		btnColor: 'primary',
		placeholder:'請輸入關鍵字',
		size: "medium",
		hint: { error: '', description: '請輸入關鍵字搜尋' },
		isDisable: false
	},
	render: (args) => ({
		components: { Search },
		setup() {
			const searchInputData = ref("");
			return {
				args,
				searchInputData
			};
		},
		template: `
            <Search
	            :btnVariant="args.btnVariant"
	            :btnColor="args.btnColor"
	            :placeholder="args.placeholder"
	            :size="args.size"
	            :hint="args.hint"
	            :isDisable="args.isDisable"
	            v-model="searchInputData"
            ></Search>
            <p v-if="searchInputData"> 傳送給後端的資料: {{searchInputData}}</p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};