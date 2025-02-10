import Search from './Search.vue';
import {ref} from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
	title: 'Component/Search',
	component: Search,
	tags: ["autodocs"],
	argTypes: {
		// themeColor: {
		// 	description: "主題顏色",
		// 	control: { type: "select" },
		// 	options: [
		// 		"primary",
		// 		"secondary",
		// 		"neutral",
		// 		"info",
		// 		"success",
		// 		"warning",
		// 		"error",
		// 	],
		// 	table: {
		// 		type: {
		// 			summary: "primary | secondary | neutral | info | success | warning | error"
		// 		}
		// 	}
		// },
		placeholder: {
			description: '輸入提示',
			control: { type: 'text' },
		},
		size: {
			description: '尺寸',
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			table: {
				type: {
					summary: "small | medium | large "
				}
			}
		},
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		className: {
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

//==== 預設項目 ====//
export const SearchDefault = {
	name: "預設項目",
	args: {
		// themeColor: 'primary',
		placeholder:'Placeholder...',
		size: "medium",
		isDisabled: false,
		className:""
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
	            :isDisabledd="args.isDisabledd"
				:className="args.className"
	            v-model="searchInputData"
            ></Search>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Search`,
						// `  themeColor="${args.themeColor}"`,
						`  placeholder="${args.placeholder}"`,
						`  size="${args.size}"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  className="${args.className}"`,
						`  v-model="searchInputData"`,
						`></Search>`,
					].join("\n").trim();
				}
			}
		}
	},
};

//==== 尺寸 ====//
export const SearchSize = {
	name: "尺寸",
	args: {
		// themeColor: 'primary',
		placeholder:'Placeholder...',
		size: "",
		isDisabled: false,
		className:""
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
			<div style="display:flex; flex-direction: column; gap: 10px">
				<Search
				
					:placeholder="args.placeholder"
					size="small"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="searchInputData"
				></Search>
				<Search
				
					:placeholder="args.placeholder"
					size="medium"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="searchInputData"
				></Search>
				<Search
					
					:placeholder="args.placeholder"
					size="large"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="searchInputData"
				></Search>
			</div>
        `,
	}),
	// 控制 controls 中能控制的參數
	parameters: {
		controls: {
			// include: ['variant', 'content', 'themeColor', 'isDisabled', 'prefix'],
			exclude: ['size'],
		},
		docs: {
			source: {
				transform: (src, storyContext) => {
					const { args } = storyContext;
					return [
						`<Search`,
						// `  :themeColor="${args.themeColor}"`,
						`  :placeholder="${args.placeholder}"`,
						`  size="small"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :className="${args.className}"`,
						`  v-model="searchInputData"`,
						`></Search>`,
						`<Search`,
						// `  :themeColor="${args.themeColor}"`,
						`  :placeholder="${args.placeholder}"`,
						`  size="medium"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :className="${args.className}"`,
						`  v-model="searchInputData"`,
						`></Search>`,
						`<Search`,
						// `  :themeColor="${args.themeColor}"`,
						`  :placeholder="${args.placeholder}"`,
						`  size="large"`,
						`  :isDisabled="${args.isDisabled}"`,
						`  :className="${args.className}"`,
						`  v-model="searchInputData"`,
						`></Search>`,
					].join("\n").trim();
				}
			}
		}
	},
};