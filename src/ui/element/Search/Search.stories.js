import Search from './Search.vue';

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
		placeholder: {
			description: '輸入提示',
			control: { type: 'text' },
		},
		isDisabled: {
			description: '是否禁用',
			control: { type: 'boolean' },
		},
		className: {
			description: '客製化樣式',
			control: { type: 'text' },
		},
		modelValue: {
			description: "輸入值",
			control: { type: 'text' },
			table: {
				type: { summary: 'string' },
				category: 'v-model',
				// defaultValue: { summary: '""' },
			}
		}
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
		size: "medium",
		placeholder:'Type something',
		isDisabled: false,
		className:"",
		modelValue: "",
	},
	render: (args) => ({
		components: { Search },
		setup() {
			return {
				args,
			};
		},
		template: `
            <Search
				:size="args.size"
				:placeholder="args.placeholder"
	            :isDisabled="args.isDisabled"
				:className="args.className"
	            v-model="args.modelValue"
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
						`<script setup>`,
						'import { ref } from "vue";',
						`import Search from "@/ui/element/Search/Search.vue";`,
						'const modelValue = ref("");',
						`</script>`,
						'',
						'<template>',
						`  <Search`,
						`    ${args.size ? `size="${args.size}"` : ""}`,
						`    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Search>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};

//==== 元件尺寸 ====//
export const SearchSize = {
	name: "元件尺寸",
	args: {
		// themeColor: 'primary',
		size: "",
		placeholder:"Type something",
		isDisabled: false,
		className:"",
		modelValue: "",
	},
	render: (args) => ({
		components: { Search },
		setup() {
			return {
				args,
			};
		},
		template: `
			<div style="display:flex; flex-direction: column; gap: 10px">
				<Search
					:placeholder="args.placeholder"
					size="large"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue"
				></Search>
				<Search
					:placeholder="args.placeholder"
					size="medium"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue"
				></Search>
				<Search
					:placeholder="args.placeholder"
					size="small"
					:isDisabled="args.isDisabled"
					:className="args.className"
					v-model="args.modelValue"
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
						`<script setup>`,
						'import { ref } from "vue";',
						`import Search from "@/ui/element/Search/Search.vue";`,
						'const modelValue = ref("");',
						`</script>`,
						'',
						'<template>',
						`  <Search`,
						`    size="large"`,
						`    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Search>`,
						`  <Search`,
						`    size="medium"`,
						`    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Search>`,
						`  <Search`,
						`    size="small"`,
						`    ${args.placeholder ? `placeholder="${args.placeholder}"` : ""}`,
						`    ${args.isDisabled !== undefined ? `:isDisabled="${args.isDisabled}"` : ""}`,
						`    ${args.className ? `className="${args.className}"` : ""}`,
						`    v-model="modelValue"`,
						`  ></Search>`,
						'</template>',
					].filter(Boolean).join("\n").trim();
				}
			}
		}
	},
};