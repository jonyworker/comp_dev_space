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
		size: {
			description: '搜尋框尺寸',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		inputLabel: {
			description: '設定搜尋框標題',
			control: { type: 'text' },
		},
		placeholder: {
			description: '設定搜尋框輸入提示',
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
			title: 'Search',
			description: {
				component: '搜尋框組件的呈現及說明。',
			},
		},
	},

	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	// args: { onClick: fn() },
};

//==== Search 基礎樣式 ====//
export const DefaultSearch = {
	name: "基礎樣式",
	args: {
		placeholder:'請輸入關鍵字',
		size: "medium",
		inputLabel: '搜尋關鍵字',
		btnVariant: 'contained',
		btnColor: 'primary',
		hint: { error: '', description: 'Please enter a Guide description' },
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
	            :placeholder="args.placeholder"
	            :size="args.size"
	            :inputLabel="args.inputLabel"
	            :btnVariant="args.btnVariant"
	            :btnColor="args.btnColor"
	            v-model="searchInputData"
	            :hint="{ error: '', description: '請輸入關鍵字搜尋' }"
	            :isDisable="args.isDisable"
            ></Search>
            <p v-if="searchInputData"> 點擊搜尋後傳送給後端的資料: {{searchInputData}}</p>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['themeColor', 'label', 'value', 'name' ],
		},
	},
};